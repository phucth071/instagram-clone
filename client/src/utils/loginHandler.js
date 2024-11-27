const loginHandler = (response, navigate, from, authCtx) => {
  const expirationTime = new Date(
    new Date().getTime() + response.data.expiresIn * 1000
  )
  authCtx.login(response.data.token, expirationTime.toISOString(), response.data.user)
  navigate(from, { replace: true })
}

export default loginHandler
