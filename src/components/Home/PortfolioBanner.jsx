import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const PortfolioBanner = () => {
  return(
    <Link to='/portfolio'>
      <Flex
        _hover={{
          py:'32',
          transition:'.2s'
        }}
        py='24'
    bgGradient='linear(-130deg, #2a7482, #2e5472, #3e6482)'
        justify='center'
        transition='.2s'
      >
        <Text
          fontSize='3xl'
          color='rgba(255, 255, 255, .6)'
          fontWeight='bold'
          fontStyle='italic'
        >Check my portfolio</Text>
      </Flex>
    </Link>
  )
}