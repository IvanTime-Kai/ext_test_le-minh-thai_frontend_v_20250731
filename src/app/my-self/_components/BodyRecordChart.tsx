'use client';

import { LineChart, Line, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { FilterKey, IFilterData } from '@/app/types';
import { dataByFilter, timeFilters } from '@/app/constants';

export default function BodyRecordChart() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('year');
  const chartData = dataByFilter[activeFilter];

  const CustomTick = (props: any) => {
    const { x, y, payload } = props;

    const value: string = payload.value || '';
    const match = value.match(/^(\d+)(.+)?$/);

    const numberPart = match?.[1] || value;
    const textPart = match?.[2] || '';

    return (
      <g transform={`translate(${x},${y})`}>
        <text textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="16" fill="#ffffff">
            {numberPart}
          </tspan>
          <tspan fontSize="10" fill="#ffffff">
            {textPart}
          </tspan>
        </text>
      </g>
    );
  };

  return (
    <div className="w-full bg-accent-foreground text-primary-foreground p-4 md:p-6">
      <div className="flex items-center gap-8">
        <div>
          <h2 className="text-[15px] leading-[18px] font-normal text-primary-foreground">
            BODY <br /> RECORD
          </h2>
        </div>
        <div className="text-[22px] leading-[27px] font-normal">2021.05.21</div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 40,
              left: 20,
              bottom: 40,
            }}
          >
            <CartesianGrid vertical={true} horizontal={false} stroke="gray" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              stroke="#ffffff"
              interval={0}
              tick={<CustomTick />}
            />
            <Line
              type="monotone"
              dataKey="value1"
              stroke="#8FE9D0"
              strokeWidth={2}
              dot={{ r: 4, fill: '#8FE9D0' }}
              activeDot={{
                r: 6,
                fill: '#8FE9D0',
                stroke: '#8FE9D0',
                strokeWidth: 2,
              }}
            />
            <Line
              type="monotone"
              dataKey="value2"
              stroke="#FFCC21"
              strokeWidth={2}
              dot={{ r: 4, fill: '#FFCC21' }}
              activeDot={{
                r: 6,
                fill: '#FFCC21',
                stroke: '#FFCC21',
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-4 mt-0 md:mt-4">
        {timeFilters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              filter.id === activeFilter
                ? 'bg-primary-300 text-primary-foreground'
                : 'bg-primary-foreground text-primary-300'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
