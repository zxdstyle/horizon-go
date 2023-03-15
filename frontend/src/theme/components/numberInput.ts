import { numberInputAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';

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
				bg: 'transparent',
				border: '1px solid',

				borderColor: 'secondaryGray.100',
				borderRadius: '16px',
				_placeholder: { color: 'secondaryGray.600' },
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
