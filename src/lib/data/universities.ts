export interface UniversityInfo {
  id: string;
  name: string;
  nameEn: string;
  school: string;
  schoolEn: string;
  logoUrl?: string;
  partnerUrl?: string;
  location: string;
  locationEn: string;
  skills: string[];
}

export interface CityGroup {
  city: string;
  cityEn: string;
  description: string;
  descriptionEn: string;
  clubs: UniversityInfo[];
}

export const cityGroups: CityGroup[] = [
  {
    city: '沈阳',
    cityEn: 'Shenyang',
    description: '沈阳是东北高校游戏开发社团联盟的核心城市，汇聚了东北大学、辽宁大学、鲁迅美术学院等 6 所高校的游戏开发社团，涵盖程序、美术、策划、动画、音频等多方向技能。',
    descriptionEn: 'Shenyang is the core city of the Northeast University Game Dev Club Alliance, bringing together game development clubs from 6 universities including Northeastern University, Liaoning University, and Lu Xun Academy of Fine Arts, covering programming, art, design, animation, audio, and more.',
    clubs: [
      {
        id: 'neu',
        name: '蒸汽独游社',
        nameEn: 'Steam Indie Club',
        school: '东北大学',
        schoolEn: 'Northeastern University',
        location: '沈阳',
        locationEn: 'Shenyang',
        skills: ['程序', '美术'],
      },
      {
        id: 'lnu',
        name: '数字艺术实验室',
        nameEn: 'Digital Art Lab',
        school: '辽宁大学',
        schoolEn: 'Liaoning University',
        location: '沈阳',
        locationEn: 'Shenyang',
        skills: ['程序', '策划', '美术'],
      },
      {
        id: 'synu',
        name: 'Dream Forge',
        nameEn: 'Dream Forge',
        school: '沈阳师范大学',
        schoolEn: 'Shenyang Normal University',
        location: '沈阳',
        locationEn: 'Shenyang',
        skills: ['程序'],
      },
      {
        id: 'lncm',
        name: '辽传 · 开发部',
        nameEn: 'LCAD Dev Dept',
        school: '辽宁传媒学院',
        schoolEn: 'Liaoning Communication University',
        location: '沈阳',
        locationEn: 'Shenyang',
        skills: ['美术', '动画', '策划'],
      },
      {
        id: 'lafa',
        name: 'LAFA 独游工作室',
        nameEn: 'LAFA Indie Studio',
        school: '鲁迅美术学院',
        schoolEn: 'Lu Xun Academy of Fine Arts',
        location: '沈阳',
        locationEn: 'Shenyang',
        skills: ['美术'],
      },
      {
        id: 'sylu',
        name: '幻想乡游戏制作交流社',
        nameEn: 'Gensokyo Game Dev Club',
        school: '沈阳理工大学',
        schoolEn: 'Shenyang Ligong University',
        location: '沈阳',
        locationEn: 'Shenyang',
        skills: ['程序', '美术', '策划', '音频', '编导'],
      },
    ],
  },
  {
    city: '哈尔滨',
    cityEn: 'Harbin',
    description: '哈尔滨拥有哈尔滨工业大学、哈尔滨理工大学等高校的游戏开发社团，在程序开发与游戏美术领域形成了扎实的技术氛围。',
    descriptionEn: 'Harbin is home to game development clubs from Harbin Institute of Technology and Harbin University of Science and Technology, fostering a strong technical atmosphere in programming and game art.',
    clubs: [
      {
        id: 'hrbust',
        name: '光线独游社',
        nameEn: 'Raylight Indie Club',
        school: '哈尔滨理工大学',
        schoolEn: 'Harbin University of Science and Technology',
        location: '哈尔滨',
        locationEn: 'Harbin',
        skills: ['程序', '策划'],
      },
      {
        id: 'hit',
        name: '游戏梦工厂',
        nameEn: 'Game Dream Factory',
        school: '哈尔滨工业大学',
        schoolEn: 'Harbin Institute of Technology',
        location: '哈尔滨',
        locationEn: 'Harbin',
        skills: ['程序', '美术'],
      },
      {
        id: 'hiec',
        name: '苏打游戏社',
        nameEn: 'Soda Game Club',
        school: '哈尔滨信息工程学院',
        schoolEn: 'Harbin Institute of Information Engineering',
        location: '哈尔滨',
        locationEn: 'Harbin',
        skills: ['程序', '美术', '策划'],
      },
    ],
  },
  {
    city: '长春',
    cityEn: 'Changchun',
    description: '长春汇聚了长春理工大学、吉林动画学院等 4 所高校的游戏开发社团，以美术与技术美术见长。',
    descriptionEn: 'Changchun brings together game development clubs from 4 universities including Changchun University of Science and Technology and Jilin Animation Institute, known for art and technical art expertise.',
    clubs: [
      {
        id: 'cust',
        name: '游隙拾光工作室',
        nameEn: 'Playlight Studio',
        school: '长春理工大学',
        schoolEn: 'Changchun University of Science and Technology',
        location: '长春',
        locationEn: 'Changchun',
        skills: ['程序', '技美'],
      },
      {
        id: 'jlau',
        name: '游戏开发社团',
        nameEn: 'Game Dev Club',
        school: '吉林农业大学',
        schoolEn: 'Jilin Agricultural University',
        location: '长春',
        locationEn: 'Changchun',
        skills: ['美术'],
      },
      {
        id: 'jai',
        name: '游戏开发社团',
        nameEn: 'Game Dev Club',
        school: '吉林动画学院',
        schoolEn: 'Jilin Animation Institute',
        location: '长春',
        locationEn: 'Changchun',
        skills: ['美术'],
      },
      {
        id: 'jla',
        name: '像素艺术创作交流',
        nameEn: 'Pixel Art Exchange',
        school: '吉林艺术学院',
        schoolEn: 'Jilin University of the Arts',
        location: '长春',
        locationEn: 'Changchun',
        skills: ['美术'],
      },
    ],
  },
  {
    city: '大连',
    cityEn: 'Dalian',
    description: '大连理工大学 echo game studio 是大连地区的代表社团，在客户端开发与技术美术方向具备专业实力。',
    descriptionEn: 'Echo Game Studio at Dalian University of Technology represents Dalian, with professional expertise in client development and technical art.',
    clubs: [
      {
        id: 'dlut',
        name: 'echo game studio',
        nameEn: 'echo game studio',
        school: '大连理工大学',
        schoolEn: 'Dalian University of Technology',
        location: '大连',
        locationEn: 'Dalian',
        skills: ['客户端', 'TA'],
      },
    ],
  },
  {
    city: '阜新',
    cityEn: 'Fuxin',
    description: '辽宁工程技术大学的像素跳动创想社是阜新地区的代表社团，以综合技能方向参与联盟活动。',
    descriptionEn: 'Pixel Beat Studio at Liaoning Technical University represents Fuxin, participating in alliance activities with a comprehensive skill set.',
    clubs: [
      {
        id: 'lntu',
        name: '像素跳动创想社',
        nameEn: 'Pixel Beat Studio',
        school: '辽宁工程技术大学',
        schoolEn: 'Liaoning Technical University',
        location: '阜新',
        locationEn: 'Fuxin',
        skills: ['综合'],
      },
    ],
  },
  {
    city: '吉林市',
    cityEn: 'Jilin City',
    description: '北华大学游戏开发技术工作室是吉林市地区的代表社团，在程序开发与建模方向持续输出作品。',
    descriptionEn: 'The Game Dev Tech Studio at Beihua University represents Jilin City, consistently producing work in programming and 3D modeling.',
    clubs: [
      {
        id: 'beihua',
        name: '游戏开发技术工作室',
        nameEn: 'Game Dev Tech Studio',
        school: '北华大学',
        schoolEn: 'Beihua University',
        location: '吉林市',
        locationEn: 'Jilin City',
        skills: ['程序', '建模'],
      },
    ],
  },
];

export function getAllUniversityInfos(): UniversityInfo[] {
  return cityGroups.flatMap((g) => g.clubs);
}
