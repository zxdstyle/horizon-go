import React from 'react';
import Chart, { Props } from 'react-apexcharts';

interface BarChartProps extends Props {
	children?: React.ReactNode;
}

const BarChart: React.FC<BarChartProps> = ({ children, chartOptions, chartData }) => {
	return <Chart options={chartOptions} series={chartData} type="bar" width="100%" height="100%" />;
};

export default BarChart;
