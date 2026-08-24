import type { Locale } from '@/i18n/routing';

export interface ActivityInfo {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  location: string;
  description: string;
  status: 'upcoming' | 'completed';
  highlight?: boolean;
  /** 活动照片路径，相对于 public/ 目录，如 /images/activities/ssca-2026-01.jpg */
  images?: string[];
}

const zhActivities: ActivityInfo[] = [
  {
    id: 'ssca-2025',
    title: 'SSCA 动漫游戏博览会 · 游戏展区',
    titleEn: 'SSCA Animation, Comic & Game Expo · Game Zone',
    date: '2025-10',
    location: '沈阳',
    description: '「冻土回声」首次承办沈阳第十七届 SSCA 动漫游戏博览会游戏展区，为东北地区的独立游戏开发者提供展示与交流的平台。',
    status: 'completed',
  },
  {
    id: 'ggj-2026',
    title: 'Global Game Jam 2026 沈阳站',
    titleEn: 'Global Game Jam 2026 Shenyang Site',
    date: '2026-02',
    location: '沈阳（线上+线下）',
    description: '全球最大的游戏创作马拉松活动落地沈阳，48小时内从零开始创作游戏原型，汇聚东北亚地区最具创意的游戏开发者。',
    status: 'completed',
  },
  {
    id: 'northern-anime-carnival-2026-05',
    title: '北境动漫游戏嘉年华',
    titleEn: 'Northern Anime & Game Carnival',
    date: '2026-05',
    location: '沈阳',
    description: '「冻土回声」携12款东北亚独立游戏作品亮相北境动漫游戏嘉年华，展示区域游戏创作力量，拓展全国合作网络。',
    status: 'completed',
  },
  {
    id: 'ciga-gamejam-2026-shenyang',
    title: '2026 CiGA Game Jam 沈阳站',
    titleEn: '2026 CiGA Game Jam · Shenyang Site',
    date: '2026-07',
    location: '沈阳',
    description: '中国独立游戏联盟（CiGA）年度Game Jam落地沈阳，48小时限时创作，汇聚东北地区最具创意的游戏开发力量。',
    status: 'completed',
    images: [
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-01.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-02.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-03.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-04.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-05.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-06.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-07.webp',
    ],
  },
  {
    id: 'ssca-2026-10',
    title: 'SSCA 动漫游戏博览会 · 游戏展区',
    titleEn: 'SSCA Animation, Comic & Game Expo · Game Zone',
    date: '2026-10',
    location: '沈阳',
    description: '「冻土回声」与 SSCA 合作承办沈阳动漫游戏博览会游戏展区，为东北亚独立游戏开发者提供展示与交流平台。',
    status: 'upcoming',
    highlight: true,
  },
  {
    id: 'ggj-2027',
    title: 'Global Game Jam 2027 沈阳站',
    titleEn: 'Global Game Jam 2027 Shenyang Site',
    date: '2027-02',
    location: '沈阳',
    description: '全球最大的游戏创作马拉松活动即将举办，48小时内从零开始创作游戏原型，汇聚东北亚最具创意的游戏开发者。',
    status: 'upcoming',
  },
];

