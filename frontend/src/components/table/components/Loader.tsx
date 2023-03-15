import React from 'react';
import styles from '../styles/loader.module.css';
import { Box, BoxProps } from '@chakra-ui/react';

interface LoaderProps extends BoxProps {
	children?: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ children, ...rest }) => {
	return (
		<Box {...rest} display="flex" justifyContent="center" alignItems="center" bg="whiteAlpha.800">
			<svg className={styles.pl} width="240" height="240" viewBox="0 0 240 240">
				<circle className={`${styles.ring} ${styles.ringA}`} cx="120" cy="120" r="105" fill="none" stroke="#f42f25" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
				<circle className={`${styles.ring} ${styles.ringB}`} cx="120" cy="120" r="35" fill="none" stroke="#f49725" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
				<circle className={`${styles.ring} ${styles.ringC}`} cx="85" cy="120" r="70" fill="none" stroke="#255ff4" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
				<circle className={`${styles.ring} ${styles.ringD}`} cx="155" cy="120" r="70" fill="none" stroke="#f42582" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
			</svg>
		</Box>
	);
};

export default Loader;
