import request from '../utils/request'

export interface ILoginRequest {
  name: string
  password: string
}

export interface ILoginResonse {
  token: string
  role: string
  avatar: string
  username: string
}

export interface IUserRequest {
  email: string
  password: string
}

export interface IUserResonse {
  userName: string
  avatar: string
}

export const login = (loginPayload: ILoginRequest): Promise<ILoginResonse> =>
  request.post<ILoginResonse>('/users/login', { ...loginPayload }).then(({ data }) => {
    return data
  })

export const getUserData = (payload: IUserRequest): Promise<IUserResonse> =>
  request.post<IUserResonse>('/users/info', payload).then(({ data }) => {
    return data
  })
