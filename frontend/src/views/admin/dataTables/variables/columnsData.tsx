import { ColumnDef } from '@tanstack/react-table';
import { Checkbox, Flex, Icon, Progress, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { MdCancel, MdCheckCircle, MdOutlineError } from 'react-icons/md';
import { AndroidLogo, AppleLogo, WindowsLogo } from '@/components/icons/Icons';

export const columnsDataDevelopment: ColumnDef<any, any>[] = [
	{
		header: 'NAME',
		accessorKey: 'name',
		cell: cell => {
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			return (
				<Text color={textColor} fontSize="sm" fontWeight="700">
					{cell.getValue()}
				</Text>
			);
		},
	},
	{
		header: 'TECH',
		accessorKey: 'tech',
		cell: cell => {
			const iconColor = useColorModeValue('secondaryGray.500', 'white');
			return (
				<Flex align="center">
					{cell.getValue().map((item: string, key: number) => {
						if (item === 'apple') {
							return <AppleLogo key={key} color={iconColor} me="16px" h="18px" w="15px" />;
						} else if (item === 'android') {
							return <AndroidLogo key={key} color={iconColor} me="16px" h="18px" w="16px" />;
						} else if (item === 'windows') {
							return <WindowsLogo key={key} color={iconColor} h="18px" w="19px" />;
						}
					})}
				</Flex>
			);
		},
	},
	{
		header: 'DATE',
		accessorKey: 'date',
		cell: cell => {
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			return (
				<Text color={textColor} fontSize="sm" fontWeight="700">
					{cell.getValue()}
				</Text>
			);
		},
	},
	{
		header: 'PROGRESS',
		accessorKey: 'progress',
		cell: cell => {
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			return (
				<Flex align="center">
					<Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
						{cell.getValue()}%
					</Text>
					<Progress variant="table" colorScheme="brandScheme" h="8px" w="63px" value={cell.getValue()} />
				</Flex>
			);
		},
	},
];

export const columnsDataCheck: ColumnDef<any, any>[] = [
	{
		header: 'NAME',
		accessorKey: 'name',
		cell: cell => {
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			return (
				<Flex align="center">
					<Checkbox defaultChecked={cell.getValue()[1]} colorScheme="brandScheme" me="10px" />
					<Text color={textColor} fontSize="sm" fontWeight="700">
						{cell.getValue()[0]}
					</Text>
				</Flex>
			);
		},
	},
	{
		header: 'PROGRESS',
		accessorKey: 'progress',
		cell: cell => {
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			return (
				<Flex align="center">
					<Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
						{cell.getValue()}%
					</Text>
				</Flex>
			);
		},
	},
	{
		header: 'QUANTITY',
		accessorKey: 'quantity',
		cell: cell => {
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			return (
				<Text color={textColor} fontSize="sm" fontWeight="700">
					{cell.getValue()}
				</Text>
			);
		},
	},
	{
		header: 'DATE',
		accessorKey: 'date',
		cell: cell => {
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			return (
				<Text color={textColor} fontSize="sm" fontWeight="700">
					{cell.getValue()}
				</Text>
			);
		},
	},
];

export const columnsDataColumns: ColumnDef<any, any>[] = [
	{
		header: 'NAME',
		accessorKey: 'name',
		cell: cell => {
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			return (
				<Flex align="center">
					<Text color={textColor} fontSize="sm" fontWeight="700">
						{cell.getValue()}
					</Text>
				</Flex>
			);
		},
	},
	{
		header: 'PROGRESS',
		accessorKey: 'progress',
		cell: cell => {
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			return (
				<Flex align="center">
					<Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
						{cell.getValue()}%
					</Text>
				</Flex>
			);
		},
	},
	{
		header: 'QUANTITY',
		accessorKey: 'quantity',
		cell: cell => {
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			return (
				<Text color={textColor} fontSize="sm" fontWeight="700">
					{cell.getValue()}
				</Text>
			);
		},
	},
	{
		header: 'DATE',
		accessorKey: 'date',
		cell: cell => {
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			return (
				<Text color={textColor} fontSize="sm" fontWeight="700">
					{cell.getValue()}
				</Text>
			);
		},
	},
];

export const columnsDataComplex: ColumnDef<any, any>[] = [
	{
		header: 'NAME',
		accessorKey: 'name',
		cell: cell => {
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			return (
				<Text color={textColor} fontSize="sm" fontWeight="700">
					{cell.getValue()}
				</Text>
			);
		},
	},
	{
		header: 'STATUS',
		accessorKey: 'status',
		cell: cell => {
			const value = cell.getValue();
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			const color = value === 'Approved' ? 'green.500' : value === 'Disable' ? 'red.500' : value === 'Error' ? 'orange.500' : undefined;
			const icon = value === 'Approved' ? MdCheckCircle : value === 'Disable' ? MdCancel : value === 'Error' ? MdOutlineError : undefined;
			return (
				<Flex align="center">
					<Icon w="24px" h="24px" me="5px" color={color} as={icon} />
					<Text color={textColor} fontSize="sm" fontWeight="700">
						{value}
					</Text>
				</Flex>
			);
		},
	},
	{
		header: 'DATE',
		accessorKey: 'date',
		cell: cell => {
			const textColor = useColorModeValue('secondaryGray.900', 'white');
			return (
				<Text color={textColor} fontSize="sm" fontWeight="700">
					{cell.getValue()}
				</Text>
			);
		},
	},
	{
		header: 'PROGRESS',
		accessorKey: 'progress',
		cell: cell => {
			return (
				<Flex align="center">
					<Progress variant="table" colorScheme="brandScheme" h="8px" w="108px" value={cell.getValue()} />
				</Flex>
			);
		},
	},
];
