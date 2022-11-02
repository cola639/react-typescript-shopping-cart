import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ILoginRequest, login } from '../../api/user'
import { IUserModel } from '../models/UserModel'

export interface IUserSlice {
  userInfo: IUserModel
}

const initialState: IUserSlice = {
  userInfo: { username: '', avatar: '', role: '', token: '' }
}

export const doLogin = createAsyncThunk(
  'auth/doLogin',
  async (loginPayload: ILoginRequest, { dispatch }) =>
    login(loginPayload).then(res => {
      return res
    })
)

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.userInfo = action.payload
    })
  }
})

export default userSlice.reducer
