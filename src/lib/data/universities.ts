import type { Locale } from '@/i18n/routing';

export interface UniversityInfo {
  id: string;
  name: string;
  nameEn: string;
  location: string;
}

const zhUniversities: UniversityInfo[] = [
  { id: 'neu', name: '东北大学', nameEn: 'Northeastern University', location: '沈阳' },
  { id: 'lnu', name: '辽宁大学', nameEn: 'Liaoning University', location: '沈阳' },
  { id: 'dlut', name: '大连理工大学', nameEn: 'Dalian University of Technology', location: '大连' },
  { id: 'dlu', name: '大连大学', nameEn: 'Dalian University', location: '大连' },
  { id: 'jlu', name: '吉林大学', nameEn: 'Jilin University', location: '长春' },
  { id: 'nenu', name: '东北师范大学', nameEn: 'Northeast Normal University', location: '长春' },
  { id: 'hit', name: '哈尔滨工业大学', nameEn: 'Harbin Institute of Technology', location: '哈尔滨' },
  { id: 'hrbeu', name: '哈尔滨工程大学', nameEn: 'Harbin Engineering University', location: '哈尔滨' },
  { id: 'imu', name: '内蒙古大学', nameEn: 'Inner Mongolia University', location: '呼和浩特' },
  { id: 'syau', name: '沈阳农业大学', nameEn: 'Shenyang Agricultural University', location: '沈阳' },
  { id: 'sut', name: '沈阳工业大学', nameEn: 'Shenyang University of Technology', location: '沈阳' },
  { id: 'dufe', name: '东北财经大学', nameEn: 'Dongbei University of Finance and Economics', location: '大连' },
];

const enUniversities: UniversityInfo[] = [
  { id: 'neu', name: 'Northeastern University', nameEn: 'Northeastern University', location: 'Shenyang' },
  { id: 'lnu', name: 'Liaoning University', nameEn: 'Liaoning University', location: 'Shenyang' },
  { id: 'dlut', name: 'Dalian University of Technology', nameEn: 'Dalian University of Technology', location: 'Dalian' },
  { id: 'dlu', name: 'Dalian University', nameEn: 'Dalian University', location: 'Dalian' },
  { id: 'jlu', name: 'Jilin University', nameEn: 'Jilin University', location: 'Changchun' },
  { id: 'nenu', name: 'Northeast Normal University', nameEn: 'Northeast Normal University', location: 'Changchun' },
  { id: 'hit', name: 'Harbin Institute of Technology', nameEn: 'Harbin Institute of Technology', location: 'Harbin' },
  { id: 'hrbeu', name: 'Harbin Engineering University', nameEn: 'Harbin Engineering University', location: 'Harbin' },
  { id: 'imu', name: 'Inner Mongolia University', nameEn: 'Inner Mongolia University', location: 'Hohhot' },
  { id: 'syau', name: 'Shenyang Agricultural University', nameEn: 'Shenyang Agricultural University', location: 'Shenyang' },
  { id: 'sut', name: 'Shenyang University of Technology', nameEn: 'Shenyang University of Technology', location: 'Shenyang' },
  { id: 'dufe', name: 'Dongbei University of Finance and Economics', nameEn: 'Dongbei University of Finance and Economics', location: 'Dalian' },
];

const jaUniversities: UniversityInfo[] = [
  { id: 'neu', name: '東北大学', nameEn: 'Northeastern University', location: '瀋陽' },
  { id: 'lnu', name: '遼寧大学', nameEn: 'Liaoning University', location: '瀋陽' },
  { id: 'dlut', name: '大連理工大学', nameEn: 'Dalian University of Technology', location: '大連' },
  { id: 'dlu', name: '大連大学', nameEn: 'Dalian University', location: '大連' },
  { id: 'jlu', name: '吉林大学', nameEn: 'Jilin University', location: '長春' },
  { id: 'nenu', name: '東北師範大学', nameEn: 'Northeast Normal University', location: '長春' },
  { id: 'hit', name: 'ハルビン工業大学', nameEn: 'Harbin Institute of Technology', location: 'ハルビン' },
  { id: 'hrbeu', name: 'ハルビン工程大学', nameEn: 'Harbin Engineering University', location: 'ハルビン' },
  { id: 'imu', name: '内モンゴル大学', nameEn: 'Inner Mongolia University', location: 'フフホト' },
  { id: 'syau', name: '瀋陽農業大学', nameEn: 'Shenyang Agricultural University', location: '瀋陽' },
  { id: 'sut', name: '瀋陽工業大学', nameEn: 'Shenyang University of Technology', location: '瀋陽' },
  { id: 'dufe', name: '東北財経大学', nameEn: 'Dongbei University of Finance and Economics', location: '大連' },
];

