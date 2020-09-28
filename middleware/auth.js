import jwt from 'jsonwebtoken'

const Expired = (token) => {
  const payload = jwt.decode(token)
  if (+payload.exp > new Date() / 1000) {
    return true
  } else {
    localStorage.removeItem('auth-token')
    return false
  }
}

const authenticate = (context) => {
  const oldToken = localStorage.getItem('auth-token')
  if (oldToken && Expired(oldToken)) {
    context.$axios.setToken(oldToken, 'Bearer')
    return true
  } else {
    context.redirect('/Login')
  }
}

export default function (context) {
  return authenticate(context)
}
