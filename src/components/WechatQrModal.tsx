'use client';

import { useEffect } from 'react';

interface WechatQrModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  qrSrc: string;
  description?: string;
}

export default function WechatQrModal({
  open,
  onClose,
  title,
  qrSrc,
  description,
}: WechatQrModalProps) {
  // ESC 键关闭
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    // 禁止背景滚动
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn" />

      {/* 弹窗内容 */}
      <div
        className="relative z-10 glass-card max-w-sm w-full p-6 text-center animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          type="button"
          onClick={onClose}
          aria-label="关闭"
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-[rgba(237,242,250,0.6)] hover:text-[#edf2fa] hover:bg-[rgba(255,255,255,0.1)] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>

        <h3 className="text-base font-semibold text-[#edf2fa] mb-1">{title}</h3>
        {description && (
          <p className="text-xs text-[rgba(237,242,250,0.55)] mb-4 leading-relaxed">
            {description}
          </p>
        )}

        {/* 二维码 */}
        <div className="bg-white rounded-xl p-3 mx-auto inline-block">
          <img
            src={qrSrc}
            alt={`${title} QR Code`}
            className="w-56 h-56 block"
          />
        </div>

        <p className="text-xs text-[rgba(237,242,250,0.4)] mt-3">
          使用微信扫一扫
        </p>
      </div>
    </div>
  );
}