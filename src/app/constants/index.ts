import paths from '../configs/paths';
import { ServiceIconType, ServiceType } from '../enums';
import {
  FilterKey,
  IBlog,
  IBodyRecord,
  IDiary,
  IExercise,
  IFilterData,
  IFoodItem,
  IService,
} from '../types';

export const HEADER_HEIGHT = 64;

export const FOOD_ITEMS_PER_LOAD = 8;

export const dataByFilter: Record<FilterKey, IFilterData[]> = {
  day: [
    { month: '01', value1: 70.1, value2: 68.2 },
    { month: '02', value1: 70.3, value2: 68.5 },
    { month: '03', value1: 70.0, value2: 68.0 },
    { month: '04', value1: 70.2, value2: 68.3 },
  ],
  week: [
    { month: 'Week 1', value1: 71.5, value2: 69.2 },
    { month: 'Week 2', value1: 71.8, value2: 69.5 },
    { month: 'Week 3', value1: 72.0, value2: 70.0 },
    { month: 'Week 4', value1: 71.2, value2: 68.9 },
  ],
  month: [
    { month: '6月', value1: 75.2, value2: 73.8 },
    { month: '7月', value1: 74.1, value2: 72.9 },
    { month: '8月', value1: 71.5, value2: 70.2 },
    { month: '9月', value1: 73.8, value2: 71.8 },
  ],
  year: [
    { month: '6月', value1: 75.2, value2: 73.8 },
    { month: '7月', value1: 74.1, value2: 72.9 },
    { month: '8月', value1: 71.5, value2: 70.2 },
    { month: '9月', value1: 73.8, value2: 71.8 },
    { month: '10月', value1: 72.3, value2: 70.5 },
    { month: '11月', value1: 71.8, value2: 69.8 },
    { month: '12月', value1: 73.2, value2: 70.1 },
    { month: '1月', value1: 71.9, value2: 69.2 },
    { month: '2月', value1: 71.1, value2: 68.5 },
    { month: '3月', value1: 70.5, value2: 67.8 },
    { month: '4月', value1: 69.8, value2: 67.1 },
    { month: '5月', value1: 69.2, value2: 66.5 },
  ],
};

export const timeFilters: { id: FilterKey; label: string }[] = [
  { id: 'day', label: '日' },
  { id: 'week', label: '週' },
  { id: 'month', label: '月' },
  { id: 'year', label: '年' },
];

export const exerciseData: IExercise[] = [
  { id: 1, title: '家事全般 (立位・軽い)', calories: 26, duration: '10 min' },
  { id: 2, title: '掃除 (中程度)', calories: 50, duration: '20 min' },
  { id: 3, title: '洗濯 (軽い)', calories: 30, duration: '15 min' },
  { id: 4, title: '料理 (中程度)', calories: 40, duration: '25 min' },
  { id: 5, title: '買い物 (歩行)', calories: 60, duration: '30 min' },
  { id: 6, title: '庭仕事 (軽い)', calories: 20, duration: '12 min' },
  { id: 7, title: '犬の散歩 (中程度)', calories: 45, duration: '22 min' },
  { id: 8, title: '子供の世話 (軽い)', calories: 35, duration: '18 min' },
  { id: 9, title: 'ガーデニング (中程度)', calories: 55, duration: '28 min' },
  { id: 10, title: 'DIY作業 (軽い)', calories: 25, duration: '14 min' },
];

export const listBodyRecordData: IBodyRecord[] = [
  {
    id: 1,
    imageSrc: '/my-self/1.jpg',
    title: 'BODY RECORD',
    buttonText: '自分のカラダの記録',
  },
  {
    id: 2,
    imageSrc: '/my-self/2.jpg',
    title: 'MY EXERCISE',
    buttonText: '自分の運動の記録',
  },
  {
    id: 3,
    imageSrc: '/my-self/3.jpg',
    title: 'MY DIARY',
    buttonText: '自分の日記',
  },
];

export const footerLinks = [
  '会員登録',
  '運営会社',
  '利用契約',
  '個人情報の取扱について',
  '特定商取引法に基づく表記',
  'お問い合わせ',
];

export const menuItems = [
  { title: '自分の記録', href: paths.home },
  { title: '体重グラフ', href: '#' },
  { title: '目標', href: '#' },
  { title: '選択中のコース', href: '#' },
  { title: 'コラム一覧', href: paths.mySelf },
  { title: '設定', href: '#' },
];

