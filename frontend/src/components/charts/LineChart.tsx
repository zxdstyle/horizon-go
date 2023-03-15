import React from 'react';
import ReactApexChart, { Props } from 'react-apexcharts';

interface LineChartProps extends Props {
	children?: React.ReactNode;
}

const LineChart: React.FC<LineChartProps> = ({ children, chartOptions, chartData }) => {
	return <ReactApexChart options={chartOptions} series={chartData} type="line" width="100%" height="100%" />;
};

export default LineChart;
