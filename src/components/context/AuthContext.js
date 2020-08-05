import createDataContext from './createDataContext';
import reviewApi from '../api/reviewApi';

const authReducer = (state, action) => {
	switch(action.type) {
		case 'signin': 
			return { errMessage: '', token: action.payload, role: "author" }; 
		case 'add_err': 
			return { ...state, errMessage: action.payload };
		case 'clear_err':
			return { ...state, errMessage: '' }; 
		case 'signout':
			return { token: null, errMessage: '', role: "visitor" };
		default: 
			return state;
	};
};

const tryAutoSignIn = dispatch => async () => {
	const token = localStorage.getItem('token');
	if(token) {
		dispatch({ type: 'signin', payload: token });
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

const signup = (dispatch) => async ({ email, password }) => {
	if(!email || !password)
	{
		return dispatch({ type: 'add_err', payload: "Please fill both fields!"});
	}
	try {
		const response = await reviewApi.post('/signup', { email, password });
		await localStorage.setItem('token', response.data.token);
		dispatch({ type: 'signin', payload: response.data.token });
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
		await localStorage.setItem('token',response.data.token);
		dispatch({ type: 'signin', payload: response.data.token });
	} catch (err) {
		dispatch({ type: 'add_err', payload: "Something went wrong with Sign In!"});
	}
};

const signout = (dispatch) => async () => {
	try {
		await localStorage.removeItem('token');
		dispatch({ type: 'signout' });
	} catch(err) {
		console.log(err);
	}
};
export const { Context, Provider } = createDataContext(
	authReducer,
	{ signup, signin, signout, clearErr, tryAutoSignIn },
	{ token: null, errMessage: '',role: "visitor" }
);