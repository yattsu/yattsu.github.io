import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const MenuLink = ({ text, href }) => {
  return(
    <Link to={href}>
      <Text
      fontSize='lg'
      color='#eee'
      >
        {text}
      </Text>
    </Link>
  )
}