import { extendTheme, withDefaultVariant } from '@chakra-ui/react';
import { breakpoints } from './foundations/breakpoints';
import { globalStyles } from './styles';

import components from './components';

export default extendTheme(
	{
		components,
	},
	{ breakpoints }, // Breakpoints
	globalStyles,
	withDefaultVariant({ variant: 'brand', components: ['Button'] })
);
