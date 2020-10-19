import axios from 'axios'

export const baseUrl = 'https://foyez-creative-agency.herokuapp.com/api'

const getReviews = () => {
  const request = axios.get(`${baseUrl}/reviews`)
  return request.then((res) => res.data)
}

const getServices = () => {
  const request = axios.get(`${baseUrl}/services`)
  return request.then((res) => res.data)
}

const getOrders = () => {
  const request = axios.get(`${baseUrl}/orders`)
  return request.then((res) => res.data)
}

const updateOrderStatus = (orderId, newObj) => {
  const request = axios.put(`${baseUrl}/orders/${orderId}`, newObj)
  return request.then((res) => res.data)
}

const getOrdersByEmail = (email) => {
  const request = axios.get(`${baseUrl}/orders?email=${email}`)
  return request.then((res) => res.data)
}

const createOrder = (newObj) => {
  const request = axios.post(`${baseUrl}/orders`, newObj)
  return request.then((res) => res.data)
}

const createReview = (newObj) => {
  const request = axios.post(`${baseUrl}/reviews`, newObj)
  return request.then((res) => res.data)
}

const createService = (newObj) => {
  const request = axios.post(`${baseUrl}/services`, newObj)
  return request.then((res) => res.data)
}

const checkAdmin = (newObj) => {
  const request = axios.post(`${baseUrl}/isAdmin`, newObj)
  return request.then((res) => res.data)
}

const createAdmin = (newObj) => {
  const request = axios.post(`${baseUrl}/admins`, newObj)
  return request.then((res) => res.data)
}

export default {
  getReviews,
  getServices,
  createOrder,
  updateOrderStatus,
  getOrders,
  createReview,
  getOrdersByEmail,
  createService,
  checkAdmin,
  createAdmin,
}
