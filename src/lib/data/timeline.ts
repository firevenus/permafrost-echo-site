import type { Locale } from '@/i18n/routing';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const zhTimeline: TimelineEvent[] = [
  {
    year: '2024',
    title: '品牌创立',
    description: '「冻土回声」（Permafrost Echo）品牌在沈阳正式成立，定位为东北亚独立游戏生态平台。',
  },
  {
    year: '2025.08',
    title: '高校联盟启动',
    description: '联合东北地区20余所高校发起东北高校游戏开发社团联盟，16个游戏开发社团加入，构建校园开发者网络。',
  },
  {
    year: '2025.10',
    title: '第十七届 SSCA 动漫游戏博览会 · 游戏展区',
    description: '首次承办沈阳第十七届 SSCA 动漫游戏博览会游戏展区，为东北地区的独立游戏开发者提供展示与交流的平台。',
  },
  {
    year: '2026.02',
    title: 'GGJ 2026 沈阳站',
    description: '首次承办 Global Game Jam 沈阳站点，48小时创作马拉松圆满成功。',
  },
  {
    year: '2026.05',
    title: '北境动漫游戏嘉年华',
    description: '携12款作品亮相北境动漫游戏嘉年华，拓展全国影响力。',
  },
];

const enTimeline: TimelineEvent[] = [
  {
    year: '2024',
    title: 'Brand Founding',
    description: 'Permafrost Echo brand officially established in Shenyang, positioned as a Northeast Asia indie game ecosystem platform.',
  },
  {
    year: '2025.08',
    title: 'University Alliance Launch',
    description: 'Launched the Northeast University Game Dev Club Alliance with 20+ universities and 16 game development clubs across Northeast China, building a campus developer network.',
  },
  {
    year: '2025.10',
    title: '17th SSCA Expo · Game Zone',
    description: 'Hosted the game zone at the 17th Shenyang SSCA Animation, Comic & Game Expo, providing a showcase and networking platform for indie game developers from Northeast China.',
  },
  {
    year: '2026.02',
    title: 'GGJ 2026 Shenyang Site',
    description: 'First time hosting the Global Game Jam Shenyang site. The 48-hour creation marathon was a resounding success.',
  },
  {
    year: '2026.05',
    title: 'Beijing Expo Debut',
    description: 'Debuted at the Beijing Indie Game Expo with 12 titles, expanding national influence.',
  },
];

const jaTimeline: TimelineEvent[] = [
  {
    year: '2024',
    title: 'ブランド創立',
    description: 'パーマフロスト・エコー（Permafrost Echo）ブランドが瀋陽で正式に設立。東北アジアのインディーゲームエコシステムプラットフォームとして位置づけられる。',
  },
  {
    year: '2025.08',
    title: '大学連盟始動',
    description: '東北地域の20以上の大学と連携し、東北大学ゲーム開発クラブ連盟を設立。16のゲーム開発クラブが参加し、キャンパス開発者ネットワークを構築。',
  },
  {
    year: '2025.10',
    title: '第17回 SSCA 博覧会 · ゲームゾーン',
    description: '第17回SSCA瀋陽アニメ・コミック・ゲーム博覧会でゲームゾーンを初運営。東北地方のインディーゲーム開発者に展示・交流の場を提供。',
  },
  {
    year: '2026.02',
    title: 'GGJ 2026 瀋陽会場',
    description: 'Global Game Jam瀋陽会場を初開催。48時間の創作マラソンが大成功。',
  },
  {
    year: '2026.05',
    title: '北境アニメ・ゲームカーニバル',
    description: '12作品を携えて北境アニメ・ゲームカーニバルに初出展。全国的な影響力を拡大。',
  },
];

