import { Flex, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Modal, ModalOverlay, ModalBody, ModalFooter, ModalContent, ModalHeader, ModalCloseButton, useDisclosure } from '@chakra-ui/react'

export const Description = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return(
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
          bg='#191E39'
          color='#eee'
          pb='5'
          pt='3'
        >
          <ModalHeader>Contact me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontStyle='italic'>toma98vlad@gmail.com</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    <Flex
    direction='column'
    color='#eee'
    gap='2'
    maxW={['90%', '90%', '4xl']}
    >
      <Heading
      as='h3'
      size='2xl'
      >
        Hi,<br /> I'm Vlad
      </Heading>
      <Text
      fontSize='2xl'
      color='#ccccdd'
      >
      Web developer focused on building and designing web-based experiences
      </Text>
      <Flex
      gap='3'
      >
        <Link to='/portfolio'>
          <Button
            _hover={{
              px:'8',
              transition:'.2s',
            }}
            _active={{
              border:'none'
            }}
            bgGradient='linear(to-l, #4568DC, #568fee)'
            boxShadow='0px 2px 15px #4568dc'
            w='fit-content'
            p='7'
            transition='.1s'
            rounded='xl'
            fontSize='lg'
            mt='8'
          >
          Portfolio
          </Button>
        </Link>
        <Button
          onClick={onOpen}
          _hover={{
            px:'8',
            transition:'.2s',
          }}
          bg='transparent'
          color='#568fee'
          border='1px solid #568fee'
          w='fit-content'
          p='7'
          transition='.1s'
          rounded='xl'
          fontSize='lg'
          mt='8'
        >
        Contact
        </Button>
      </Flex>
    </Flex>
    </>
  )
}