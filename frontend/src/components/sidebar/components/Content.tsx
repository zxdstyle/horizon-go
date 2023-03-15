import React from 'react';

// chakra imports
import { Box, Flex, Stack } from '@chakra-ui/react';

//   Custom components
import Brand from '@/layouts/admin/components/Brand';
import Links from '@/layouts/admin/components/Links';
import SidebarCard from '@/layouts/admin/components/SidebarCard';

interface ContentProps {
	children?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
	return (
		<Flex direction="column" height="100%" pt="25px" borderRadius="30px">
			<Brand />
			<Stack direction="column" mb="auto" mt="8px">
				<Box ps="20px" pe={{ md: '16px', '2xl': '1px' }}>
					<Links />
				</Box>
			</Stack>

			<Box ps="20px" pe={{ md: '16px', '2xl': '0px' }} mt="60px" mb="40px" borderRadius="30px">
				<SidebarCard />
			</Box>
		</Flex>
	);
};

export default Content;
