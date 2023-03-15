import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

export default defineMultiStyleConfig({
	baseStyle: {
		field: {
			fontWeight: 500,
			borderRadius: '8px',
			_placeholder: {
				color: 'gray.400',
			},
		},
	},

	variants: {
		main: (props: StyleFunctionProps) => ({
			field: {
				bg: mode('transparent', 'navy.800')(props),
				border: '1px solid',
				color: mode('secondaryGray.900', 'white')(props),
				borderColor: mode('secondaryGray.100', 'whiteAlpha.100')(props),
				borderRadius: '16px',
				fontSize: 'sm',
				p: '20px',
				_placeholder: { color: 'secondaryGray.400' },
			},
		}),
		auth: (props: StyleFunctionProps) => ({
			field: {
				fontWeight: '500',
				color: mode('navy.700', 'white')(props),
				bg: mode('transparent', 'transparent')(props),
				border: '1px solid',
				borderColor: mode('secondaryGray.100', 'rgba(135, 140, 189, 0.3)')(props),
				borderRadius: '16px',
				_placeholder: { color: 'secondaryGray.600', fontWeight: '400' },
			},
		}),
		authSecondary: (props: StyleFunctionProps) => ({
			field: {
				bg: 'transparent',
				border: '1px solid',
				borderColor: 'secondaryGray.100',
				borderRadius: '16px',
				_placeholder: { color: 'secondaryGray.600' },
			},
		}),
		search: (props: StyleFunctionProps) => ({
			field: {
				border: 'none',
				py: '11px',
				borderRadius: 'inherit',
				_placeholder: { color: 'secondaryGray.600' },
			},
		}),
	},
});
