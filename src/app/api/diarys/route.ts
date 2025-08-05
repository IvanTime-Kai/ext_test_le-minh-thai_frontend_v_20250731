import { allDiaryItems } from '@/app/constants';
import { IApiResponse, IDiary } from '@/app/types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const offset = parseInt(searchParams.get('offset') || '0', 10);
  const limit = parseInt(searchParams.get('limit') || '4', 10);

  if (isNaN(offset) || isNaN(limit) || offset < 0 || limit <= 0) {
    return NextResponse.json({ error: 'Invalid offset or limit' }, { status: 400 });
  }

  await new Promise(resolve => setTimeout(resolve, 300));

  const items = allDiaryItems.slice(offset, offset + limit);

  return NextResponse.json<IApiResponse<IDiary>>({
    items,
    total: allDiaryItems.length,
    offset,
    limit,
  });
}
