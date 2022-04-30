import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  const d = new Date()

  return(
  <Flex
  borderTop='1px solid #393e59'
  bg='#191E39'
  color='#797e99'
  fontSize='sm'
  alignItems='center'
  py='12'
  direction='column'
  gap='5'
  >
    <Flex
    direction='row'
    color='#a9aec9'
    >
      <Flex
      direction='column'
      >
      <Text
      fontSize='lg'
      color='#797e99'
      >
      CONTACT
      </Text>
      toma98vlad@gmail.com
      </Flex>
    </Flex>
    <Flex
    w='full'
    px='12'
    justify={['center', 'center', 'left']}
    >
      &copy; {d.getFullYear()} Vlad Toma
    </Flex>
  </Flex>
  )
}

export default Footer