import { Flex, Avatar, Text } from '@chakra-ui/react'

export const SkillBox = ({ skillName, logo }) => {
  return(
    <Flex
      color='#eee'
      py='3'
      px='5'
      rounded='xl'
      direction='column'
      alignItems='center'
      gap='3'
    >
      <Avatar
        size='lg'
        src={logo}
        bg='transparent'
      />
      <Text
      fontSize='lg'
      >
        {skillName}
      </Text>
    </Flex>
  )
}