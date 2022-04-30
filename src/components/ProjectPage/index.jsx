import { Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SectionHeading from '../SectionHeading'
import { ProjectImages } from './ProjectImages'
import projectFile from '../../projects.json'
import { ProjectDescription } from './ProjectDescription'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const ProjectPage = () => {
  const params = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(projectFile[params.title]) 
  }, [])

  if(!data) {
    return('Loading...')
  }

  return(
    <Flex
      direction='column'
      px='5'
      pb='16'
      gap='12'
    >
      <Link to='/portfolio'>
        <ArrowLeftIcon mr='2' /> go back
      </Link>
      <SectionHeading text={data.name} />
      <ProjectDescription description={data.description} />
      <ProjectImages title={params.title} data={data} />
    </Flex>
  )
}

export default ProjectPage