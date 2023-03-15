import { defineStyleConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export default defineStyleConfig({
	// baseStyle: {
	//   thumb: {
	//     fontWeight: 400,
	//   },
	//   track: {
	//     display: "flex",
	//   },
	// },

	variants: {
		main: (props: StyleFunctionProps) => ({
			thumb: {
				bg: mode('brand.500', 'brand.400')(props),
			},
		}),
	},
});
