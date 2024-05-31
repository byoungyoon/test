'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

import { JISOO } from '@/model/Blog';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Props {
  jisooData: {
    blog_score: number;
    category: string;
  }[];
}

const options = {
  labels: ['최적', '준최', '저품'],
  colors: ['#23d160', '#edb104', '#d43712'],
  dataLabels: {
    dropShadow: {
      enabled: false,
    },
    style: {
      colors: ['#000', '#000', '#000'],
      fontWeight: 400,
      fontSize: '10px',
    },
  },
  plotOptions: {
    pie: {
      expandOnClick: true,
      donut: {
        size: '50%',
      },
    },
  },
};

const Donut = ({ jisooData }: Props) => {
  const [series, setSeries] = useState([0, 0, 0]);

  useEffect(() => {
    const total = jisooData.length;

    const newSeries = [0, 0, 0];
    for (let i = 0; i < total; i++) {
      if (jisooData[i].category.slice(0, -1) === JISOO.BEST) {
        newSeries[0] += 1;
      } else if (jisooData[i].category.slice(0, -1) === JISOO.HIGH) {
        newSeries[1] += 1;
      } else {
        newSeries[2] += 1;
      }
    }
    setSeries(newSeries);
  }, [jisooData]);

  return (
    <ApexCharts
      options={options}
      series={series}
      type='donut'
      width={280}
      height={200}
    />
  );
};

export default React.memo(Donut);
