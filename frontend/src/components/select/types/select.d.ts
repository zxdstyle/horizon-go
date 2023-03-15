interface SelectProps {
	defaultValue: string | number;
	options: Array<SelectOption>;
}

interface SelectOption {
	value: string | number;
	label: string;
}
