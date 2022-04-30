import { Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const ProjectBox = ({ title, data }) => {
  return(
    <Flex
    direction='column'
    overflow='hidden'
    gap='5'
    mb='12'
    flex={['1 0 100%', '1 0 100%', '1 0 45%', '1 0 35%']}
        rounded='xl'
    >
      <Link to={title}>
      <Flex
        rounded='xl'
        overflow='hidden'
      >
      <Image
        _hover={{
          transform:'scale(1.03)'
        }}
        src={require(`../../media/projects/${title}/thumbnail.png`)}
        objectFit='cover'
        h='lg'
        size='10'
        transition='.4s'
      />
      </Flex>
      </Link>
      <Flex
      direction='column'
      >
        <Text
        fontSize='2xl'
        fontWeight='bold'
        >
        {data.name}
        </Text>
        <Text
          fontSize='sm'
          pl='5'
          color="#bbbbdd"
          fontStyle='italic'
        >
        {data.description}
        </Text>
      </Flex>
    </Flex>
  )
}