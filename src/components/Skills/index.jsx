import { Flex } from '@chakra-ui/react'
import SectionHeading from '../SectionHeading'
import { SkillBox } from './SkillBox'
import reactLogo from '../../media/react_logo.png'
import htmlLogo from '../../media/html_logo.png'
import cssLogo from '../../media/css_logo.png'
import javascriptLogo from '../../media/javascript_logo.webp'
import reduxLogo from '../../media/redux_logo.svg'
import nodeLogo from '../../media/node_logo.png'
import chakraLogo from '../../media/chakra_logo.png'
import tailwindLogo from '../../media/tailwind_logo.png'

const Skills = () => {
  return(
    <Flex
    w='full'
    justify='center'
    py='16'
    bg='#191E39'
    >
      <Flex
        w={['full', 'full', '75%', '65%']}
        direction='column'
        alignItems='center'
        gap='8'
      >
        <SectionHeading text='Skills' />
        <Flex
          direction='row'
          wrap='wrap'
          justify='center'
          gap='5'
        >
          <SkillBox skillName='HTML' logo={htmlLogo} />
          <SkillBox skillName='CSS' logo={cssLogo} />
          <SkillBox skillName='JavaScript' logo={javascriptLogo} />
          <SkillBox skillName='React' logo={reactLogo} />
          <SkillBox skillName='Redux' logo={reduxLogo} />
          <SkillBox skillName='Node.js' logo={nodeLogo} />
          <SkillBox skillName='Chakra UI' logo={chakraLogo} />
          <SkillBox skillName='Tailwind CSS' logo={tailwindLogo} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Skills