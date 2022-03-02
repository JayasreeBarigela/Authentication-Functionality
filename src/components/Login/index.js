// Write your JS code here

import Cookies from 'js-cookie'

const Login = props => {
  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    const {history} = props
    history.replace('/')
  }

  const onClickLogin = () => {
    Cookies.set('jwt_token', 'loggedIn', {expires: 7})
    const {history} = props
    history.replace('/')
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button type="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
