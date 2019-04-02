import axios from 'axios';
import { AUTH_USER } from './types';

export const signup = (formProps) => async dispatch => {
    const response = await axios.post('http://localhost:3090/signup', formProps)
    console.log(response);
};