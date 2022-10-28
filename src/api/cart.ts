import request from '../utils/request'

export const getProducts = () => request.get('/product/productList').then(({ data }) => data)
