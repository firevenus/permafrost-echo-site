import type { Locale } from '@/i18n/routing';

export interface PartnerInfo {
  id: string;
  name: string;
  nameEn?: string;
  category: string;
  description: string;
  logo: string;
  website?: string;
}

const zhPartners: PartnerInfo[] = [
  {
    id: 'unity-china',
    name: 'Unity 中国',
    nameEn: 'Unity China',
    category: '引擎技术',
    description: '全球领先的实时 3D 内容创作平台，为独立游戏开发者提供强大的技术支持与生态资源。',
    logo: '/images/partners/unity.svg',
  },
  {
    id: 'netease-digital',
    name: '网易沈阳数字产业中心',
    nameEn: 'Netease Shenyang Digital Industry Center',
    category: '产业孵化',
    description: '网易在东北地区设立的数字产业创新基地，聚焦游戏、数字内容与科技产业孵化。',
    logo: '/images/partners/netease-digital.svg',
  },
  {
    id: 'netease-edu',
    name: '网易游戏学堂',
    nameEn: 'Netease Game Academy',
    category: '教育培养',
    description: '网易游戏旗下的游戏人才培养平台，提供游戏设计、开发、美术等专业课程与培训。',
    logo: '/images/partners/netease-edu.svg',
  },
  {
    id: 'tencent-edu',
    name: '腾讯游戏学堂',
    nameEn: 'Tencent Game Academy',
    category: '教育培养',
    description: '腾讯游戏旗下的游戏人才培养与学术交流平台，致力于推动游戏产业人才发展。',
    logo: '/images/partners/tencent-edu.svg',
  },
  {
    id: 'asus-liaoning',
    name: '华硕辽宁',
    nameEn: 'ASUS Liaoning',
    category: '硬件设备',
    description: '华硕在辽宁地区的分支机构，为游戏活动与开发者提供高性能硬件设备支持。',
    logo: '/images/partners/asus.svg',
  },
  {
    id: 'aura',
    name: '狼蛛 Aura',
    nameEn: 'Aura',
    category: '外设装备',
    description: '知名电竞外设品牌，为独立游戏开发者和玩家提供专业级外设装备。',
    logo: '/images/partners/aura.svg',
  },
  {
    id: 'xirang-games',
    name: '戏壤科技',
    nameEn: 'Xirang Games',
    category: '游戏开发',
    description: '位于沈阳的独立游戏开发公司，致力于创造承载光阴故事的游戏作品。「游戏承载着光阴的故事。」',
    logo: '/images/partners/xirang-games.png',
    website: 'https://www.xirang.games/',
  },
];

const enPartners: PartnerInfo[] = [
  {
    id: 'unity-china',
    name: 'Unity China',
    nameEn: 'Unity China',
    category: 'Engine Technology',
    description: "The world's leading real-time 3D content creation platform, providing powerful technical support and ecosystem resources for indie game developers.",
    logo: '/images/partners/unity.svg',
  },
  {
    id: 'netease-digital',
    name: 'Netease Shenyang Digital Industry Center',
    nameEn: 'Netease Shenyang Digital Industry Center',
    category: 'Industry Incubation',
    description: "Netease's digital industry innovation base in Northeast China, focusing on game, digital content, and tech industry incubation.",
    logo: '/images/partners/netease-digital.svg',
  },
  {
    id: 'netease-edu',
    name: 'Netease Game Academy',
    nameEn: 'Netease Game Academy',
    category: 'Education & Training',
    description: "Netease Games' talent cultivation platform, offering professional courses and training in game design, development, and art.",
    logo: '/images/partners/netease-edu.svg',
  },
  {
    id: 'tencent-edu',
    name: 'Tencent Game Academy',
    nameEn: 'Tencent Game Academy',
    category: 'Education & Training',
    description: "Tencent Games' talent cultivation and academic exchange platform, dedicated to advancing game industry talent development.",
    logo: '/images/partners/tencent-edu.svg',
  },
  {
    id: 'asus-liaoning',
    name: 'ASUS Liaoning',
    nameEn: 'ASUS Liaoning',
    category: 'Hardware',
    description: "ASUS's regional branch in Liaoning, providing high-performance hardware support for game events and developers.",
    logo: '/images/partners/asus.svg',
  },
  {
    id: 'aura',
    name: 'Aura',
    nameEn: 'Aura',
    category: 'Gaming Peripherals',
    description: 'A renowned esports peripherals brand, providing professional-grade gear for indie game developers and players.',
    logo: '/images/partners/aura.svg',
  },
  {
    id: 'xirang-games',
    name: 'Xirang Games',
    nameEn: 'Xirang Games',
    category: 'Game Development',
    description: 'An indie game development studio based in Shenyang, dedicated to creating games that carry the story of time. "Games carry the story of time."',
    logo: '/images/partners/xirang-games.png',
    website: 'https://www.xirang.games/',
  },
];

