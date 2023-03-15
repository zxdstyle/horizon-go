declare namespace Api {
	interface Response<T = any> {
		code: number;
		message: string;
		data: T;
	}
}

type Func<T = void> = () => T;
