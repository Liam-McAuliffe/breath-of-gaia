import React from 'react';

import './chart.css';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  Legend,
} from 'recharts';

const Chart = ({ electricMonthlyGraphData, carbonMonthlyGraphData }) => {
  const dataMap = {};

  electricMonthlyGraphData.forEach((item) => {
    const month = item.x;
    dataMap[month] = { month, electricUsage: item.y };
  });

  carbonMonthlyGraphData.forEach((item) => {
    const month = item.month;
    if (dataMap[month]) {
      dataMap[month].carbonEmission = item.carbon_lb;
    } else {
      dataMap[month] = { month, carbonEmission: item.carbon_lb };
    }
  });

  const mergedData = Object.values(dataMap);

  return (
    <div className="chart-wrapper">
      <h2>Estimated Monthly Energy & Emissions</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={mergedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="electricUsage"
            stroke="#8884d8"
            strokeWidth={2}
            name="Electric Usage"
          />
          <Line
            type="monotone"
            dataKey="carbonEmission"
            stroke="#82ca9d"
            strokeWidth={2}
            name="Carbon Emission"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
