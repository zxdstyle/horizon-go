import toastTheme from '@/theme/foundations/toast';

import { createStandaloneToast, UseToastOptions } from '@chakra-ui/react';

const { toast } = createStandaloneToast(toastTheme);

export default function useToast(standalone?: boolean) {
	const createToast = (cfg: UseToastOptions) => {
		const options: UseToastOptions = { position: 'top-right', ...cfg };

		return toast(options);
	};

	const success = (title: string) => {
		return createToast({ title, status: 'success' });
	};

	const error = (title: string) => {
		return createToast({ title, status: 'error' });
	};

	return { success, error };
}
