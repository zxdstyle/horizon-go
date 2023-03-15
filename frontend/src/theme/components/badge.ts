import { defineStyle } from '@chakra-ui/styled-system';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export default defineStyle({
	baseStyle: {
		borderRadius: '10px',
		lineHeight: '100%',
		padding: '7px',
		paddingLeft: '12px',
		paddingRight: '12px',
	},
	variants: {
		outline: () => ({
			borderRadius: '16px',
		}),
		brand: (props: StyleFunctionProps) => ({
			bg: mode('brand.500', 'brand.400')(props),
			color: 'white',
			_focus: {
				bg: mode('brand.500', 'brand.400')(props),
			},
			_active: {
				bg: mode('brand.500', 'brand.400')(props),
			},
			_hover: {
				bg: mode('brand.600', 'brand.400')(props),
			},
		}),
	},
});
