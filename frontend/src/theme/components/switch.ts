import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { switchAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
	thumb: {
		fontWeight: 400,
		borderRadius: '50%',
		w: '16px',
		h: '16px',
		_checked: { transform: 'translate(20px, 0px)' },
	},
	track: {
		display: 'flex',
		alignItems: 'center',
		boxSizing: 'border-box',
		w: '40px',
		h: '20px',
		p: '2px',
		ps: '2px',
		_focus: {
			boxShadow: 'none',
		},
	},
});

export default defineMultiStyleConfig({
	baseStyle,
	variants: {
		main: (props: StyleFunctionProps) => ({
			track: {
				bg: mode('gray.300', 'navy.700')(props),
			},
		}),
	},
});
