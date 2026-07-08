import type { Locale } from '@/i18n/routing';

export interface RoadmapPhase {
  phase: string;
  title: string;
  items: string[];
  status: 'completed' | 'in-progress' | 'planned';
}

const zhRoadmap: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: '品牌建立与社群运营',
    items: [
      '建立冻土回声品牌视觉体系',
      '搭建微信社群与QQ社群（600+人）',
      '联合东北12所高校成立联盟',
      '承办首届SSCA动漫游戏博览会游戏专区',
    ],
    status: 'completed',
  },
  {
    phase: 'Phase 2',
    title: '活动体系化与内容产出',
    items: [
      '建立Game Jam常态化机制（每年2届）',
      '启动独立游戏作品孵化计划',
      '产出深度访谈与行业分析内容',
      '拓展合作伙伴网络（9+品牌）',
    ],
    status: 'in-progress',
  },
  {
    phase: 'Phase 3',
    title: '区域影响力扩展',
    items: [
      '覆盖东北亚19+高校联盟',
      '举办首届冻土回声独立游戏展',
      '建立开发者社区平台（论坛/Wiki）',
      '启动跨区域合作项目（日韩俄）',
    ],
    status: 'planned',
  },
  {
    phase: 'Phase 4',
    title: '生态平台建设',
    items: [
      '搭建独立游戏发行平台',
      '设立独立游戏开发者基金',
      '举办国际级独立游戏节',
      '打造东北亚最大独立游戏生态网络',
    ],
    status: 'planned',
  },
];

const enRoadmap: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: 'Brand Building & Community Operations',
    items: [
      'Establish Permafrost Echo brand visual identity',
      'Build WeChat & QQ communities (600+ members)',
      'Form alliance with 12 Northeast China universities',
      'Host the first SSCA Animation, Comic & Game Expo game zone',
    ],
    status: 'completed',
  },
  {
    phase: 'Phase 2',
    title: 'Event Systematization & Content Production',
    items: [
      'Establish regular Game Jam schedule (2 per year)',
      'Launch indie game incubation program',
      'Produce in-depth interviews and industry analysis',
      'Expand partner network (9+ brands)',
    ],
    status: 'in-progress',
  },
  {
    phase: 'Phase 3',
    title: 'Regional Influence Expansion',
    items: [
      'Cover 19+ university alliances across Northeast Asia',
      'Hold the first Permafrost Echo Indie Game Expo',
      'Build developer community platform (Forum/Wiki)',
      'Launch cross-regional cooperation projects (Japan, Korea, Russia)',
    ],
    status: 'planned',
  },
  {
    phase: 'Phase 4',
    title: 'Ecosystem Platform Construction',
    items: [
      'Build indie game publishing platform',
      'Establish indie game developer fund',
      'Host international indie game festival',
      'Build the largest indie game ecosystem network in Northeast Asia',
    ],
    status: 'planned',
  },
];

const jaRoadmap: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: 'ブランド構築とコミュニティ運営',
    items: [
      'パーマフロスト・エコーのブランドビジュアル体系を確立',
      'WeChat・QQコミュニティを構築（600名以上）',
      '東北12大学と連盟を結成',
      '第1回SSCAアニメ・コミック・ゲーム博覧会ゲームゾーンを運営',
    ],
    status: 'completed',
  },
  {
    phase: 'Phase 2',
    title: 'イベント体系化とコンテンツ制作',
    items: [
      'Game Jam定期開催体制を確立（年2回）',
      'インディーゲーム作品インキュベーション計画を始動',
      '深層インタビューと業界分析コンテンツを制作',
      'パートナーネットワークを拡大（9ブランド以上）',
    ],
    status: 'in-progress',
  },
  {
    phase: 'Phase 3',
    title: '地域影響力の拡大',
    items: [
      '東北アジア19大学以上の連盟をカバー',
      '第1回パーマフロスト・エコーインディーゲーム展を開催',
      '開発者コミュニティプラットフォームを構築（フォーラム/Wiki）',
      '地域横断協力プロジェクトを始動（日韓露）',
    ],
    status: 'planned',
  },
  {
    phase: 'Phase 4',
    title: 'エコシステムプラットフォーム構築',
    items: [
      'インディーゲームパブリッシングプラットフォームを構築',
      'インディーゲーム開発者基金を設立',
      '国際級インディーゲームフェスティバルを開催',
      '東北アジア最大のインディーゲームエコシステムネットワークを構築',
    ],
    status: 'planned',
  },
];

const koRoadmap: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: '브랜드 구축 및 커뮤니티 운영',
    items: [
      '페름프로스트 에코 브랜드 비주얼 체계 확립',
      'WeChat 및 QQ 커뮤니티 구축 (600명 이상)',
      '동북 12개 대학과 연합 결성',
      '제1회 SSCA 애니메이션·코믹·게임 엑스포 게임 존 운영',
    ],
    status: 'completed',
  },
  {
    phase: 'Phase 2',
    title: '이벤트 체계화 및 콘텐츠 제작',
    items: [
      'Game Jam 정기 개최 체계 확립 (연 2회)',
      '인디 게임 작품 인큐베이션 계획 시작',
      '심층 인터뷰 및 업계 분석 콘텐츠 제작',
      '파트너 네트워크 확대 (9개 이상 브랜드)',
    ],
    status: 'in-progress',
  },
  {
    phase: 'Phase 3',
    title: '지역 영향력 확장',
    items: [
      '동북아시아 19개 이상 대학 연합 커버',
      '제1회 페름프로스트 에코 인디 게임 전시회 개최',
      '개발자 커뮤니티 플랫폼 구축 (포럼/Wiki)',
      '지역 간 협력 프로젝트 시작 (한일러)',
    ],
    status: 'planned',
  },
  {
    phase: 'Phase 4',
    title: '생태계 플랫폼 구축',
    items: [
      '인디 게임 퍼블리싱 플랫폼 구축',
      '인디 게임 개발자 기금 설립',
      '국제급 인디 게임 페스티벌 개최',
      '동북아시아 최대 인디 게임 생태계 네트워크 구축',
    ],
    status: 'planned',
  },
];