const jaPartners: PartnerInfo[] = [
  {
    id: 'unity-china',
    name: 'Unity 中国',
    nameEn: 'Unity China',
    category: 'エンジン技術',
    description: '世界をリードするリアルタイム3Dコンテンツ制作プラットフォーム。インディーゲーム開発者に強力な技術サポートとエコシステムリソースを提供。',
    logo: '/images/partners/unity.svg',
  },
  {
    id: 'netease-digital',
    name: 'NetEase瀋陽デジタル産業センター',
    nameEn: 'Netease Shenyang Digital Industry Center',
    category: '産業インキュベーション',
    description: 'NetEaseが東北地域に設立したデジタル産業イノベーション拠点。ゲーム、デジタルコンテンツ、テクノロジー産業のインキュベーションに注力。',
    logo: '/images/partners/netease-digital.svg',
  },
  {
    id: 'netease-edu',
    name: 'NetEaseゲームアカデミー',
    nameEn: 'Netease Game Academy',
    category: '教育育成',
    description: 'NetEase Games傘下のゲーム人材育成プラットフォーム。ゲームデザイン、開発、アートなどの専門コースとトレーニングを提供。',
    logo: '/images/partners/netease-edu.svg',
  },
  {
    id: 'tencent-edu',
    name: 'Tencentゲームアカデミー',
    nameEn: 'Tencent Game Academy',
    category: '教育育成',
    description: 'Tencent Games傘下のゲーム人材育成と学術交流プラットフォーム。ゲーム産業の人材発展を推進。',
    logo: '/images/partners/tencent-edu.svg',
  },
  {
    id: 'asus-liaoning',
    name: 'ASUS遼寧',
    nameEn: 'ASUS Liaoning',
    category: 'ハードウェア',
    description: 'ASUSの遼寧地域支社。ゲームイベントと開発者に高性能ハードウェアサポートを提供。',
    logo: '/images/partners/asus.svg',
  },
  {
    id: 'aura',
    name: 'Aura（オーラ）',
    nameEn: 'Aura',
    category: 'ゲーミングデバイス',
    description: '有名なeスポーツ周辺機器ブランド。インディーゲーム開発者とプレイヤーにプロフェッショナルグレードのデバイスを提供。',
    logo: '/images/partners/aura.svg',
  },
  {
    id: 'xirang-games',
    name: '戯壤科技（Xirang Games）',
    nameEn: 'Xirang Games',
    category: 'ゲーム開発',
    description: '瀋陽を拠点とするインディーゲーム開発スタジオ。時間の物語を紡ぐゲーム制作に取り組む。「ゲームは時間の物語を紡ぐ。」',
    logo: '/images/partners/xirang-games.png',
    website: 'https://www.xirang.games/',
  },
];

