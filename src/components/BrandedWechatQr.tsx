type BrandedWechatQrProps = {
  className?: string;
  label?: string;
};

export default function BrandedWechatQr({
  className = '',
  label = '「冻土回声」微信服务号二维码',
}: BrandedWechatQrProps) {
  return (
    <div
      className={`branded-qr ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="branded-qr__inner">
        <img
          src="/images/qr/wechat-official.png"
          alt=""
          aria-hidden="true"
          className="branded-qr__code"
        />
        <span className="branded-qr__logo" aria-hidden="true">
          <img src="/images/brand-original-mark.png" alt="" />
        </span>
      </div>
    </div>
  );
}
