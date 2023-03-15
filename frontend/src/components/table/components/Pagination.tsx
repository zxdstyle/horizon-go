import React, { useMemo } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import { Select } from '@/components/select';

interface PaginationProps {
	children?: React.ReactNode;
	getCanPreviousPage: Func<boolean>;
	setPageSize: (pageSize: number) => void;
	pageSizes: Array<number>;
	pageSize: number;
}

function Pagination({ pageSizes, pageSize, getCanPreviousPage }: PaginationProps) {
	const pageSizesOptions = useMemo<Array<SelectOption>>(() => {
		return pageSizes.map(item => {
			return { value: item, label: `${item}/页` };
		});
	}, [pageSizes]);

	return (
		<Flex>
			<Box as="ul" listStyleType="none" display="flex" alignItems="center" gap={3}>
				<ul>
					<li></li>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>
				<Box>
					<Button disabled={!getCanPreviousPage()} size="sm" borderRadius="sm">
						pre
					</Button>
				</Box>
				<Box>2</Box>
				<Box>3</Box>
				<Box>4</Box>
				<Select options={pageSizesOptions} defaultValue={pageSize} />
			</Box>
		</Flex>
	);
}

Pagination.defaultProps = {
	pageSize: 15,
	pageSizes: [15, 25, 50, 100],
};

export default Pagination;
