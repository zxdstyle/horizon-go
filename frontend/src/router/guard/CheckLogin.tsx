import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from '@/store';
import { logout } from '@/store/modules/auth';

interface CheckLoginProps {
	children?: React.ReactNode;
}

const CheckLogin: React.FC<CheckLoginProps> = ({ children }) => {
	// * 判断是否有Token
	const { token } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	if (!token) {
		dispatch(logout());

		return <Navigate to="/login" replace />;
	}

	return <>{children}</>;
};

export default CheckLogin;
