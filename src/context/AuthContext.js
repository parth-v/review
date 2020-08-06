import createDataContext from './createDataContext';
import reviewApi from '../api/reviewApi';

const authReducer = (state, action) => {
	switch(action.type) {
		case 'signin': 
			return { errMessage: '', token: action.payload.token, role: action.payload.user.role, user: action.payload.user }; 
		case 'add_err': 
			return { ...state, errMessage: action.payload };
		case 'clear_err':
			return { ...state, errMessage: '' }; 
		case 'signout':
			return { token: null, errMessage: '', role: "visitor", user: null };
		default: 
			return state;
	};
};

const tryAutoSignIn = dispatch => async () => {
	const token = localStorage.getItem('token');
	const user = JSON.parse(localStorage.getItem('user'));
	if(token) {
		dispatch({ type: 'signin', payload: { token, user } });
	} 
};

const requestReviewer = dispatch => async ({ paperId }) => {
	try {
		const response = await reviewApi.post('/reqrev', { paperId });
	} catch (err) {
		console.log('Error Occured!');
	}
};

const clearErr = dispatch => () => {
	dispatch({ type: 'clear_err' });
};

const signup = (dispatch) => async ({ email, password, name }) => {
	if(!email || !password || !name)
	{
		return dispatch({ type: 'add_err', payload: "Please fill all the fields!"});
	}
	try {
		const response = await reviewApi.post('/signup', { email, password, name });
		const token = response.data.token;
		const user = response.data.userDetail;
		await localStorage.setItem('token', token);
		await localStorage.setItem('user', JSON.stringify(user));
		dispatch({ type: 'signin', payload: { token, user } });
	} catch (err) {
		dispatch({ type: 'add_err', payload: 'Something went wrong with Sign Up!' });
	}
};

const signin = (dispatch) => async ({ email, password }) => {
	if(!email || !password)
	{
		return dispatch({ type: 'add_err', payload: "Please fill both fields!"});
	}
	try {
		const response = await reviewApi.post('/signin', { email, password });
		const token = response.data.token;
		const user = response.data.userDetail;
		console.log('token:', token, '  user:', user );
		await localStorage.setItem('token', token);
		await localStorage.setItem('user', JSON.stringify(user));
		dispatch({ type: 'signin', payload: { token, user } });
	} catch (err) {
		dispatch({ type: 'add_err', payload: "Something went wrong with Sign In!"});
	}
};

const signout = (dispatch) => async () => {
	try {
		await localStorage.removeItem('token');
		await localStorage.removeItem('user');
		dispatch({ type: 'signout' });
	} catch(err) {
		console.log(err);
	}
};
export const { Context, Provider } = createDataContext(
	authReducer,
	{ signup, signin, signout, clearErr, tryAutoSignIn },
	{ token: null, errMessage: '',role: "visitor", user: null }
);