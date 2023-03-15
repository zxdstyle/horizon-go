import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Chakra imports
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, FormErrorMessage, Heading, Input, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { PasswordInput } from '@/components/common/form';
import { HSeparator } from '@/components/separator/Separator';
import DefaultAuth from '@/layouts/auth/Default';

// Assets
import illustration from '@/assets/img/auth/auth.png';
import { useMutation } from '@tanstack/react-query';
import { loginByPwd } from '@/api/modules/system/auth';
import { useDispatch } from '@/store';
import { login } from '@/store/modules/auth';
import useToast from '@/hooks/toast';
import SvgIcon from '@/components/common/icon/SvgIcon';
import { loadRoutes } from '@/store/modules/route';

const Index: React.FC = () => {
	const textColorSecondary = 'gray.400';
	const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
	const textColorBrand = useColorModeValue('brand.500', 'white');

	const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
	const googleText = useColorModeValue('navy.700', 'white');
	const googleHover = useColorModeValue({ bg: 'gray.200' }, { bg: 'whiteAlpha.300' });
	const googleActive = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.200' });

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { success } = useToast();

	const { mutate } = useMutation<ILoginResponse, unknown, ILoginByPwd>({
		mutationFn: loginByPwd,
		onSuccess: async data => {
			console.log(data);
			dispatch(login(data.token));
			success(`Welcome back,${data.username}`);
			dispatch(loadRoutes());
			setTimeout(() => navigate('/', { replace: true }), 500);
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: { email: 'zxdstyle@foxmail.com', password: '12312312312' },
	});

	return (
		<DefaultAuth illustrationBackground={illustration} image={illustration}>
			<Flex
				maxW={{ base: '100%', md: 'max-content' }}
				w="100%"
				mx={{ base: 'auto', lg: '0px' }}
				me="auto"
				h="100%"
				alignItems="start"
				justifyContent="center"
				mb={{ base: '30px', md: '60px' }}
				px={{ base: '25px', md: '0px' }}
				mt={{ base: '40px', md: '14vh' }}
				flexDirection="column"
			>
				<Box me="auto">
					<Heading fontSize="36px" mb="10px">
						Sign In
					</Heading>
					<Text mb="36px" ms="4px" color={textColorSecondary} fontWeight="400" fontSize="md">
						Enter your email and password to sign in!
					</Text>
				</Box>
				<Flex zIndex="2" direction="column" w={{ base: '100%', md: '420px' }} maxW="100%" background="transparent" borderRadius="15px" mx={{ base: 'auto', lg: 'unset' }} me="auto" mb={{ base: '20px', md: 'auto' }}>
					<Button fontSize="sm" me="0px" mb="26px" py="15px" h="50px" borderRadius="16px" bg={googleBg} color={googleText} fontWeight="500" _hover={googleHover} _active={googleActive} _focus={googleActive}>
						<SvgIcon icon="flat-color-icons:google" w="20px" h="20px" me="10px" />
						Sign in with Google
					</Button>
					<Flex align="center" mb="25px">
						<HSeparator />
						<Text color="gray.400" mx="14px">
							or
						</Text>
						<HSeparator />
					</Flex>

					<form onSubmit={handleSubmit(values => mutate(values))}>
						<FormControl isInvalid={Boolean(errors.email)}>
							<FormLabel>Email</FormLabel>
							<Input id="email" {...register('email', { required: 'Please input email' })} variant="auth" fontSize="sm" ms={{ base: '0px', md: '0px' }} placeholder="mail@simmmple.com" fontWeight="500" size="lg" />
							<FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={Boolean(errors.password)}>
							<FormLabel>Password</FormLabel>
							<PasswordInput allowShowPassword {...register('password', { required: true })} fontSize="sm" placeholder="Min. 8 characters" size="lg" variant="auth"></PasswordInput>
						</FormControl>

						<FormControl display="flex" alignItems="center" justifyContent="space-between">
							<Box display="flex" alignItems="center">
								<Checkbox id="remember-login" colorScheme="brandScheme" me="10px" />
								<FormLabel htmlFor="remember-login" fontSize="sm" m={0}>
									Keep me logged in
								</FormLabel>
							</Box>

							<NavLink to="/auth/forgot-password">
								<Text color={textColorBrand} fontSize="sm" w="124px" fontWeight="500">
									Forgot password?
								</Text>
							</NavLink>
						</FormControl>

						<Button type="submit" variant="brand" w="full" h="50" mb="24px" isLoading={isSubmitting} mt={10}>
							Sign In
						</Button>
					</form>

					<Flex flexDirection="column" justifyContent="center" alignItems="start" maxW="100%" mt="0px">
						<Text color={textColorDetails} fontWeight="400" fontSize="14px">
							Not registered yet?
							<NavLink to="/auth/sign-up">
								<Text color={textColorBrand} as="span" ms="5px" fontWeight="500">
									Create an Account
								</Text>
							</NavLink>
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</DefaultAuth>
	);
};

export default Index;
