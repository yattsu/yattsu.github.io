import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

const DefaultPage = () => {
  return(
    <>
      <Flex
      bg='#191E39'
      w='full'
      direction='column'
      alignItems='center'
      gap='16'
      >
        <Menu />
        <Flex
          w={['full', 'full', '75%', '65%']}
          color='#eee'
        >
          {<Outlet />}
        </Flex>
      </Flex>
    </>
  )
}

export default DefaultPage