export const chartData = [
  { month: '6月', value1: 95, value2: 95 },
  { month: '7月', value1: 90, value2: 88 },
  { month: '8月', value1: 70, value2: 75 },
  { month: '9月', value1: 65, value2: 70 },
  { month: '10月', value1: 50, value2: 60 },
  { month: '11月', value1: 48, value2: 55 },
  { month: '12月', value1: 40, value2: 50 },
  { month: '1月', value1: 35, value2: 45 },
  { month: '2月', value1: 30, value2: 40 },
  { month: '3月', value1: 20, value2: 35 },
  { month: '4月', value1: 15, value2: 30 },
  { month: '5月', value1: 10, value2: 25 },
];

export const servicesData: IService[] = [
  {
    id: 1,
    title: 'Morning',
    typeIcon: ServiceIconType.Trash,
    type: ServiceType.Morning,
  },
  {
    id: 2,
    title: 'Lunch',
    typeIcon: ServiceIconType.Trash,
    type: ServiceType.Lunch,
  },
  {
    id: 3,
    title: 'Dinner',
    typeIcon: ServiceIconType.Trash,
    type: ServiceType.Dinner,
  },
  {
    id: 4,
    title: 'Snack',
    typeIcon: ServiceIconType.Knife,
    type: ServiceType.Snack,
  },
];

export const recommendedData = [
  {
    english: 'RECOMMENDED\nCOLUMN',
    japanese: 'オススメ',
  },
  {
    english: 'RECOMMENDED\nDIET',
    japanese: 'ダイエット',
  },
  {
    english: 'RECOMMENDED\nBEAUTY',
    japanese: '美容',
  },
  {
    english: 'RECOMMENDED\nHEALTH',
    japanese: '健康',
  },
];

// Sample API data
export const allBlogItems: IBlog[] = [
  {
    id: 1,
    imageSrc: '/blogs/1.jpg',
    date: '2021.05.17',
    time: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 2,
    imageSrc: '/blogs/2.jpg',
    date: '2021.05.17',
    time: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 3,
    imageSrc: '/blogs/3.jpg',
    date: '2021.05.17',
    time: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 4,
    imageSrc: '/blogs/4.jpg',
    date: '2021.05.17',
    time: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 5,
    imageSrc: '/blogs/5.jpg',
    date: '2021.05.17',
    time: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 6,
    imageSrc: '/blogs/6.jpg',
    date: '2021.05.17',
    time: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 7,
    imageSrc: '/blogs/7.jpg',
    date: '2021.05.17',
    time: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 8,
    imageSrc: '/blogs/8.jpg',
    date: '2021.05.17',
    time: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 9,
    imageSrc: '/blogs/1.jpg',
    date: '2021.05.17',
    time: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    id: 10,
    imageSrc: '/blogs/2.jpg',
    date: '2021.05.17',
    time: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
  },
];

export const allDiaryItems: IDiary[] = [
  {
    id: 1,
    date: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: 2,
    date: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: 3,
    date: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: 4,
    date: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: 5,
    date: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: 6,
    date: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: 7,
    date: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: 8,
    date: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: 9,
    date: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: 10,
    date: '2021.05.21',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
];

export const allFoodItems: IFoodItem[] = [
  {
    id: '1',
    imageSrc: '/foods/1.jpg',
    date: '05.21',
    mealType: ServiceType.Morning,
  },
  { id: '2', imageSrc: '/foods/1.jpg', date: '05.21', mealType: ServiceType.Lunch },
  { id: '3', imageSrc: '/foods/2.jpg', date: '05.21', mealType: ServiceType.Dinner },
  { id: '4', imageSrc: '/foods/3.jpg', date: '05.21', mealType: ServiceType.Snack },
  {
    id: '5',
    imageSrc: '/foods/4.jpg',
    date: '05.20',
    mealType: ServiceType.Morning,
  },
  { id: '6', imageSrc: '/foods/5.jpg', date: '05.20', mealType: ServiceType.Lunch },
  { id: '7', imageSrc: '/foods/6.jpg', date: '05.20', mealType: ServiceType.Dinner },
  { id: '8', imageSrc: '/foods/7.jpg', date: '05.20', mealType: ServiceType.Snack },
  {
    id: '9',
    imageSrc: '/foods/1.jpg',
    date: '05.19',
    mealType: ServiceType.Morning,
  },
  { id: '10', imageSrc: '/foods/1.jpg', date: '05.19', mealType: ServiceType.Lunch },
  {
    id: '11',
    imageSrc: '/foods/1.jpg',
    date: '05.19',
    mealType: ServiceType.Dinner,
  },
  { id: '12', imageSrc: '/foods/2.jpg', date: '05.19', mealType: ServiceType.Snack },
];

export const ITEMS_PER_LOAD = 8;

export const progress = 75;
export const radius = 50;
export const circumference = 2 * Math.PI * radius;
export const strokeDashoffset = circumference - (progress / 100) * circumference;
