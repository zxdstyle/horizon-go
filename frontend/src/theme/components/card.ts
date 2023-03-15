import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
	container: {
		p: 6,
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		position: 'relative',
		borderRadius: '20px',
		minWidth: '0px',
		wordWrap: 'break-word',
		bg: 'white',
		backgroundClip: 'border-box',
		boxShadow: '14px 17px 40px 4px rgb(112 144 176 / 18%)',
		_dark: {
			bg: 'navy.800',
			boxShadow: '14px 17px 40px 4px rgb(112 144 176 / 6%)',
		},
	},
});

export default defineMultiStyleConfig({
	baseStyle,
});
