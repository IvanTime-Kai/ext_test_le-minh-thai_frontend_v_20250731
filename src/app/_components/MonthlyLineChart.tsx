'use client';

import { Line, LineChart, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { chartData } from '../constants';

export default function MonthlyLineChart() {

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
    <div className="col-span-7 md:col-span-4 w-full h-60 md:h-full bg-accent-foreground py-4 md:p-4">
      <ResponsiveContainer width="100%" height="100%" className="px-4">
        <LineChart data={chartData} margin={{ top: 0, right: 20, bottom: 0, left: 20 }}>
          <CartesianGrid vertical={true} horizontal={false} stroke="gray" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            className="text-caption"
            stroke="#ffffff"
            tick={<CustomTick />}
            interval={0}
          />

          <Line
            dataKey="value1"
            type="monotone"
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
            dataKey="value2"
            type="monotone"
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
  );
}