const enActivities: ActivityInfo[] = [
  {
    id: 'ssca-2025',
    title: 'SSCA Animation, Comic & Game Expo · Game Zone',
    titleEn: 'SSCA Animation, Comic & Game Expo · Game Zone',
    date: '2025-10',
    location: 'Shenyang',
    description: 'Permafrost Echo hosted the game zone at the 17th Shenyang SSCA Animation, Comic & Game Expo for the first time, providing a showcase and networking platform for indie developers from Northeast China.',
    status: 'completed',
  },
  {
    id: 'ggj-2026',
    title: 'Global Game Jam 2026 · Shenyang Site',
    titleEn: 'Global Game Jam 2026 · Shenyang Site',
    date: '2026-02',
    location: 'Shenyang (Online + Offline)',
    description: "The world's largest game creation jam lands in Shenyang. Create game prototypes from scratch in 48 hours, bringing together Northeast Asia's most creative developers.",
    status: 'completed',
  },
  {
    id: 'beijing-expo-2026',
    title: 'Beijing Indie Game Expo 2026',
    titleEn: 'Beijing Indie Game Expo 2026',
    date: '2026-05',
    location: 'Beijing',
    description: 'Permafrost Echo brings 12 Northeast Asia indie game titles to the Beijing Indie Game Expo, showcasing regional creative power and expanding national cooperation networks.',
    status: 'completed',
  },
  {
    id: 'ciga-gamejam-2026-shenyang',
    title: '2026 CiGA Game Jam · Shenyang Site',
    titleEn: '2026 CiGA Game Jam · Shenyang Site',
    date: '2026-07',
    location: 'Shenyang',
    description: 'The annual CiGA (China Indie Game Alliance) Game Jam lands in Shenyang. A 48-hour creation sprint bringing together the most creative game developers from Northeast China.',
    status: 'completed',
    images: [
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-01.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-02.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-03.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-04.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-05.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-06.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-07.webp',
    ],
  },
  {
    id: 'ssca-2026-10',
    title: 'SSCA Animation, Comic & Game Expo · Game Zone',
    titleEn: 'SSCA Animation, Comic & Game Expo · Game Zone',
    date: '2026-10',
    location: 'Shenyang',
    description: 'Permafrost Echo partners with SSCA to host the game zone at the Shenyang Animation, Comic & Game Expo, providing a showcase and networking platform for indie game developers in Northeast Asia.',
    status: 'upcoming',
    highlight: true,
  },
  {
    id: 'ggj-2027',
    title: 'Global Game Jam 2027 · Shenyang Site',
    titleEn: 'Global Game Jam 2027 · Shenyang Site',
    date: '2027-02',
    location: 'Shenyang',
    description: "The world's largest game creation jam returns to Shenyang. Create game prototypes from scratch in 48 hours with Northeast Asia's most creative developers.",
    status: 'upcoming',
  },
];

const jaActivities: ActivityInfo[] = [
  {
    id: 'ssca-2025',
    title: 'SSCA アニメ・コミック・ゲーム博覧会 · ゲームゾーン',
    titleEn: 'SSCA Animation, Comic & Game Expo · Game Zone',
    date: '2025-10',
    location: '瀋陽',
    description: 'パーマフロスト・エコーが第17回SSCA瀋陽アニメ・コミック・ゲーム博覧会でゲームゾーンを初運営。東北地方のインディーゲーム開発者に展示・交流の場を提供。',
    status: 'completed',
  },
  {
    id: 'ggj-2026',
    title: 'Global Game Jam 2026 · 瀋陽会場',
    titleEn: 'Global Game Jam 2026 · Shenyang Site',
    date: '2026-02',
    location: '瀋陽（オンライン＋オフライン）',
    description: '世界最大のゲームクリエイションマラソンが瀋陽に上陸。48時間でゼロからゲームプロトタイプを制作し、東北アジアの最も創造的な開発者が集結。',
    status: 'completed',
  },
  {
    id: 'northern-anime-carnival-2026-05',
    title: '北境アニメ・ゲームカーニバル',
    titleEn: 'Northern Anime & Game Carnival',
    date: '2026-05',
    location: '瀋陽',
    description: 'パーマフロスト・エコーが東北アジアのインディーゲーム12作品を携えて北境アニメ・ゲームカーニバルに出展。地域の創作力を示し、全国的な協力ネットワークを拡大。',
    status: 'completed',
  },
  {
    id: 'ciga-gamejam-2026-shenyang',
    title: '2026 CiGA Game Jam · 瀋陽会場',
    titleEn: '2026 CiGA Game Jam · Shenyang Site',
    date: '2026-07',
    location: '瀋陽',
    description: 'CiGA（中国インディーゲーム連盟）の年次Game Jamが瀋陽に上陸。48時間の創作スプリントで、東北地域の最もクリエイティブなゲーム開発者が集結。',
    status: 'completed',
    images: [
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-01.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-02.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-03.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-04.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-05.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-06.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-07.webp',
    ],
  },
  {
    id: 'ssca-2026-10',
    title: 'SSCA アニメ・コミック・ゲーム博覧会 · ゲームゾーン',
    titleEn: 'SSCA Animation, Comic & Game Expo · Game Zone',
    date: '2026-10',
    location: '瀋陽',
    description: 'パーマフロスト・エコーがSSCAと協力し、瀋陽アニメ・コミック・ゲーム博覧会のゲームゾーンを共同運営。東北アジアのインディーゲーム開発者に展示・交流の場を提供。',
    status: 'upcoming',
    highlight: true,
  },
  {
    id: 'ggj-2027',
    title: 'Global Game Jam 2027 · 瀋陽会場',
    titleEn: 'Global Game Jam 2027 · Shenyang Site',
    date: '2027-02',
    location: '瀋陽',
    description: '世界最大のゲームクリエイションマラソンが再び瀋陽に。48時間でゼロからゲームプロトタイプを制作し、東北アジアの最も創造的な開発者と共に。',
    status: 'upcoming',
  },
];

