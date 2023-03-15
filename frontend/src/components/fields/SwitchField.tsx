import React, { ChangeEventHandler } from 'react';

// Chakra imports
import { Box, Flex, FormLabel, StyleProps, Switch, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components

interface SwitchFieldProps extends StyleProps {
	children?: React.ReactNode;
	id: string;
	label: string;
	isChecked?: boolean;
	onChange?: ChangeEventHandler;
	desc?: string;
	textWidth?: number;
	reversed: boolean;
	fontSize: string;
}

const SwitchField: React.FC<SwitchFieldProps> = ({ children, id, label, isChecked, onChange, desc, textWidth, reversed, fontSize, ...rest }) => {
	const [checked, setChecked] = React.useState(isChecked);
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	return (
		<Box w="100%" fontWeight="500" {...rest}>
			{reversed ? (
				<Flex align="center" borderRadius="16px">
					{isChecked ? <Switch isChecked={checked} id={id} variant="main" colorScheme="brandScheme" size="md" onChange={() => setChecked(!checked)} /> : <Switch id={id} variant="main" colorScheme="brandScheme" size="md" />}
					<FormLabel ms="15px" htmlFor={id} _hover={{ cursor: 'pointer' }} mb="0px" maxW={textWidth ? textWidth : '75%'}>
						<Text color={textColorPrimary} fontSize="md" fontWeight="500">
							{label}
						</Text>
						<Text color="secondaryGray.600" fontSize={fontSize ? fontSize : 'md'}>
							{desc}
						</Text>
					</FormLabel>
				</Flex>
			) : (
				<Flex justify="space-between" align="center" borderRadius="16px">
					<FormLabel htmlFor={id} _hover={{ cursor: 'pointer' }} maxW={textWidth ? textWidth : '75%'}>
						<Text color={textColorPrimary} fontSize="md" fontWeight="500">
							{label}
						</Text>
						<Text color="secondaryGray.600" fontSize={fontSize ? fontSize : 'md'}>
							{desc}
						</Text>
					</FormLabel>
					{isChecked && onChange ? <Switch isChecked={isChecked} id={id} variant="main" colorScheme="brandScheme" size="md" onChange={onChange} /> : <Switch id={id} variant="main" colorScheme="brandScheme" size="md" />}
				</Flex>
			)}
		</Box>
	);
};

export default SwitchField;
