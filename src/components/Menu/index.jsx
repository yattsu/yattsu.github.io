import { Flex, Text } from '@chakra-ui/react'
import { MenuLink } from './MenuLink'

const Menu = () => {
  return(
  <Flex
    w='full'
    justify='center'
    top='0'
    left='0'
    borderBottom='1px solid #393e59'
  >
    <Flex
      w={['full', 'full', '75%', '65%']}
      direction='row'
      gap='8'
      py='5'
      justify={['center', 'center', 'left', 'left']}
    >
      <MenuLink text='Home' href='/' />
      <MenuLink text='Portfolio' href='/portfolio' />
    </Flex>
  </Flex>
  )
}

export default Menu