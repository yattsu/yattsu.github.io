import { Flex } from '@chakra-ui/react'
import { Description } from './Description'
import { Headshot } from './Headshot'

const Header = () => {
  return(
    <Flex
    w='full'
    h='full'
    direction='column'
    bgGradient='linear(-130deg, #2a7482, #2e5472, #3e6482)'
    alignItems='center'
    py={['10', '10', '32', '32']}
    gap='16'
    borderBottom='1px solid rgba(255, 255, 255, .2)'
    >
      <Flex
      direction='row'
      gap='lg'
      justify='space-around'
      w='full'
      maxW={['90%', '90%', '4xl']}
      >
        <Flex
        bgGradient='linear(30deg, #eee, #fff)'
        rounded='full'
        w='24'
        h='24'
        boxShadow='0px 0px 15px #eee'
        ></Flex>
        <Headshot />
      </Flex>
      <Description />
    </Flex>
  )
}

export default Header