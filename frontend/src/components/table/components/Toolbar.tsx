import React, { useContext } from 'react';
import { Box, Button } from '@chakra-ui/react';
import QuickSearch from '@/components/table/components/QuickSearch';
import { tableContext } from '@/components/table/context';
import SvgIcon from '@/components/common/icon/SvgIcon';

function RefreshButton() {
	const ctx = useContext(tableContext);
	return (
		<Button borderRadius={8} onClick={ctx?.refresh} leftIcon={<SvgIcon icon="mdi:reload" />}>
			Refresh
		</Button>
	);
}

const Toolbar: React.FC<ToolbarProps> = ({ quickSearch, customTool }) => {
	return (
		<Box display="flex" justifyContent="space-between" borderBottom={1} borderStyle="solid" borderColor="gray.200" py={3} mb={3}>
			<QuickSearch />
			<Box display="flex" alignItems="center" gap={2}>
				<RefreshButton />
				{customTool}
			</Box>
		</Box>
	);
};

export default Toolbar;
