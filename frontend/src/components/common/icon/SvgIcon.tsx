import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';
import { Icon as IconifyIcon } from '@iconify/react';

interface SvgIconProps extends IconProps {
	icon: string;
	size?: number | string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ icon, size, ...rest }) => {
	const sizes = size ? { w: size, h: size } : {};
	return <Icon as={IconifyIcon} icon={icon} {...sizes} {...rest}></Icon>;
};

export default SvgIcon;
