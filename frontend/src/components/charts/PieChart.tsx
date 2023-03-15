import React from 'react';
import ReactApexChart, { Props } from 'react-apexcharts';

interface PieChartProps extends Props {
	children?: React.ReactNode;
}

const PieChart: React.FC<PieChartProps> = ({ children, chartData, chartOptions }) => {
	return <ReactApexChart options={chartOptions} series={chartData} type="pie" width="100%" height="55%" />;
};

export default PieChart;
