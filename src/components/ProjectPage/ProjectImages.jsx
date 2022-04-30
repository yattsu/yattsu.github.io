import { Flex, Image } from '@chakra-ui/react'

export const ProjectImages = ({ title, data }) => {
  return(
    <Flex
      gap='5'
      wrap='wrap'
      justify='center'
    >
      {
        data.images.map(image => (
          <Image
            src={require(`../../media/projects/${title}/${image}`)}
            objectFit='contain'
            rounded='xl'
            overflow='hidden'
            h='fit-content'
            maxW={['full', 'full', 'fit-content', 'fit-content']}
            maxH='xl'
            shadow='xl'
            mb='12'
          />
        ))
      }
    </Flex>
  )
}