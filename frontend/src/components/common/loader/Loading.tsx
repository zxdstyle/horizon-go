import React from 'react';
import styles from './style.module.css';
import { Box, Text } from '@chakra-ui/react';

interface LoadingProps {
	children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ children }) => {
	return (
		<Box display="flex" alignItems="center" flexDir="column" justifyContent="center" w="full" h="full" minH="100vh">
			<Box w={12} h={12} className={styles.loader}></Box>
			<Text color="secondaryGray.500" mt={6}>
				Loading...
			</Text>
		</Box>
	);
};

export default Loading;
