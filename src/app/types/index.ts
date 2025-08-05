import { ServiceIconType, ServiceType } from '../enums';

export interface IService {
  id: number;
  title: string;
  typeIcon: ServiceIconType;
  type: ServiceType;
}

export interface IFoodItem {
  id: string;
  imageSrc: string;
  date: string;
  mealType: ServiceType;
}

export interface IBodyRecord {
  id: number;
  imageSrc: string;
  title: string;
  buttonText: string;
}

export interface IBlog {
  id: number;
  imageSrc: string;
  date: string;
  time: string;
  title: string;
  tags: string[];
}

export interface IDiary {
  id: number;
  date: string;
  time: string;
  title: string;
  content: string;
}

export interface IExercise {
  id: number;
  title: string;
  calories: number;
  duration: string;
}

export interface IApiResponse<T> {
  items: T[];
  total: number;
  offset: number;
  limit: number;
}

export interface IApiError {
  error: string;
}

export type FilterKey = 'day' | 'week' | 'month' | 'year';

export interface IFilterData {
  month: string;
  value1: number;
  value2: number;
}
