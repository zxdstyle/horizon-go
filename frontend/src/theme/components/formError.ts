import { formErrorAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(formErrorAnatomy.keys);

const baseStyleText = defineStyle({
	fontWeight: 'medium',
});

const baseStyle = definePartsStyle({
	text: baseStyleText,
});

export default defineMultiStyleConfig({
	baseStyle,
});
