import { formAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(formAnatomy.keys);

const baseStyleHelperText = defineStyle({});

const baseStyle = definePartsStyle({
	container: {
		mb: '4',
	},
	helperText: baseStyleHelperText,
});

export default defineMultiStyleConfig({
	baseStyle,
});
