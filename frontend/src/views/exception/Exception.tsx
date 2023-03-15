import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import RouterLink from '@/router/utils/RouterLink';

interface ExceptionProps {
	children?: React.ReactNode;
}

const Exception: React.FC<ExceptionProps> = ({ children }) => {
	// @ts-ignore
	const { statusText, message } = useRouteError() as Error;

	return (
		<div>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{statusText || message}</i>
			</p>
			<RouterLink to="/">
				<Button>回到首页</Button>
			</RouterLink>
		</div>
	);
};

export default Exception;
