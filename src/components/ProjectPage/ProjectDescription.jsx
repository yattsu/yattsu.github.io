import { Flex, Text } from '@chakra-ui/react'

export const ProjectDescription = ({ description }) => {
  return(
    <Flex
      borderBottom='1px solid #393e59'
      py='5'
    >
      <Text
        fontSize='xl'
      >
        {description}
      </Text>
    </Flex>
  )
}