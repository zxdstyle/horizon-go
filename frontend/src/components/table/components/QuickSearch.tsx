import React from 'react';
import { Box, Input } from '@chakra-ui/react';

interface QuickSearchProps {
	children?: React.ReactNode;
}

const QuickSearch: React.FC<QuickSearchProps> = ({ children }) => {
	return (
		<Box>
			<Input placeholder="Search something" />
		</Box>
	);
};

export default QuickSearch;
