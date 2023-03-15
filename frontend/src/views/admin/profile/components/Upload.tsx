import React from 'react';

// Chakra imports
import { Box, Button, Flex, StyleProps, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { Card } from '@chakra-ui/react';

import Dropzone from '@/views/admin/profile/components/Dropzone';
import SvgIcon from '@/components/common/icon/SvgIcon';

interface UploadProps extends StyleProps {
	children?: React.ReactNode;
	used?: number;
	total?: number;
}

const Upload: React.FC<UploadProps> = ({ children, used, total, ...rest }) => {
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const brandColor = useColorModeValue('brand.500', 'white');
	const textColorSecondary = 'gray.400';
	return (
		<Card {...rest} mb="20px" textAlign="center" p="20px">
			<Flex h="100%" direction={{ base: 'column', '2xl': 'row' }}>
				<Dropzone
					w={{ base: '100%', '2xl': '268px' }}
					me="36px"
					maxH={{ base: '60%', lg: '50%', '2xl': '100%' }}
					minH={{ base: '60%', lg: '50%', '2xl': '100%' }}
					content={
						<Box>
							<SvgIcon icon="ic:outline-file-upload" w="120px" h="120px" color={brandColor} />
							<Flex justify="center" mx="auto" mb="12px">
								<Text fontSize="xl" fontWeight="700" color={brandColor}>
									Upload Files
								</Text>
							</Flex>
							<Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
								PNG, JPG and GIF files are allowed
							</Text>
						</Box>
					}
				/>
				<Flex direction="column" pe="44px">
					<Text color={textColorPrimary} fontWeight="bold" textAlign="start" fontSize="2xl" mt={{ base: '20px', '2xl': '50px' }}>
						Complete your profile
					</Text>
					<Text color={textColorSecondary} fontSize="md" my={{ base: 'auto', '2xl': '10px' }} mx="auto" textAlign="start">
						Stay on the pulse of distributed projects with an anline whiteboard to plan, coordinate and discuss
					</Text>
					<Flex w="100%">
						<Button me="100%" mb="50px" w="140px" minW="140px" mt={{ base: '20px', '2xl': 'auto' }} variant="brand" fontWeight="500">
							Publish now
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</Card>
	);
};

export default Upload;
