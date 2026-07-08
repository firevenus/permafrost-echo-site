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
    description: '冻土回声（Permafrost Echo）品牌在沈阳正式成立，定位为东北亚独立游戏生态平台。',
  },
  {
    year: '2025.03',
    title: '首届 SSCA 动漫游戏博览会 · 游戏区',
    description: '首次承办 SSCA 沈阳动漫游戏博览会的独立游戏专区，吸引 200+ 参与者。',
  },
  {
    year: '2025.08',
    title: '高校联盟启动',
    description: '联合东北地区12所高校成立独立游戏高校联盟，建立校园开发者网络。',
  },
  {
    year: '2026.02',
    title: 'GGJ 2026 沈阳站',
    description: '首次承办 Global Game Jam 沈阳站点，48小时创作马拉松圆满成功。',
  },
  {
    year: '2026.03',
    title: 'SSCA 2026 动漫游戏博览会 · 游戏区',
    description: 'SSCA 2026 规模升级，冻土回声游戏专区参展作品增至 12 款，参与者突破 500 人。',
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
    year: '2025.03',
    title: '1st SSCA Expo · Game Zone',
    description: 'Hosted the indie game zone at the first SSCA Shenyang Animation, Comic & Game Expo, attracting 200+ participants.',
  },
  {
    year: '2025.08',
    title: 'University Alliance Launch',
    description: 'Established an indie game university alliance with 12 universities across Northeast China, building a campus developer network.',
  },
  {
    year: '2026.02',
    title: 'GGJ 2026 Shenyang Site',
    description: 'First time hosting the Global Game Jam Shenyang site. The 48-hour creation marathon was a resounding success.',
  },
  {
    year: '2026.03',
    title: 'SSCA 2026 Expo · Game Zone',
    description: 'SSCA 2026 scaled up with 12 exhibited titles and over 500 participants at the game zone.',
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
    year: '2025.03',
    title: '第1回 SSCA 博覧会 · ゲームゾーン',
    description: '第1回SSCA瀋陽アニメ・コミック・ゲーム博覧会でインディーゲームゾーンを運営。200名以上が参加。',
  },
  {
    year: '2025.08',
    title: '大学連盟始動',
    description: '東北地域の12大学と連携し、インディーゲーム大学連盟を設立。キャンパス開発者ネットワークを構築。',
  },
  {
    year: '2026.02',
    title: 'GGJ 2026 瀋陽会場',
    description: 'Global Game Jam瀋陽会場を初開催。48時間の創作マラソンが大成功。',
  },
  {
    year: '2026.03',
    title: 'SSCA 2026 博覧会 · ゲームゾーン',
    description: 'SSCA 2026が規模拡大。出展作品が12作品に増え、参加者が500名を突破。',
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
    year: '2025.03',
    title: '제1회 SSCA 엑스포 · 게임 존',
    description: '제1회 SSCA 선양 애니메이션·코믹·게임 엑스포에서 인디 게임 존을 운영. 200명 이상 참여.',
  },
  {
    year: '2025.08',
    title: '대학 연합 출범',
    description: '동북 지역 12개 대학과 연합하여 인디 게임 대학 연합을 설립. 캠퍼스 개발자 네트워크 구축.',
  },
  {
    year: '2026.02',
    title: 'GGJ 2026 선양 사이트',
    description: 'Global Game Jam 선양 사이트 첫 개최. 48시간 창작 마라톤 대성공.',
  },
  {
    year: '2026.03',
    title: 'SSCA 2026 엑스포 · 게임 존',
    description: 'SSCA 2026 규모 확대. 출품작 12개로 증가, 참여자 500명 돌파.',
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
    year: '2025.03',
    title: 'Первая выставка SSCA · Игровая зона',
    description: 'Организована зона инди-игр на первой Шэньянской выставке аниме, комиксов и игр SSCA, привлекшая более 200 участников.',
  },
  {
    year: '2025.08',
    title: 'Запуск университетского альянса',
    description: 'Создан альянс инди-игр с 12 университетами Северо-Восточного Китая, построена сеть кампусных разработчиков.',
  },
  {
    year: '2026.02',
    title: 'GGJ 2026 Шэньян',
    description: 'Впервые проведён Global Game Jam в Шэньяне. 48-часовой марафон творчества прошёл с большим успехом.',
  },
  {
    year: '2026.03',
    title: 'SSCA 2026 Выставка · Игровая зона',
    description: 'SSCA 2026 масштабирована: 12 представленных проектов и более 500 участников игровой зоны.',
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
    year: '2025.03',
    title: 'Анхны SSCA Үзэсгэлэн · Тоглоомын Бүс',
    description: 'Анхны SSCA Анимэ, Комик, Тоглоомын Үзэсгэлэн дээр инди тоглоомын бүс зохион байгуулж, 200+ оролцогч татав.',
  },
  {
    year: '2025.08',
    title: 'Их сургуулийн холбоо эхэлсэн',
    description: 'Зүүн хойд Хятадын 12 их сургуультай хамтран инди тоглоомын их сургуулийн холбоог байгуулж, кампусын хөгжүүлэгчдийн сүлжээг бий болгов.',
  },
  {
    year: '2026.02',
    title: 'GGJ 2026 Шэньян',
    description: 'Global Game Jam Шэньян хотын цэгийг анх удаа зохион байгуулав. 48 цагийн бүтээлийн марафон амжилттай болж өндөрлөв.',
  },
  {
    year: '2026.03',
    title: 'SSCA 2026 Үзэсгэлэн · Тоглоомын Бүс',
    description: 'SSCA 2026 цар хүрээгээ тэлж, үзүүлсэн бүтээл 12 болж, оролцогчид 500-г давлаа.',
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
