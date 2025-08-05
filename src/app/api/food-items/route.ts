import { allFoodItems } from '@/app/constants';
import { IApiResponse, IFoodItem } from '@/app/types';
import { NextRequest, NextResponse } from 'next/server';
import { ServiceType } from '@/app/enums';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const offset = parseInt(searchParams.get('offset') || '0', 10);
  const limit = parseInt(searchParams.get('limit') || '4', 10);
  const mealType = searchParams.get('mealType');

  if (isNaN(offset) || isNaN(limit) || offset < 0 || limit <= 0) {
    return NextResponse.json({ error: 'Invalid offset or limit' }, { status: 400 });
  }

  const validMealTypes = Object.values(ServiceType);
  const shouldFilterByMealType = mealType && validMealTypes.includes(mealType as ServiceType);

  await new Promise(resolve => setTimeout(resolve, 300));

  let filteredItems = allFoodItems;

  if (shouldFilterByMealType) {
    filteredItems = filteredItems.filter(item => item.mealType === mealType);
  }

  const items = filteredItems.slice(offset, offset + limit);

  return NextResponse.json<IApiResponse<IFoodItem>>({
    items,
    total: filteredItems.length,
    offset,
    limit,
  });
}
