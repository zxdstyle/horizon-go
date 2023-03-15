import React from 'react';
import ReactApexChart, { Props } from 'react-apexcharts';

interface LineAreaChartProps extends Props {
	children?: React.ReactNode;
}

const LineAreaChart: React.FC<LineAreaChartProps> = ({ children, chartOptions, chartData }) => {
	return <ReactApexChart options={chartOptions} series={chartData} type="area" width="100%" height="100%" />;
};

export default LineAreaChart;
