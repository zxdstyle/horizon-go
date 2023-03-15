import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

interface IconBoxProps extends FlexProps {
	children?: React.ReactNode;
	icon: React.ReactNode;
}

const IconBox: React.FC<IconBoxProps> = ({ children, icon, ...rest }) => {
	return (
		<Flex alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} {...rest}>
			{icon}
		</Flex>
	);
};

export default IconBox;