const koActivities: ActivityInfo[] = [
  {
    id: 'ssca-2025',
    title: 'SSCA 애니메이션·코믹·게임 엑스포 · 게임 존',
    titleEn: 'SSCA Animation, Comic & Game Expo · Game Zone',
    date: '2025-10',
    location: '선양',
    description: '페름프로스트 에코가 제17회 SSCA 선양 애니메이션·코믹·게임 엑스포에서 게임 존을 처음 운영. 동북 지역 인디 게임 개발자에게 전시·교류의 장을 제공.',
    status: 'completed',
  },
  {
    id: 'ggj-2026',
    title: 'Global Game Jam 2026 · 선양 사이트',
    titleEn: 'Global Game Jam 2026 · Shenyang Site',
    date: '2026-02',
    location: '선양 (온라인 + 오프라인)',
    description: '세계 최대 게임 창작 마라톤이 선양에 상륙. 48시간 동안 제로부터 게임 프로토타입을 제작하며 동북아시아의 가장 창의적인 개발자들이 집결.',
    status: 'completed',
  },
  {
    id: 'beijing-expo-2026',
    title: '베이징 인디 게임 엑스포 2026',
    titleEn: 'Beijing Indie Game Expo 2026',
    date: '2026-05',
    location: '베이징',
    description: '페름프로스트 에코가 동북아시아 인디 게임 12작품을 가지고 베이징 인디 게임 엑스포에 출품. 지역 창작 역량을 보여주고 전국적인 협력 네트워크를 확장.',
    status: 'completed',
  },
  {
    id: 'ciga-gamejam-2026-shenyang',
    title: '2026 CiGA Game Jam · 선양 사이트',
    titleEn: '2026 CiGA Game Jam · Shenyang Site',
    date: '2026-07',
    location: '선양',
    description: '중국 인디 게임 연합(CiGA)의 연례 Game Jam이 선양에 상륙. 48시간 창작 스프린트로 동북 지역의 가장 창의적인 게임 개발자들이 집결.',
    status: 'completed',
    images: [
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-01.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-02.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-03.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-04.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-05.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-06.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-07.webp',
    ],
  },
  {
    id: 'ssca-2026-10',
    title: 'SSCA 애니메이션·코믹·게임 엑스포 · 게임 존',
    titleEn: 'SSCA Animation, Comic & Game Expo · Game Zone',
    date: '2026-10',
    location: '선양',
    description: '페름프로스트 에코가 SSCA와 협력하여 선양 애니메이션·코믹·게임 엑스포의 게임 존을 공동 운영. 동북아시아 인디 게임 개발자에게 전시·교류의 장을 제공.',
    status: 'upcoming',
    highlight: true,
  },
  {
    id: 'ggj-2027',
    title: 'Global Game Jam 2027 · 선양 사이트',
    titleEn: 'Global Game Jam 2027 · Shenyang Site',
    date: '2027-02',
    location: '선양',
    description: '세계 최대 게임 창작 마라톤이 다시 선양으로. 48시간 동안 제로부터 게임 프로토타입을 제작하며 동북아시아의 가장 창의적인 개발자들과 함께.',
    status: 'upcoming',
  },
];

