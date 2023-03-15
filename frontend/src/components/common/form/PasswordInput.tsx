import React, { useState, forwardRef } from 'react';
import { Icon, Input, InputGroup, InputRightElement, InputProps } from '@chakra-ui/react';
import { RiEyeCloseLine } from 'react-icons/ri';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

interface PasswordInputProps extends InputProps {
	// 是否允许查看密码原文
	allowShowPassword?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ allowShowPassword, ...rest }, ref) => {
	const textColorSecondary = 'gray.400';
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	return (
		<InputGroup size="md">
			{JSON.stringify(rest)}
			<Input type={show ? 'text' : 'password'} {...rest} ref={ref} />
			{allowShowPassword && (
				<InputRightElement display="flex" alignItems="center" mt="4px">
					<Icon color={textColorSecondary} _hover={{ cursor: 'pointer' }} as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye} onClick={handleClick} />
				</InputRightElement>
			)}
		</InputGroup>
	);
});

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
