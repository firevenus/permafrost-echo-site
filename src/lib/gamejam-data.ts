/**
 * CIGA GameJam 2026 沈阳站 · 作品数据
 * 数据来源：2026cgj作品集.md
 */
export interface GameEntry {
  /** 序号 1-26 */
  index: number;
  /** 团队名 */
  team: string;
  /** 作品名 */
  title: string;
  /** 作品截图路径（相对于 public/） */
  image: string;
  /** 作品介绍 */
  description: string;
  /** GMHub 链接 */
  gmhubUrl?: string;
  /** B站链接 */
  bilibiliUrl?: string;
  /** 试玩链接（非 GMHub/B站的其他平台） */
  playUrl?: string;
}

export const cigaGameJamGames: GameEntry[] = [
  {
    index: 1,
    team: '千禧年职业技术学院柚子部',
    title: '锚定战线',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-01.webp',
    description: '即时策略游戏。玩家扮演锚点修复师负修复被污染的锚网点，主角作为召唤师需要组合不同元素召唤士兵战斗。',
  },
  {
    index: 2,
    team: '窝趣！出音味来！',
    title: '锚荡深渊',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-02.webp',
    description: '身穿潜水服，手持鱼叉枪，在被不明邪恶生物扰乱重力的深海洞窟中使用飞锚查出一条血路。',
    gmhubUrl: 'https://gmhub.com/game/10120',
  },
  {
    index: 3,
    team: '挖了个qu',
    title: '失序雾',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-03.webp',
    description: '《失序雾》是一款末世精神状态题材闯关游戏。故事背景设定在被精神畸变污染的末日时代。',
    gmhubUrl: 'https://www.gmhub.com/game/10099',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1hhMM6YEkC/',
  },
  {
    index: 4,
    team: '！？雷雷？！?霆霆？！',
    title: '堵你锚呢？？',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-04.webp',
    description: '宙斯在去超市的路上遭遇了一场荒唐的大堵车，雷霆震怒下拿出自己的巨锚誓要击碎一切！',
  },
  {
    index: 5,
    team: '姬霸王茶',
    title: '锚娘~Bon Voyage!',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-05.webp',
    description: '逐浪的少女，锁住洋流，追逐航标，灯塔再度点亮。',
    gmhubUrl: 'https://gmhub.com/game/10088',
  },
  {
    index: 6,
    team: '（未知团队）',
    title: '遭遇咕嘎',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-06.webp',
    description: '和小企鹅一起探索无人深海。',
  },
  {
    index: 7,
    team: '蛄蛹者',
    title: 'Fish Miner',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-07.webp',
    description: '《Fish miner》是一款增量钓鱼游戏，玩家在广阔的大海里，捕捞各种海洋生物（存疑），征服大海。',
    gmhubUrl: 'https://www.gmhub.com/game/10331',
  },
  {
    index: 8,
    team: '什锦芒果干',
    title: '浣熊大盗',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-08.webp',
    description: '主角是一只捡垃圾的浣熊，这是一个搜打撤游戏。',
  },
  {
    index: 9,
    team: '没有鸟的脚',
    title: 'Every line has its bird.',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-09.webp',
    description: '电线杆既是人类文明的锚点，也是鸟类居所变迁的锚点。生命之间总是充满了混乱又和谐的锚点，得以悠长。',
    gmhubUrl: 'https://gmhub.com/game/9914',
    bilibiliUrl: 'https://b23.tv/dCbSPiG',
  },
  {
    index: 10,
    team: '打捞老爹',
    title: '锚沉深海',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-10.webp',
    description: '《锚沉深海》是一款2D深海探索游戏，玩家循锚链潜入旧日海难，在深海中解开父亲未归的真相。',
    gmhubUrl: 'https://www.gmhub.com/game/10176',
    bilibiliUrl: 'https://b23.tv/1YKBgoP',
  },
  {
    index: 11,
    team: '404 Studio',
    title: 'ANCHOR-0',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-11.webp',
    description: '照着左边的参考图，把名为"锚点"的粒子拖到右边画布上拼出角色轮廓，系统测偏移，歪太多会被角色吐槽。',
    gmhubUrl: 'https://www.gmhub.com/game/10252',
    bilibiliUrl: 'https://b23.tv/mV1DFqh',
  },
  {
    index: 12,
    team: 'W&B',
    title: '《忆物》X ，1！5！✓',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-12.webp',
    description: '当不起眼的小物件，饱含了他人的爱与记忆，随着丢弃，一同消失的时候；我们还会要回想起这段丢失的记忆吗？',
  },
  {
    index: 13,
    team: '叫什么名字呢',
    title: '文件过响应',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-13.webp',
    description: '你不想让文件响应，但挡不住文件硬要响应。',
    gmhubUrl: 'https://gmhub.com/game/10194',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1bgTy6fE13/',
  },
  {
    index: 14,
    team: 'Team Falcons',
    title: 'Push&Pull',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-14.webp',
    description: '以 Push & Pull，飞向终点。',
  },
  {
    index: 15,
    team: '败犬队',
    title: '海之霸',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-15.webp',
    description: '来钓鱼吧♡',
    gmhubUrl: 'https://gmhub.com/game/10368',
  },
  {
    index: 16,
    team: '（未知团队）',
    title: 'Ancher pinball machine',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-16.webp',
    description: '弹珠战斗游戏，战斗爽。',
    playUrl: 'https://zesty-speculoos-853237.netlify.app/',
  },
  {
    index: 17,
    team: '总之啥都队',
    title: 'Chill Fishing',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-17.webp',
    description: '这是一个非常休闲的桌宠钓鱼小游戏。',
  },
  {
    index: 18,
    team: '福乐小镇',
    title: '猫喵抛锚',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-18.webp',
    description: '猫咪抛锚占领海洋，成为鱼的霸主。',
    gmhubUrl: 'https://gmhub.com/game/9952',
    bilibiliUrl: 'https://b23.tv/T0mtc91',
  },
  {
    index: 19,
    team: '狗狗新闻演播厅',
    title: '狗狗新闻演播厅',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-19.webp',
    description: '狗叫模拟器。',
  },
  {
    index: 20,
    team: '山海经游戏开发部',
    title: '大莉水手飞锚腿',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-20.webp',
    description: '守锚人姐妹凯蒂与茉莉，使用体型极不相称的巨型船锚，在船只甲板战斗、击退墨团章鱼。',
    gmhubUrl: 'https://gmhub.com/game/10115',
    bilibiliUrl: 'https://www.bilibili.com/video/BV13YMM6wEWi',
  },
  {
    index: 21,
    team: '37号远征队',
    title: 'Give back to me！！ 拿来吧你！！',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-21.webp',
    description: '利用钩锁在海里移动，捕捉小鱼躲避危险，击败抢夺宝物的大章鱼。',
  },
  {
    index: 22,
    team: '大工海豹突击队',
    title: '海盗雷达 - PirateRadar',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-22.webp',
    description: '扮演雌小鬼海盗的杂鱼手下，在遍布暗礁和风浪的海上使用雷达接收信号，锚定宝藏地点！',
    gmhubUrl: 'https://www.gmhub.com/game/9922',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1D5Mu6AE69',
  },
  {
    index: 23,
    team: '无业游民',
    title: 'Anchoroid',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-23.webp',
    description: '携带锚型武器，离开暗夜城。',
  },
  {
    index: 24,
    team: '从零开始の游戏制作',
    title: '传送锚点？！',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-24.webp',
    description: '真的有锚吗（耄耋哈气！）',
  },
  {
    index: 25,
    team: '暂无',
    title: '生而为锚',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-25.webp',
    description: '是一款剧情互动冒险游戏，你将扮演一个新生的 AI 审判官去调查一个案件，学习并寻找支撑自己生命的锚点。',
  },
  {
    index: 26,
    team: 'DieJobDeathCar',
    title: '锚叠：锚定时空（Anchor Stack）',
    image: '/images/activities/ciga-gamejam-2026-shenyang/games/game-26.webp',
    description: '一个玩家可以创造锚点来记录当前的时/空间状态，并在合适的时机回溯到被锚定的状态的 2D 平台跳跃解密游戏。',
  },
];