const koPartners: PartnerInfo[] = [
  {
    id: 'unity-china',
    name: 'Unity China',
    nameEn: 'Unity China',
    category: '엔진 기술',
    description: '세계를 선도하는 실시간 3D 콘텐츠 제작 플랫폼. 인디 게임 개발자에게 강력한 기술 지원과 생태계 리소스를 제공합니다.',
    logo: '/images/partners/unity.svg',
  },
  {
    id: 'netease-digital',
    name: 'NetEase 선양 디지털산업센터',
    nameEn: 'Netease Shenyang Digital Industry Center',
    category: '산업 인큐베이션',
    description: 'NetEase가 동북 지역에 설립한 디지털 산업 혁신 거점. 게임, 디지털 콘텐츠 및 기술 산업 인큐베이션에 주력.',
    logo: '/images/partners/netease-digital.svg',
  },
  {
    id: 'netease-edu',
    name: 'NetEase 게임 아카데미',
    nameEn: 'Netease Game Academy',
    category: '교육 육성',
    description: 'NetEase Games 산하 게임 인재 육성 플랫폼. 게임 디자인, 개발, 아트 등 전문 과정과 교육을 제공합니다.',
    logo: '/images/partners/netease-edu.svg',
  },
  {
    id: 'tencent-edu',
    name: 'Tencent 게임 아카데미',
    nameEn: 'Tencent Game Academy',
    category: '교육 육성',
    description: 'Tencent Games 산하 게임 인재 육성 및 학술 교류 플랫폼. 게임 산업 인재 발전에 전념.',
    logo: '/images/partners/tencent-edu.svg',
  },
  {
    id: 'asus-liaoning',
    name: 'ASUS 랴오닝',
    nameEn: 'ASUS Liaoning',
    category: '하드웨어',
    description: 'ASUS의 랴오닝 지역 지사. 게임 이벤트와 개발자에게 고성능 하드웨어 지원을 제공합니다.',
    logo: '/images/partners/asus.svg',
  },
  {
    id: 'aura',
    name: 'Aura',
    nameEn: 'Aura',
    category: '게이밍 기기',
    description: '유명 e스포츠 주변기기 브랜드. 인디 게임 개발자와 플레이어에게 전문가급 기기를 제공합니다.',
    logo: '/images/partners/aura.svg',
  },
  {
    id: 'xirang-games',
    name: 'Xirang Games',
    nameEn: 'Xirang Games',
    category: '게임 개발',
    description: '선양에 기반을 둔 인디 게임 개발 스튜디오. 시간의 이야기를 담은 게임을 만드는 데 전념합니다. "게임은 시간의 이야기를 담습니다."',
    logo: '/images/partners/xirang-games.png',
    website: 'https://www.xirang.games/',
  },
];

const ruPartners: PartnerInfo[] = [
  {
    id: 'unity-china',
    name: 'Unity China',
    nameEn: 'Unity China',
    category: 'Игровой движок',
    description: 'Ведущая в мире платформа для создания 3D-контента в реальном времени, предоставляющая мощную техническую поддержку и ресурсы экосистемы для разработчиков инди-игр.',
    logo: '/images/partners/unity.svg',
  },
  {
    id: 'netease-digital',
    name: 'Цифровой индустриальный центр NetEase в Шэньяне',
    nameEn: 'Netease Shenyang Digital Industry Center',
    category: 'Инкубация индустрии',
    description: 'Инновационная база цифровой индустрии NetEase в Северо-Восточном Китае, специализирующаяся на инкубации игр, цифрового контента и технологических отраслей.',
    logo: '/images/partners/netease-digital.svg',
  },
  {
    id: 'netease-edu',
    name: 'Игровая академия NetEase',
    nameEn: 'Netease Game Academy',
    category: 'Образование',
    description: 'Платформа подготовки кадров NetEase Games, предлагающая профессиональные курсы по геймдизайну, разработке и искусству.',
    logo: '/images/partners/netease-edu.svg',
  },
  {
    id: 'tencent-edu',
    name: 'Игровая академия Tencent',
    nameEn: 'Tencent Game Academy',
    category: 'Образование',
    description: 'Платформа подготовки кадров и академического обмена Tencent Games, посвящённая развитию талантов в игровой индустрии.',
    logo: '/images/partners/tencent-edu.svg',
  },
  {
    id: 'asus-liaoning',
    name: 'ASUS Ляонин',
    nameEn: 'ASUS Liaoning',
    category: 'Оборудование',
    description: 'Региональное отделение ASUS в Ляонине, обеспечивающее высокопроизводительную аппаратную поддержку для игровых мероприятий и разработчиков.',
    logo: '/images/partners/asus.svg',
  },
  {
    id: 'aura',
    name: 'Aura',
    nameEn: 'Aura',
    category: 'Игровая периферия',
    description: 'Известный бренд киберспортивной периферии, предоставляющий профессиональное оборудование для разработчиков инди-игр и игроков.',
    logo: '/images/partners/aura.svg',
  },
  {
    id: 'xirang-games',
    name: 'Xirang Games',
    nameEn: 'Xirang Games',
    category: 'Разработка игр',
    description: 'Студия инди-игр из Шэньяна, создающая игры, хранящие историю времени. «Игры хранят историю времени.»',
    logo: '/images/partners/xirang-games.png',
    website: 'https://www.xirang.games/',
  },
];

