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
    city: '哈尔滨',
    cityEn: 'Harbin',
    description: '哈尔滨作为东北游戏开发领域的核心城市，汇聚了多所高校的游戏开发社团。这里的核心社群由哈工大游戏开发社牵头，以独立游戏创作为载体，形成以程序与美术为核心的开发协作氛围。',
    descriptionEn: 'As a core city for game development in Northeast China, Harbin brings together game development clubs from multiple universities. The core community is led by the HIT Game Dev Club, fostering a collaborative environment centered on programming and art through indie game creation.',
    clubs: [
      {
        id: 'hit',
        name: '哈工大游戏开发社',
        nameEn: 'HIT Game Dev Club',
        school: '哈尔滨工业大学',
        schoolEn: 'Harbin Institute of Technology',
        location: '哈尔滨',
        locationEn: 'Harbin',
        skills: ['程序开发', '游戏美术'],
      },
      {
        id: 'heu',
        name: '哈工程游戏开发社',
        nameEn: 'HEU Game Dev Club',
        school: '哈尔滨工程大学',
        schoolEn: 'Harbin Engineering University',
        location: '哈尔滨',
        locationEn: 'Harbin',
        skills: ['程序开发', '游戏美术'],
      },
      {
        id: 'hrbnu',
        name: '哈师大数字游戏社',
        nameEn: 'HRBNU Digital Game Club',
        school: '哈尔滨师范大学',
        schoolEn: 'Harbin Normal University',
        location: '哈尔滨',
        locationEn: 'Harbin',
        skills: ['程序开发', '游戏美术'],
      },
      {
        id: 'nefu',
        name: '东北林大游戏开发社',
        nameEn: 'NEFU Game Dev Club',
        school: '东北林业大学',
        schoolEn: 'Northeast Forestry University',
        location: '哈尔滨',
        locationEn: 'Harbin',
        skills: ['程序开发', '游戏美术'],
      },
      {
        id: 'usth',
        name: '黑龙江科技大学游戏开发社',
        nameEn: 'USTH Game Dev Club',
        school: '黑龙江科技大学',
        schoolEn: 'Heilongjiang University of Science and Technology',
        location: '哈尔滨',
        locationEn: 'Harbin',
        skills: ['游戏美术', '游戏策划'],
      },
      {
        id: 'hlju',
        name: '黑龙江大学游戏开发社',
        nameEn: 'HLJU Game Dev Club',
        school: '黑龙江大学',
        schoolEn: 'Heilongjiang University',
        location: '哈尔滨',
        locationEn: 'Harbin',
        skills: ['游戏美术', '游戏策划'],
      },
      {
        id: 'nepu',
        name: '东北石油大学游戏开发社',
        nameEn: 'NEPU Game Dev Club',
        school: '东北石油大学',
        schoolEn: 'Northeast Petroleum University',
        location: '哈尔滨',
        locationEn: 'Harbin',
        skills: ['程序开发', '游戏管理'],
      },
    ],
  },
  {
    city: '长春',
    cityEn: 'Changchun',
    description: '长春在高校游戏开发领域具有吉林大学等优势高校的支撑，致力于为东北地区高校游戏开发提供人才与创意。',
    descriptionEn: 'Changchun benefits from the support of leading universities such as Jilin University, dedicated to providing talent and creativity for game development in Northeast China.',
    clubs: [
      {
        id: 'jlu',
        name: '吉林大学游戏开发社',
        nameEn: 'JLU Game Dev Club',
        school: '吉林大学',
        schoolEn: 'Jilin University',
        location: '长春',
        locationEn: 'Changchun',
        skills: ['程序开发', '游戏美术'],
      },
      {
        id: 'nenu',
        name: '东北师大游戏开发社',
        nameEn: 'NENU Game Dev Club',
        school: '东北师范大学',
        schoolEn: 'Northeast Normal University',
        location: '长春',
        locationEn: 'Changchun',
        skills: ['程序开发'],
      },
    ],
  },
  {
    city: '沈阳',
    cityEn: 'Shenyang',
    description: '鲁迅美术学院作为沈阳地区的核心社团节点，在程序开发、游戏美术与动画领域为联盟注入了多维度的艺术与技术资源。',
    descriptionEn: 'Lu Xun Academy of Fine Arts, as the core club hub in Shenyang, brings multi-dimensional artistic and technical resources to the alliance in programming, game art, and animation.',
    clubs: [
      {
        id: 'lafa',
        name: '鲁迅美术学院游戏开发社',
        nameEn: 'LAFA Game Dev Club',
        school: '鲁迅美术学院',
        schoolEn: 'Lu Xun Academy of Fine Arts',
        location: '沈阳',
        locationEn: 'Shenyang',
        skills: ['程序开发', '游戏美术', '2D动画', '3D动画'],
      },
      {
        id: 'neu',
        name: '东北大学游戏开发社',
        nameEn: 'NEU Game Dev Club',
        school: '东北大学',
        schoolEn: 'Northeastern University',
        location: '沈阳',
        locationEn: 'Shenyang',
        skills: ['程序开发', '游戏美术'],
      },
      {
        id: 'sjzu',
        name: '沈阳建筑大学游戏开发社',
        nameEn: 'SJZU Game Dev Club',
        school: '沈阳建筑大学',
        schoolEn: 'Shenyang Jianzhu University',
        location: '沈阳',
        locationEn: 'Shenyang',
        skills: ['程序开发', '游戏美术'],
      },
      {
        id: 'imeu',
        name: '沈阳城市学院游戏开发社',
        nameEn: 'IMEU Game Dev Club',
        school: '沈阳城市学院',
        schoolEn: 'Shenyang City University',
        location: '沈阳',
        locationEn: 'Shenyang',
        skills: ['程序开发', '游戏美术'],
      },
    ],
  },
  {
    city: '大连',
    cityEn: 'Dalian',
    description: '大连理工大学游戏开发社是大连地区联盟的核心力量，以程序开发和美术见长。',
    descriptionEn: 'The DLUT Game Dev Club is the core force of the alliance in Dalian, excelling in programming and game art.',
    clubs: [
      {
        id: 'dlut',
        name: '大连理工大学游戏开发社',
        nameEn: 'DLUT Game Dev Club',
        school: '大连理工大学',
        schoolEn: 'Dalian University of Technology',
        location: '大连',
        locationEn: 'Dalian',
        skills: ['程序开发', '游戏美术'],
      },
    ],
  },
  {
    city: '锦州',
    cityEn: 'Jinzhou',
    description: '渤海大学游戏开发社是锦州地区的重要社团力量，致力于程序开发与游戏美术。',
    descriptionEn: 'The Bohai University Game Dev Club is an important force in Jinzhou, dedicated to programming and game art.',
    clubs: [
      {
        id: 'bu',
        name: '渤海大学游戏开发社',
        nameEn: 'BU Game Dev Club',
        school: '渤海大学',
        schoolEn: 'Bohai University',
        location: '锦州',
        locationEn: 'Jinzhou',
        skills: ['程序开发', '游戏美术'],
      },
    ],
  },
  {
    city: '呼和浩特',
    cityEn: 'Hohhot',
    description: '内蒙古大学游戏开发社是呼和浩特地区的代表社团，为联盟带来了内蒙古的游戏开发潜力。',
    descriptionEn: 'The IMU Game Dev Club represents Hohhot, bringing the game development potential of Inner Mongolia to the alliance.',
    clubs: [
      {
        id: 'imu',
        name: '内蒙古大学游戏开发社',
        nameEn: 'IMU Game Dev Club',
        school: '内蒙古大学',
        schoolEn: 'Inner Mongolia University',
        location: '呼和浩特',
        locationEn: 'Hohhot',
        skills: ['程序开发', '游戏美术'],
      },
    ],
  },
];

export function getAllUniversityInfos(): UniversityInfo[] {
  return cityGroups.flatMap((g) => g.clubs);
}

export const skillCategories: Record<string, string[]> = {
  '程序开发': ['Unity', 'UE', 'Godot', '策划', 'C++', 'Blend'],
  '游戏美术': ['3D', '2D', '场景', '角色'],
  '游戏策划': ['玩法', '数值', '关卡'],
  '游戏管理': ['社团运营', '活动运营', '渠道运营'],
  '2D动画': ['角色动画', '角色与场景', '特效', '2DPV'],
  '3D动画': ['角色动画', '场景建构', '特效', '3DPV'],
};
