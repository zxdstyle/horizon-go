import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRoutes } from '@/api';

interface State {
	routes: RouteItem[];
	loaded: boolean;
}

const initState: State = {
	routes: [],
	loaded: false,
};

export const loadRoutes = createAsyncThunk('auth/loadRoutes', async () => {
	const resp = await getRoutes();
	return resp;
});

const stateSlice = createSlice({
	name: 'route',
	initialState: initState,
	reducers: {
		resetRoutes(state) {
			state.routes = [];
			state.loaded = false;
		},
	},
	extraReducers: builder => {
		builder.addCase(loadRoutes.fulfilled, (state, { payload }) => {
			state.routes = payload || [];
			state.loaded = true;
		});
	},
});

export const { resetRoutes } = stateSlice.actions;

export default stateSlice.reducer;