const mnPartners: PartnerInfo[] = [
  {
    id: 'unity-china',
    name: 'Unity Хятад',
    nameEn: 'Unity China',
    category: 'Хөдөлгүүрийн технологи',
    description: 'Дэлхийд тэргүүлэгч бодит цагийн 3D контент бүтээх платформ. Инди тоглоом хөгжүүлэгчдэд хүчирхэг техникийн дэмжлэг ба экосистемийн нөөц үзүүлдэг.',
    logo: '/images/partners/unity.svg',
  },
  {
    id: 'netease-digital',
    name: 'NetEase Шэньян Дижитал Аж Үйлдвэрийн Төв',
    nameEn: 'Netease Shenyang Digital Industry Center',
    category: 'Аж үйлдвэрийн инкубаци',
    description: 'NetEase-ийн Зүүн хойд Хятадад байгуулсан дижитал аж үйлдвэрийн инновацийн бааз. Тоглоом, дижитал контент, технологийн аж үйлдвэрийн инкубацид төвлөрдөг.',
    logo: '/images/partners/netease-digital.svg',
  },
  {
    id: 'netease-edu',
    name: 'NetEase Тоглоомын Академи',
    nameEn: 'Netease Game Academy',
    category: 'Боловсрол ба сургалт',
    description: 'NetEase Games-ийн тоглоомын авьяас бэлтгэх платформ. Тоглоомын дизайн, хөгжүүлэлт, урлагийн мэргэжлийн сургалт явуулдаг.',
    logo: '/images/partners/netease-edu.svg',
  },
  {
    id: 'tencent-edu',
    name: 'Tencent Тоглоомын Академи',
    nameEn: 'Tencent Game Academy',
    category: 'Боловсрол ба сургалт',
    description: 'Tencent Games-ийн тоглоомын авьяас бэлтгэх ба эрдэм шинжилгээний солилцооны платформ. Тоглоомын салбарын авьяас хөгжилд зориулагдсан.',
    logo: '/images/partners/tencent-edu.svg',
  },
  {
    id: 'asus-liaoning',
    name: 'ASUS Ляонин',
    nameEn: 'ASUS Liaoning',
    category: 'Тоног төхөөрөмж',
    description: 'ASUS-ийн Ляонин дахь бүс нутгийн салбар. Тоглоомын арга хэмжээ болон хөгжүүлэгчдэд өндөр хүчин чадлын тоног төхөөрөмжийн дэмжлэг үзүүлдэг.',
    logo: '/images/partners/asus.svg',
  },
  {
    id: 'aura',
    name: 'Aura',
    nameEn: 'Aura',
    category: 'Тоглоомын дагалдах хэрэгсэл',
    description: 'Алдарт цахим спортын дагалдах хэрэгслийн брэнд. Инди тоглоом хөгжүүлэгчид болон тоглогчдод мэргэжлийн түвшний төхөөрөмж нийлүүлдэг.',
    logo: '/images/partners/aura.svg',
  },
  {
    id: 'xirang-games',
    name: 'Xirang Games',
    nameEn: 'Xirang Games',
    category: 'Тоглоом хөгжүүлэлт',
    description: 'Шэньян хотод төвтэй инди тоглоом хөгжүүлэгч студи. Цаг хугацааны түүхийг агуулсан тоглоом бүтээхэд зориулагдсан. "Тоглоом цаг хугацааны түүхийг агуулдаг."',
    logo: '/images/partners/xirang-games.png',
    website: 'https://www.xirang.games/',
  },
];

const partnersMap: Record<Locale, PartnerInfo[]> = {
  zh: zhPartners,
  en: enPartners,
  ja: jaPartners,
  ko: koPartners,
  ru: ruPartners,
  mn: mnPartners,
};

function getPartnerData(locale: Locale): PartnerInfo[] {
  return partnersMap[locale] || zhPartners;
}

export function getPartners(locale?: Locale): PartnerInfo[] {
  return getPartnerData(locale || 'zh');
}
