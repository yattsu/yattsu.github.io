import { Flex } from '@chakra-ui/react'
import SectionHeading from '../SectionHeading'
import { ProjectBox } from './ProjectBox'
import projectsFile from '../../projects.json'

const Portfolio = () => {
  return(
    <Flex
    direction='column'
    px='5'
    gap='12'
    >
      <SectionHeading text='Portfolio' />
      <Flex
      w='full'
      gap='5'
      justify='center'
      wrap='wrap'
      >
      {
        Object.keys(projectsFile).map(i => (
          <ProjectBox title={i} data={projectsFile[i]} />
        ))
      }
      </Flex>
    </Flex>
  )
}

export default Portfolio