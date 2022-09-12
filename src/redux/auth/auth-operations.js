import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/singup', credentials);
      token.set(data.token);
      toast.success('You successfully signed up!');
      return data;
    } catch (error) {
      toast.error('Sign up failed. Check your data!');
      return thunkAPI.rejectWithValue();
    }
  }
);
/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    toast.success('You successfully logged in!');
    return data;
  } catch (error) {
    toast.error('Log in failed. Please, sign up!');
    return thunkAPI.rejectWithValue();
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
    // toast.success('Well, see you later!');
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});
// /*
//  * GET @ /users/current
//  * headers:
//  *    Authorization: Bearer token
//  *
//  * 1. Забираем токен из стейта через getState()
//  * 2. Если токена нет, выходим не выполняя никаких операций
//  * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
//  */
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(); // TODO: Добавить обработку ошибки error.message
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
