'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type ActivityMediaCarouselProps = {
  images: string[];
  title: string;
  onOpen: (index: number) => void;
};

export default function ActivityMediaCarousel({ images, title, onOpen }: ActivityMediaCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (images.length < 2 || paused || prefersReducedMotion.current) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [images.length, paused]);

  const select = (next: number) => {
    setIndex((next + images.length) % images.length);
    setPaused(true);
  };

  return (
    <div
      className="activity-media"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <button
        className="activity-card-image group/image"
        onClick={() => onOpen(index)}
        aria-label={`查看 ${title} 的第 ${index + 1} 张照片，共 ${images.length} 张`}
      >
        {images.map((src, imageIndex) => (
          <Image
            key={src}
            src={src}
            alt={`${title} · ${imageIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover activity-media__image ${imageIndex === index ? 'is-active' : ''}`}
          />
        ))}
        <div className="activity-image-hover">
          <Images size={20} />
          <span>查看图集</span>
        </div>
        <span className="image-counter">{index + 1} / {images.length}</span>
      </button>

      {images.length > 1 && (
        <>
          <button className="activity-media__arrow is-prev" onClick={() => select(index - 1)} aria-label="上一张照片">
            <ChevronLeft size={18} />
          </button>
          <button className="activity-media__arrow is-next" onClick={() => select(index + 1)} aria-label="下一张照片">
            <ChevronRight size={18} />
          </button>
          <div className="activity-media__dots" aria-label="选择照片">
            {images.map((src, dotIndex) => (
              <button
                key={src}
                className={dotIndex === index ? 'is-active' : ''}
                onClick={() => select(dotIndex)}
                aria-label={`第 ${dotIndex + 1} 张`}
                aria-current={dotIndex === index ? 'true' : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
