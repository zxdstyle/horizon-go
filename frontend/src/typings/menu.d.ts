declare namespace Menu {
	interface Item {
		key: string;
		label: string;
		routeName: string;
		routePath: string;
		icon?: React.ReactNode;
		children?: Item[];
	}
}
