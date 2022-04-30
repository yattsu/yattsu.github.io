import { Flex } from '@chakra-ui/react'
import Header from "../Header";
import Skills from '../Skills'
import { PortfolioBanner } from './PortfolioBanner';

const Home = () => {
  return(
    <Flex
    direction='column'
    >
      <Header />
      <Skills />
      <PortfolioBanner />
    </Flex>
  )
}

export default Home