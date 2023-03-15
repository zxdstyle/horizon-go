import React from 'react';
import { IconButton, Input, InputGroup, InputGroupProps, InputLeftElement, useColorModeValue } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface SearchBarProps extends InputGroupProps {
	children?: React.ReactNode;
}

const SearchBar: React.FC<SearchBarProps> = ({ children, variant, background, placeholder, borderRadius, ...rest }) => {
	// Chakra Color Mode
	const searchIconColor = useColorModeValue('gray.700', 'white');
	const inputBg = useColorModeValue('secondaryGray.300', 'navy.900');
	const inputText = useColorModeValue('gray.700', 'gray.100');
	return (
		<InputGroup w={{ base: '100%', md: '200px' }} {...rest}>
			<InputLeftElement>
				<IconButton
					bg="inherit"
					borderRadius="inherit"
					_active={{
						bg: 'inherit',
						transform: 'none',
						borderColor: 'transparent',
					}}
					_focus={{
						boxShadow: 'none',
					}}
					icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
					aria-label=""
				/>
			</InputLeftElement>
			<Input
				variant="search"
				fontSize="sm"
				bg={background ? background : inputBg}
				color={inputText}
				fontWeight="500"
				_placeholder={{ color: 'gray.400', fontSize: '14px' }}
				borderRadius={borderRadius ? borderRadius : '30px'}
				placeholder={placeholder ? placeholder : 'Search...'}
			/>
		</InputGroup>
	);
};

export default SearchBar;
