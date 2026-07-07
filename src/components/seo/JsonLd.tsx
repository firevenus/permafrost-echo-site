export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '冻土回声 | Permafrost Echo',
    alternateName: ['Permafrost Echo', '冻土回声'],
    url: 'https://permafrost-echo.com',
    description:
      '东北亚独立游戏生态平台 — 专注于独立游戏生态的内容与活动组织平台，立足沈阳，覆盖东北亚。',
    email: 'contact@permafrost-echo.com',
    foundingDate: '2024',
    areaServed: {
      '@type': 'Continent',
      name: 'Northeast Asia',
    },
    knowsAbout: [
      'Indie Games',
      'Game Development',
      'Game Jam',
      'Independent Game Publishing',
      'Game Community',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
