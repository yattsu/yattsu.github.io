import { Heading } from '@chakra-ui/react'

const SectionHeading = ({ text }) => {
  return(
    <Heading
    as='h3'
    size='2xl'
    color='#eee'
    w='fit-content'
    >
      {text}
    </Heading>
  )
}

export default SectionHeading