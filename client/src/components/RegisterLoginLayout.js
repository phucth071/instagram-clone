import React from 'react'
import { VStack, Text, HStack, Link, Image, Skeleton } from '@chakra-ui/react'
import appStore from '../assets/loginpage/appStore.png'
import playStore from '../assets/loginpage/playStore.png'

const RegisterLoginLayout = props => {
  return (
    <VStack gap={3} width="350px">
      {props.children}
      <Text color="gray">Get the app</Text>
      <HStack justifyContent="center">
        <Link width="40%" href="https://acamposcar.dev" isExternal>
          <Image
            fallback={<Skeleton width="100%" height="400px" />}
            src={appStore}
            alt="App Store"
          />
        </Link>
        <Link width="40%" href="https://acamposcar.dev" isExternal>
          <Image
            fallback={<Skeleton width="100%" height="400px" />}
            src={playStore}
            alt="PlayStore"
          />
        </Link>
      </HStack>
    </VStack>
  )
}

export default RegisterLoginLayout
