import { defineStyleConfig } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

export default defineStyleConfig({
	variants: {
		main: props => ({
			field: {
				bg: 'red !important',
				border: '1px solid',
				color: mode('secondaryGray.900', 'white')(props),
				borderColor: mode('secondaryGray.100', 'whiteAlpha.100')(props),
				borderRadius: '16px',
				_placeholder: { color: 'secondaryGray.600' },
			},
		}),
	},
});