const koTimeline: TimelineEvent[] = [
  {
    year: '2024',
    title: '브랜드 창립',
    description: '페름프로스트 에코(Permafrost Echo) 브랜드가 선양에서 공식 설립. 동북아시아 인디 게임 생태계 플랫폼으로 자리매김.',
  },
  {
    year: '2025.08',
    title: '대학 연합 출범',
    description: '동북 지역 20여 개 대학과 연합하여 동북 대학 게임 개발 클럽 연합을 설립. 16개 게임 개발 클럽이 참여하여 캠퍼스 개발자 네트워크를 구축.',
  },
  {
    year: '2025.10',
    title: '제17회 SSCA 엑스포 · 게임 존',
    description: '제17회 SSCA 선양 애니메이션·코믹·게임 엑스포에서 게임 존을 처음 운영. 동북 지역 인디 게임 개발자에게 전시·교류의 장을 제공.',
  },
  {
    year: '2026.02',
    title: 'GGJ 2026 선양 사이트',
    description: 'Global Game Jam 선양 사이트 첫 개최. 48시간 창작 마라톤 대성공.',
  },
  {
    year: '2026.05',
    title: '베이징 엑스포 데뷔',
    description: '12개 작품을 가지고 베이징 인디 게임 엑스포에 첫 출품. 전국적 영향력 확대.',
  },
];

const ruTimeline: TimelineEvent[] = [
  {
    year: '2024',
    title: 'Основание бренда',
    description: 'Бренд Permafrost Echo официально основан в Шэньяне, позиционируется как платформа экосистемы инди-игр Северо-Восточной Азии.',
  },
  {
    year: '2025.08',
    title: 'Запуск университетского альянса',
    description: 'Создан Северо-Восточный альянс клубов разработки игр при университетах, объединяющий более 20 вузов и 16 клубов разработки, формирующий сеть кампусных разработчиков.',
  },
  {
    year: '2025.10',
    title: '17-я выставка SSCA · Игровая зона',
    description: 'Впервые организована игровая зона на 17-й Шэньянской выставке аниме, комиксов и игр SSCA, предоставив платформу для демонстрации и общения инди-разработчиков Северо-Восточного Китая.',
  },
  {
    year: '2026.02',
    title: 'GGJ 2026 Шэньян',
    description: 'Впервые проведён Global Game Jam в Шэньяне. 48-часовой марафон творчества прошёл с большим успехом.',
  },
  {
    year: '2026.05',
    title: 'Дебют на Пекинской выставке',
    description: 'Дебютировали на Пекинской выставке инди-игр с 12 проектами, расширяя национальное влияние.',
  },
];

const mnTimeline: TimelineEvent[] = [
  {
    year: '2024',
    title: 'Бренд үүсгэн байгуулагдсан',
    description: 'Мөсөн Хөрсний Цуурай (Permafrost Echo) бренд Шэньян хотод албан ёсоор байгуулагдаж, Зүүн хойд Азийн инди тоглоомын экосистемийн платформ болон байр сууриа тодорхойлов.',
  },
  {
    year: '2025.08',
    title: 'Их сургуулийн холбоо эхэлсэн',
    description: 'Зүүн хойд Хятадын 20 гаруй их сургуультай хамтран Зүүн хойд их сургуулийн тоглоом хөгжүүлэлтийн клуб холбоог байгуулж, 16 тоглоом хөгжүүлэлтийн клуб нэгдэж, кампусын хөгжүүлэгчдийн сүлжээг бий болгов.',
  },
  {
    year: '2025.10',
    title: '17 дахь SSCA Үзэсгэлэн · Тоглоомын Бүс',
    description: '17 дахь SSCA Шэньян Анимэ, Комик, Тоглоомын Үзэсгэлэн дээр тоглоомын бүс анх удаа зохион байгуулж, Зүүн хойд Хятадын инди тоглоом хөгжүүлэгчдэд үзүүлэн, харилцааны тавцан бий болгов.',
  },
  {
    year: '2026.02',
    title: 'GGJ 2026 Шэньян',
    description: 'Global Game Jam Шэньян хотын цэгийг анх удаа зохион байгуулав. 48 цагийн бүтээлийн марафон амжилттай болж өндөрлөв.',
  },
  {
    year: '2026.05',
    title: 'Бээжин Экспод анхны оролцоо',
    description: '12 бүтээлтэйгээр Бээжин Инди Тоглоомын Экспод анх удаа оролцож, үндэсний хэмжээний нөлөөгөө тэлэв.',
  },
];

const timelineMap: Record<Locale, TimelineEvent[]> = {
  zh: zhTimeline,
  en: enTimeline,
  ja: jaTimeline,
  ko: koTimeline,
  ru: ruTimeline,
  mn: mnTimeline,
};

function getTimelineData(locale: Locale): TimelineEvent[] {
  return timelineMap[locale] || zhTimeline;
}

export function getTimelineEvents(locale?: Locale): TimelineEvent[] {
  return getTimelineData(locale || 'zh');
}
