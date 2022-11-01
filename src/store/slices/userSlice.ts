import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ILoginRequest, login } from '../../api/user'

export interface AuthSlice {
  token: string | null
}

const initialState: AuthSlice = {
  token: ''
}

export const doLogin = createAsyncThunk(
  'auth/doLogin',
  async (loginPayload: ILoginRequest, { dispatch }) =>
    login(loginPayload).then(res => {
      return res.token
    })
)

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.token = action.payload
    })
  }
})

export default userSlice.reducer
