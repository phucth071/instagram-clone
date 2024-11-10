import React from 'react'
import { VStack, Box, Button } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import loginHandler from '../../utils/loginHandler'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import PasswordInput from './UI/PasswordInput'
import TextInput from './UI/TextInput'
import { validators } from '../../utils/validators'
import { useMutation } from 'react-query'
import { loginUser } from '../../services/authAPI'

const LoginForm = () => {
  const authCtx = useAuth()

  const { register, handleSubmit, formState: { errors: formErrors } } = useForm()

  const location = useLocation()
  const navigate = useNavigate()

  // Save the page they tried to visit when they were redirected
  // to the login page to redirect them after login
  const from = location.state?.from?.pathname || '/'

  const onDemoUser = () => {
    mutate({
      // Credentials for demo user
      username: 'johndoe',
      password: 'demo'
    })
  }
  const onSubmit = (data) => {
    mutate(data)
  }

  const { mutate, isLoading } = useMutation(loginUser, {
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      loginHandler(data, navigate, from, authCtx)
    }
  })

  return (
    <>
      <Box as='form' onSubmit={handleSubmit(onSubmit)} width='100%'>
        <VStack gap={2} marginBottom={3}>
          <TextInput fieldName='username' register={register} validators={validators.username} errors={formErrors.username} autoFocus />
          <PasswordInput register={register} validators={validators.password} errors={formErrors.password} />
          <Button isLoading={isLoading} type='submit' w='100%'>Log In</Button>
        </VStack>
      </Box>

      <Button w='100%' onClick={onDemoUser} variant='ghost' size='sm'>Log In as Demo User</Button>
    </>

  )
}

export default LoginForm
