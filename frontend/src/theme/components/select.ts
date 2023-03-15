import { selectAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

export default defineMultiStyleConfig({
	baseStyle: {
		field: {
			fontWeight: 400,
		},
	},

	variants: {
		main: (props: StyleFunctionProps) => ({
			field: {
				bg: mode('transparent', 'navy.800')(props),
				border: '1px solid',
				color: 'secondaryGray.600',
				borderColor: mode('secondaryGray.100', 'whiteAlpha.100')(props),
				borderRadius: '16px',
				_placeholder: { color: 'secondaryGray.600' },
			},
			icon: {
				color: 'secondaryGray.600',
			},
		}),
		mini: (props: StyleFunctionProps) => ({
			field: {
				bg: mode('transparent', 'navy.800')(props),
				border: '0px solid transparent',
				fontSize: '0px',
				p: '10px',
				_placeholder: { color: 'secondaryGray.600' },
			},
			icon: {
				color: 'secondaryGray.600',
			},
		}),
		subtle: (props: StyleFunctionProps) => ({
			box: {
				width: 'unset',
			},
			field: {
				bg: 'transparent',
				border: '0px solid',
				color: 'secondaryGray.600',
				borderColor: 'transparent',
				width: 'max-content',
				_placeholder: { color: 'secondaryGray.600' },
			},
			icon: {
				color: 'secondaryGray.600',
			},
		}),
		transparent: (props: StyleFunctionProps) => ({
			field: {
				bg: 'transparent',
				border: '0px solid',
				width: 'min-content',
				color: mode('secondaryGray.600', 'secondaryGray.600')(props),
				borderColor: 'transparent',
				padding: '0px',
				paddingLeft: '8px',
				paddingRight: '20px',
				fontWeight: '700',
				fontSize: '14px',
				_placeholder: { color: 'secondaryGray.600' },
			},
			icon: {
				transform: 'none !important',
				position: 'unset !important',
				width: 'unset',
				color: 'secondaryGray.600',
				right: '0px',
			},
		}),
		auth: (props: StyleFunctionProps) => ({
			field: {
				bg: 'transparent',
				border: '1px solid',

				borderColor: 'secondaryGray.100',
				borderRadius: '16px',
				_placeholder: { color: 'secondaryGray.600' },
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