const ruActivities: ActivityInfo[] = [
  {
    id: 'ssca-2025',
    title: '17-я выставка SSCA · Игровая зона',
    titleEn: 'SSCA Animation, Comic & Game Expo · Game Zone',
    date: '2025-10',
    location: 'Шэньян',
    description: 'Permafrost Echo впервые организовал игровую зону на 17-й Шэньянской выставке аниме, комиксов и игр SSCA, предоставив платформу для демонстрации и общения инди-разработчиков Северо-Восточного Китая.',
    status: 'completed',
  },
  {
    id: 'ggj-2026',
    title: 'Global Game Jam 2026 · Шэньян',
    titleEn: 'Global Game Jam 2026 · Shenyang Site',
    date: '2026-02',
    location: 'Шэньян (онлайн + офлайн)',
    description: 'Крупнейший в мире марафон по созданию игр проходит в Шэньяне. Создайте прототип игры с нуля за 48 часов вместе с самыми креативными разработчиками Северо-Восточной Азии.',
    status: 'completed',
  },
  {
    id: 'beijing-expo-2026',
    title: 'Пекинская выставка инди-игр 2026',
    titleEn: 'Beijing Indie Game Expo 2026',
    date: '2026-05',
    location: 'Пекин',
    description: 'Permafrost Echo представляет 12 инди-игр Северо-Восточной Азии на Пекинской выставке инди-игр, демонстрируя творческую мощь региона и расширяя национальную сеть сотрудничества.',
    status: 'completed',
  },
  {
    id: 'ciga-gamejam-2026-shenyang',
    title: '2026 CiGA Game Jam · Шэньян',
    titleEn: '2026 CiGA Game Jam · Shenyang Site',
    date: '2026-07',
    location: 'Шэньян',
    description: 'Ежегодный CiGA Game Jam проходит в Шэньяне. 48-часовой спринт творчества, объединяющий самых креативных разработчиков игр Северо-Восточного Китая.',
    status: 'completed',
    images: [
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-01.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-02.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-03.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-04.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-05.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-06.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-07.webp',
    ],
  },
  {
    id: 'ssca-2026-10',
    title: 'SSCA Выставка аниме, комиксов и игр · Игровая зона',
    titleEn: 'SSCA Animation, Comic & Game Expo · Game Zone',
    date: '2026-10',
    location: 'Шэньян',
    description: 'Permafrost Echo совместно с SSCA организует игровую зону на Шэньянской выставке аниме, комиксов и игр, предоставляя платформу для демонстрации и нетворкинга разработчиков инди-игр Северо-Восточной Азии.',
    status: 'upcoming',
    highlight: true,
  },
  {
    id: 'ggj-2027',
    title: 'Global Game Jam 2027 · Шэньян',
    titleEn: 'Global Game Jam 2027 · Shenyang Site',
    date: '2027-02',
    location: 'Шэньян',
    description: 'Крупнейший в мире марафон по созданию игр возвращается в Шэньян. Создайте прототип игры с нуля за 48 часов с самыми креативными разработчиками Северо-Восточной Азии.',
    status: 'upcoming',
  },
];

