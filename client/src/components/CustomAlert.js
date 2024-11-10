
import React from 'react'
import { Alert, AlertIcon, AlertDescription, AlertTitle, Box } from '@chakra-ui/react'
import Card from './Card'
const CustomAlert = ({ message, status, title }) => {
  return (
    <Card>
      <Alert fontSize='md' justifyContent='center' bgColor='transparent' marginY={6} status={status} variant='subtle'>
        <AlertIcon boxSize='30px' />
        <Box>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Box>
      </Alert>
    </Card>

  )
}

export default CustomAlert