const ruRoadmap: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: 'Создание бренда и управление сообществом',
    items: [
      'Создание системы визуальной идентичности бренда Permafrost Echo',
      'Создание сообществ WeChat и QQ (600+ участников)',
      'Формирование альянса с 12 университетами Северо-Восточного Китая',
      'Организация игровой зоны на первой выставке аниме, комиксов и игр SSCA',
    ],
    status: 'completed',
  },
  {
    phase: 'Phase 2',
    title: 'Систематизация мероприятий и производство контента',
    items: [
      'Регулярное проведение Game Jam (2 раза в год)',
      'Запуск программы инкубации инди-игр',
      'Производство глубинных интервью и отраслевой аналитики',
      'Расширение партнёрской сети (9+ брендов)',
    ],
    status: 'in-progress',
  },
  {
    phase: 'Phase 3',
    title: 'Расширение регионального влияния',
    items: [
      'Охват 19+ университетских альянсов Северо-Восточной Азии',
      'Проведение первой выставки инди-игр Permafrost Echo',
      'Создание платформы сообщества разработчиков (форум/Wiki)',
      'Запуск межрегиональных проектов сотрудничества (Япония, Корея, Россия)',
    ],
    status: 'planned',
  },
  {
    phase: 'Phase 4',
    title: 'Построение экосистемной платформы',
    items: [
      'Создание платформы для издания инди-игр',
      'Учреждение фонда разработчиков инди-игр',
      'Проведение международного фестиваля инди-игр',
      'Построение крупнейшей сети экосистемы инди-игр в Северо-Восточной Азии',
    ],
    status: 'planned',
  },
];

const mnRoadmap: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: 'Бренд бий болголт ба нийгэмлэгийн үйл ажиллагаа',
    items: [
      'Мөсөн Хөрсний Цуурай брендийн харааны таних тогтолцоог бий болгох',
      'WeChat болон QQ нийгэмлэгүүдийг байгуулах (600+ гишүүн)',
      'Зүүн хойд Хятадын 12 их сургуультай холбоо байгуулах',
      'Анхны SSCA Анимэ, Комик, Тоглоомын Үзэсгэлэнгийн тоглоомын бүс зохион байгуулах',
    ],
    status: 'completed',
  },
  {
    phase: 'Phase 2',
    title: 'Арга хэмжээний системчлэл ба контент үйлдвэрлэл',
    items: [
      'Game Jam тогтмол зохион байгуулах механизмыг бий болгох (жилд 2 удаа)',
      'Инди тоглоом бүтээлийн инкубацийн төлөвлөгөөг эхлүүлэх',
      'Гүнзгий ярилцлага ба салбарын шинжилгээний контент үйлдвэрлэх',
      'Түншлэлийн сүлжээг өргөжүүлэх (9+ брэнд)',
    ],
    status: 'in-progress',
  },
  {
    phase: 'Phase 3',
    title: 'Бүс нутгийн нөлөөг тэлэх',
    items: [
      'Зүүн хойд Азийн 19+ их сургуулийн холбоог хамрах',
      'Анхны Мөсөн Хөрсний Цуурай Инди Тоглоомын Үзэсгэлэнг зохион байгуулах',
      'Хөгжүүлэгчдийн нийгэмлэгийн платформыг байгуулах (Форум/Вики)',
      'Бүс нутаг хоорондын хамтын ажиллагааны төслүүдийг эхлүүлэх (Япон, Солонгос, Орос)',
    ],
    status: 'planned',
  },
  {
    phase: 'Phase 4',
    title: 'Экосистемийн платформ байгуулалт',
    items: [
      'Инди тоглоом хэвлэлтийн платформыг байгуулах',
      'Инди тоглоом хөгжүүлэгчдийн санг бий болгох',
      'Олон улсын түвшний инди тоглоомын наадмыг зохион байгуулах',
      'Зүүн хойд Азийн хамгийн том инди тоглоомын экосистемийн сүлжээг байгуулах',
    ],
    status: 'planned',
  },
];

const roadmapMap: Record<Locale, RoadmapPhase[]> = {
  zh: zhRoadmap,
  en: enRoadmap,
  ja: jaRoadmap,
  ko: koRoadmap,
  ru: ruRoadmap,
  mn: mnRoadmap,
};

function getRoadmapData(locale: Locale): RoadmapPhase[] {
  return roadmapMap[locale] || zhRoadmap;
}

export function getRoadmapPhases(locale?: Locale): RoadmapPhase[] {
  return getRoadmapData(locale || 'zh');
}