const mnActivities: ActivityInfo[] = [
  {
    id: 'ssca-2025',
    title: '17 дахь SSCA Үзэсгэлэн · Тоглоомын Бүс',
    titleEn: 'SSCA Animation, Comic & Game Expo · Game Zone',
    date: '2025-10',
    location: 'Шэньян',
    description: 'Мөсөн Хөрсний Цуурай нь 17 дахь SSCA Шэньян Анимэ, Комик, Тоглоомын Үзэсгэлэн дээр тоглоомын бүс анх удаа зохион байгуулж, Зүүн хойд Хятадын инди тоглоом хөгжүүлэгчдэд үзүүлэн, харилцааны тавцан бий болгов.',
    status: 'completed',
  },
  {
    id: 'ggj-2026',
    title: 'Global Game Jam 2026 · Шэньян',
    titleEn: 'Global Game Jam 2026 · Shenyang Site',
    date: '2026-02',
    location: 'Шэньян (онлайн + офлайн)',
    description: 'Дэлхийн хамгийн том тоглоом бүтээх марафон Шэньян хотод зохион байгуулагдлаа. 48 цагийн дотор тоглоомын прототипийг эхнээс нь бүтээж, Зүүн хойд Азийн хамгийн бүтээлч хөгжүүлэгчид цугларав.',
    status: 'completed',
  },
  {
    id: 'beijing-expo-2026',
    title: 'Бээжин Инди Тоглоомын Экспо 2026',
    titleEn: 'Beijing Indie Game Expo 2026',
    date: '2026-05',
    location: 'Бээжин',
    description: 'Мөсөн Хөрсний Цуурай Зүүн хойд Азийн 12 инди тоглоомыг Бээжин Инди Тоглоомын Экспод авчирч, бүс нутгийн бүтээлч хүчийг харуулж, үндэсний хамтын ажиллагааны сүлжээг өргөжүүлэв.',
    status: 'completed',
  },
  {
    id: 'ciga-gamejam-2026-shenyang',
    title: '2026 CiGA Game Jam · Шэньян',
    titleEn: '2026 CiGA Game Jam · Shenyang Site',
    date: '2026-07',
    location: 'Шэньян',
    description: 'Хятадын Инди Тоглоомын Холбооны (CiGA) жилийн Game Jam Шэньян хотод зохион байгуулагдлаа. 48 цагийн бүтээлийн спринт Зүүн хойд Хятадын хамгийн бүтээлч тоглоом хөгжүүлэгчдийг цуглуулав.',
    status: 'completed',
    images: [
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-01.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-02.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-03.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-04.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-05.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-06.webp',
      '/images/activities/ciga-gamejam-2026-shenyang/ciga-gamejam-2026-shenyang-07.webp',
    ],
  },
  {
    id: 'ssca-2026-10',
    title: 'SSCA Анимэ, Комик, Тоглоомын Үзэсгэлэн · Тоглоомын Бүс',
    titleEn: 'SSCA Animation, Comic & Game Expo · Game Zone',
    date: '2026-10',
    location: 'Шэньян',
    description: 'Мөсөн Хөрсний Цуурай нь SSCA-тай хамтран Шэньян Анимэ, Комик, Тоглоомын Үзэсгэлэн дээр тоглоомын бүс зохион байгуулж, Зүүн хойд Азийн инди тоглоом хөгжүүлэгчдэд үзүүлэн, харилцааны тавцан бий болгоно.',
    status: 'upcoming',
    highlight: true,
  },
  {
    id: 'ggj-2027',
    title: 'Global Game Jam 2027 · Шэньян',
    titleEn: 'Global Game Jam 2027 · Shenyang Site',
    date: '2027-02',
    location: 'Шэньян',
    description: 'Дэлхийн хамгийн том тоглоом бүтээх марафон Шэньян хотод эргэн ирлээ. 48 цагийн дотор тоглоомын прототипийг эхнээс нь бүтээж, Зүүн хойд Азийн хамгийн бүтээлч хөгжүүлэгчидтэй хамт.',
    status: 'upcoming',
  },
];

const activitiesMap: Record<Locale, ActivityInfo[]> = {
  zh: zhActivities,
  en: enActivities,
  ja: jaActivities,
  ko: koActivities,
  ru: ruActivities,
  mn: mnActivities,
};

function getActivityData(locale: Locale): ActivityInfo[] {
  return activitiesMap[locale] || zhActivities;
}

export function getActivities(locale?: Locale): ActivityInfo[] {
  const data = getActivityData(locale || 'zh');
  const completed = data
    .filter((a) => a.status === 'completed')
    .sort((a, b) => b.date.localeCompare(a.date));
  const upcoming = data.filter((a) => a.status === 'upcoming');
  return [...completed, ...upcoming];
}

export function getUpcomingActivities(locale?: Locale): ActivityInfo[] {
  return getActivityData(locale || 'zh').filter((a) => a.status === 'upcoming');
}

export function getCompletedActivities(locale?: Locale): ActivityInfo[] {
  return getActivityData(locale || 'zh').filter((a) => a.status === 'completed');
}
