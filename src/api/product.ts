import request from '../utils/request'

export const getProducts = () => request.get('/product/productList').then(({ data }) => data)

export const getDetail = (query: string) =>
  request.get(`/product/${query}`).then(({ data }) => data)
