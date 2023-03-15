import React from 'react';
import { Select, SelectComponentsConfig } from 'chakra-react-select';

const customComponents: SelectComponentsConfig<any, any, any> = {
	DropdownIndicator: null,
};

export default function Index({ options, defaultValue, ...rest }: SelectProps) {
	const defaultObjectValue = options.find(item => item.value === defaultValue);

	return <Select components={customComponents} defaultValue={defaultObjectValue} {...rest} size="sm" />;
}
