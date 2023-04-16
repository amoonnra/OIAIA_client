import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie, PieConfig } from '@ant-design/plots';

export const ScoreChart = () => {
  const data = [
   {
		type: 'A (Очень полезная еда)',
		value: 32
	},
   {
		type: 'B (Не такая полезная еда)',
		value: 12
	},
   {
		type: 'C (Обычная еда)',
		value: 85
	},
   {
		type: 'D (Вредная еда)',
		value: 23
	},
   {
		type: 'E (Очень вредная еда)',
		value: 45
	},
  ];
  const config: PieConfig = {
    appendPadding: 10,
    data,
	//  color: '#000',
	theme: 'dark',
		 legend: {
		position: 'left',
		maxWidthRatio: 20,
		defaultColor: '#fff',
	 },
	 style: {
		fill: '#fff',
		accentColor: 'ButtonText',
		stroke: 'black',
	 },
	 height: 200,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,

    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <div style={{background: 'rgb(52 52 52)', padding: '0 1rem', borderRadius: '1rem'}}> <Pie {...config} /> </div>;
};
