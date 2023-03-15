// Chakra imports
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from '@/components/footer/FooterAuth';
import FixedPlugin from '@/components/fixedPlugin/FixedPlugin';

interface DefaultProps {
	children?: React.ReactNode;
	illustrationBackground: string;
	image: any;
}

const Default: React.FC<DefaultProps> = ({ children, illustrationBackground }) => {
	return (
		<Flex position="relative" h="max-content">
			<Flex
				h={{ sm: 'initial', md: 'unset', lg: '100vh', xl: '97vh' }}
				w="100%"
				maxW={{ md: '66%', lg: '1313px' }}
				mx="auto"
				pt={{ sm: '50px', md: '0px' }}
				px={{ lg: '30px', xl: '0px' }}
				ps={{ xl: '70px' }}
				justifyContent="start"
				direction="column"
			>
				{/*<Link as={RouterLink} to="/" mt={12}>*/}
				{/*	<Flex align="center" ps={{ base: '25px', lg: '0px' }} pt={{ lg: '0px', xl: '0px' }} w="fit-content">*/}
				{/*		<Icon as={FaChevronLeft} me="12px" h="13px" w="8px" color="secondaryGray.600" />*/}
				{/*		<Text ms="0px" fontSize="sm" color="secondaryGray.600">*/}
				{/*			Back to Simmmple*/}
				{/*		</Text>*/}
				{/*	</Flex>*/}
				{/*</Link>*/}
				{children}
				<Box display={{ base: 'none', md: 'block' }} h="100%" minH="100vh" w={{ lg: '50vw', '2xl': '44vw' }} position="absolute" right="0px">
					<Flex bg={`url(${illustrationBackground})`} justify="center" align="end" w="100%" h="100%" bgSize="cover" bgPosition="50%" position="absolute" borderBottomLeftRadius={{ lg: '120px', xl: '200px' }}></Flex>
				</Box>
				<Footer />
			</Flex>
			<FixedPlugin />
		</Flex>
	);
};

export default Default;