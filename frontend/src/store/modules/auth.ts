import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from '@/store';
import { resetRoutes } from './route';

interface State {
	token: string;
}

const initState: State = {
	token: '',
};

export const logout = createAsyncThunk('auth/logout', async () => {
	const dispatch = useDispatch();
	dispatch(resetRoutes());
});

const stateSlice = createSlice({
	name: 'auth',
	initialState: initState,
	reducers: {
		login(state, { payload }) {
			state.token = payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(logout.fulfilled, state => {
			state.token = '';
		});
	},
});
export const { login } = stateSlice.actions;

export default stateSlice.reducer;