const koUniversities: UniversityInfo[] = [
  { id: 'neu', name: '둥베이대학', nameEn: 'Northeastern University', location: '선양' },
  { id: 'lnu', name: '랴오닝대학', nameEn: 'Liaoning University', location: '선양' },
  { id: 'dlut', name: '다롄이공대학', nameEn: 'Dalian University of Technology', location: '다롄' },
  { id: 'dlu', name: '다롄대학', nameEn: 'Dalian University', location: '다롄' },
  { id: 'jlu', name: '지린대학', nameEn: 'Jilin University', location: '창춘' },
  { id: 'nenu', name: '둥베이사범대학', nameEn: 'Northeast Normal University', location: '창춘' },
  { id: 'hit', name: '하얼빈공업대학', nameEn: 'Harbin Institute of Technology', location: '하얼빈' },
  { id: 'hrbeu', name: '하얼빈공정대학', nameEn: 'Harbin Engineering University', location: '하얼빈' },
  { id: 'imu', name: '내몽골대학', nameEn: 'Inner Mongolia University', location: '후허하오터' },
  { id: 'syau', name: '선양농업대학', nameEn: 'Shenyang Agricultural University', location: '선양' },
  { id: 'sut', name: '선양공업대학', nameEn: 'Shenyang University of Technology', location: '선양' },
  { id: 'dufe', name: '둥베이재경대학', nameEn: 'Dongbei University of Finance and Economics', location: '다롄' },
];

const ruUniversities: UniversityInfo[] = [
  { id: 'neu', name: 'Северо-Восточный университет', nameEn: 'Northeastern University', location: 'Шэньян' },
  { id: 'lnu', name: 'Ляонинский университет', nameEn: 'Liaoning University', location: 'Шэньян' },
  { id: 'dlut', name: 'Даляньский технологический университет', nameEn: 'Dalian University of Technology', location: 'Далянь' },
  { id: 'dlu', name: 'Даляньский университет', nameEn: 'Dalian University', location: 'Далянь' },
  { id: 'jlu', name: 'Цзилиньский университет', nameEn: 'Jilin University', location: 'Чанчунь' },
  { id: 'nenu', name: 'Северо-Восточный педагогический университет', nameEn: 'Northeast Normal University', location: 'Чанчунь' },
  { id: 'hit', name: 'Харбинский политехнический институт', nameEn: 'Harbin Institute of Technology', location: 'Харбин' },
  { id: 'hrbeu', name: 'Харбинский инженерный университет', nameEn: 'Harbin Engineering University', location: 'Харбин' },
  { id: 'imu', name: 'Университет Внутренней Монголии', nameEn: 'Inner Mongolia University', location: 'Хух-Хото' },
  { id: 'syau', name: 'Шэньянский сельскохозяйственный университет', nameEn: 'Shenyang Agricultural University', location: 'Шэньян' },
  { id: 'sut', name: 'Шэньянский технологический университет', nameEn: 'Shenyang University of Technology', location: 'Шэньян' },
  { id: 'dufe', name: 'Дунбэйский университет финансов и экономики', nameEn: 'Dongbei University of Finance and Economics', location: 'Далянь' },
];

const mnUniversities: UniversityInfo[] = [
  { id: 'neu', name: 'Зүүн Хойд Их Сургууль', nameEn: 'Northeastern University', location: 'Шэньян' },
  { id: 'lnu', name: 'Ляонин Их Сургууль', nameEn: 'Liaoning University', location: 'Шэньян' },
  { id: 'dlut', name: 'Далянь Технологийн Их Сургууль', nameEn: 'Dalian University of Technology', location: 'Далянь' },
  { id: 'dlu', name: 'Далянь Их Сургууль', nameEn: 'Dalian University', location: 'Далянь' },
  { id: 'jlu', name: 'Жилин Их Сургууль', nameEn: 'Jilin University', location: 'Чанчунь' },
  { id: 'nenu', name: 'Зүүн Хойд Багшийн Их Сургууль', nameEn: 'Northeast Normal University', location: 'Чанчунь' },
  { id: 'hit', name: 'Харбин Политехникийн Хүрээлэн', nameEn: 'Harbin Institute of Technology', location: 'Харбин' },
  { id: 'hrbeu', name: 'Харбин Инженерийн Их Сургууль', nameEn: 'Harbin Engineering University', location: 'Харбин' },
  { id: 'imu', name: 'Өвөр Монголын Их Сургууль', nameEn: 'Inner Mongolia University', location: 'Хөх хот' },
  { id: 'syau', name: 'Шэньян Хөдөө Аж Ахуйн Их Сургууль', nameEn: 'Shenyang Agricultural University', location: 'Шэньян' },
  { id: 'sut', name: 'Шэньян Технологийн Их Сургууль', nameEn: 'Shenyang University of Technology', location: 'Шэньян' },
  { id: 'dufe', name: 'Зүүн Хойд Санхүү Эдийн Засгийн Их Сургууль', nameEn: 'Dongbei University of Finance and Economics', location: 'Далянь' },
];

const universitiesMap: Record<Locale, UniversityInfo[]> = {
  zh: zhUniversities,
  en: enUniversities,
  ja: jaUniversities,
  ko: koUniversities,
  ru: ruUniversities,
  mn: mnUniversities,
};

function getUniData(locale: Locale): UniversityInfo[] {
  return universitiesMap[locale] || zhUniversities;
}

export function getUniversities(locale?: Locale): UniversityInfo[] {
  return getUniData(locale || 'zh');
}
