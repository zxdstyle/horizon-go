import { useQuery } from '@tanstack/react-query';
import { request } from '@/utils/request';
import { useState } from 'react';

export default function useDataSource<T = any>(api: string) {
	const [data, setData] = useState<T[]>([]);

	const { isLoading, refetch } = useQuery<T[]>({
		queryKey: [`table-data-${api}`],
		queryFn: () => {
			return request.get(api);
		},
		onSuccess(data) {
			setData(data);
		},
		retry: false,
	});

	const refresh = () => refetch();

	return { isLoading, data, refresh };
}
