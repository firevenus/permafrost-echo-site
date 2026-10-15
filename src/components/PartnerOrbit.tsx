'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { PartnerInfo } from '@/lib/data';

function PartnerCard({ partner }: { partner: PartnerInfo }) {
  const content = (
    <div className="partner-orbit-card glass-card">
      <div className="partner-orbit-logo">
        {partner.logo ? (
          <img src={partner.logo} alt="" className={partner.logoTone === 'light' ? 'partner-logo--light' : ''} />
        ) : (
          <span>{partner.logoText || partner.name}</span>
        )}
      </div>
      <strong>{partner.name}</strong>
      <small>{partner.category}</small>
    </div>
  );

  return partner.website ? (
    <a href={partner.website} target="_blank" rel="noopener noreferrer" aria-label={`${partner.name} — 访问官网`}>
      {content}
    </a>
  ) : content;
}

export default function PartnerOrbit({ partners }: { partners: PartnerInfo[] }) {
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rotationRef = useRef({ yaw: 0, pitch: -0.12 });
  const draggingRef = useRef(false);
  const pausedRef = useRef(false);
  const startRef = useRef({ x: 0, y: 0, yaw: 0, pitch: 0 });
  const resumeTimer = useRef<number | null>(null);

  const points = useMemo(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    return partners.map((_, index) => {
      const y = 1 - (2 * (index + 0.5)) / partners.length;
      const radius = Math.sqrt(1 - y * y);
      const theta = index * goldenAngle;
      return { x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius };
    });
  }, [partners]);

  const drawSphere = useCallback((forceClear = false) => {
    const stage = stageRef.current;
    if (!stage) return;

    const { yaw, pitch } = rotationRef.current;
    const cosY = Math.cos(yaw);
    const sinY = Math.sin(yaw);
    const cosX = Math.cos(pitch);
    const sinX = Math.sin(pitch);
    const radiusX = stage.clientWidth * 0.36;
    const radiusY = stage.clientHeight * 0.39;

    points.forEach((point, index) => {
      const node = nodeRefs.current[index];
      if (!node) return;

      const x1 = point.x * cosY + point.z * sinY;
      const z1 = -point.x * sinY + point.z * cosY;
      const y2 = point.y * cosX - z1 * sinX;
      const z2 = point.y * sinX + z1 * cosX;
      const depth = (z2 + 1) / 2;
      const scale = 0.62 + depth * 0.38;
      const blur = forceClear || pausedRef.current ? 0 : Math.max(0, (0.36 - depth) * 0.72);

      node.style.transform = `translate3d(${(x1 * radiusX).toFixed(2)}px, ${(y2 * radiusY).toFixed(2)}px, 0) translate(-50%, -50%) scale(${scale.toFixed(4)})`;
      node.style.opacity = String(0.56 + depth * 0.44);
      node.style.filter = blur > 0.01 ? `blur(${blur.toFixed(2)}px)` : 'none';
      node.style.zIndex = String(Math.round(10 + depth * 80));
    });
  }, [points]);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let previous = performance.now();

    const tick = (now: number) => {
      const elapsed = Math.min(48, now - previous);
      previous = now;
      if (!reducedMotion && !pausedRef.current && !draggingRef.current) {
        rotationRef.current.yaw += elapsed * 0.00066;
        rotationRef.current.pitch = -0.12 + Math.sin(now / 7000) * 0.035;
        drawSphere(false);
      }
      frame = requestAnimationFrame(tick);
    };

    drawSphere(reducedMotion);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [drawSphere]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(() => drawSphere(pausedRef.current));
    observer.observe(stage);
    return () => observer.disconnect();
  }, [drawSphere]);

  useEffect(() => () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
  }, []);

  const setPauseState = (value: boolean) => {
    pausedRef.current = value;
    setPaused(value);
  };

  const pauseAfterInteraction = () => {
    setPauseState(true);
    drawSphere(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPauseState(false), 2600);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    setPauseState(true);
    draggingRef.current = true;
    setDragging(true);
    startRef.current = {
      x: event.clientX,
      y: event.clientY,
      yaw: rotationRef.current.yaw,
      pitch: rotationRef.current.pitch,
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    rotationRef.current.yaw = startRef.current.yaw + (event.clientX - startRef.current.x) * 0.008;
    rotationRef.current.pitch = Math.max(-0.9, Math.min(0.9, startRef.current.pitch - (event.clientY - startRef.current.y) * 0.006));
    drawSphere(true);
  };

  const stopDragging = () => {
    draggingRef.current = false;
    setDragging(false);
    pauseAfterInteraction();
  };

  return (
    <>
      <div
        ref={stageRef}
        className={`partner-orbit-stage ${dragging ? 'is-dragging' : ''} ${paused ? 'is-paused' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            rotationRef.current.yaw += event.key === 'ArrowLeft' ? -0.18 : 0.18;
            pauseAfterInteraction();
          }
        }}
        role="group"
        tabIndex={0}
        aria-label="合作伙伴球形展示；可拖动或使用方向键旋转"
      >
        <div className="partner-orbit-center" aria-hidden="true">
          <img src="/images/brand-original-lockup.png" alt="" />
        </div>
        {partners.map((partner, index) => (
          <div
            key={partner.id}
            ref={(node) => { nodeRefs.current[index] = node; }}
            className="partner-orbit-node"
          >
            <PartnerCard partner={partner} />
          </div>
        ))}
      </div>

      <div className="partner-orbit-mobile" aria-label="合作伙伴列表">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </>
  );
}
