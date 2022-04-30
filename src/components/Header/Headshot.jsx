import { Avatar } from '@chakra-ui/react'
import profileImg from '../../media/profile.png'

export const Headshot = () => {
  return(
    <Avatar
    h={['3xs', '2xs', 'xs']}
    w='auto'
    name='Vlad'
    src={profileImg}
    shadow='xl'
    bg='transparent'
    />
  )
}