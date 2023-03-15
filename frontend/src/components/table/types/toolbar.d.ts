interface ToolbarProps extends ToolbarOption {
	onRefresh?: Func;
}

interface ToolbarOption {
	quickSearch?: boolean;
	customTool?: React.ReactNode | React.ReactNode[];
}
