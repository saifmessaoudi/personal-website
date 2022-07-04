import {  GridItem } from '@chakra-ui/react'

import {

  Container,
  Heading,
  Box,
  SimpleGrid,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'

import Paragraph from '../components/paragraph'

import Layout from '../components/layouts/article'
import Section from '../components/section'

import { AdobeAiIcon, AdobePsIcon, AdobexdIcon, FigmaIcon, FirebaseIcon, JavaIcon, JsIcon, MysqlIcon, NextjsIcon, PostgresIcon, ReactIcon, TailwindIcon, TsIcon } from '../components/DevIcons'



import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})



const Home = () => (
  <Layout>
    <Container>
   
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(20px)' }}
      >
        <p>Hello, I&apos;m an IT graduated student based in Tunisia </p>
      </Box>
    
        
     
      
      

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2"  variant="page-title">
            Saif Messaoudi
          </Heading>
          <p>Junior Developer & Graphic Designer </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/pic.jpg"
              alt="Profile image"
              borderRadius="full"
              width="200%"
              height="200%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
         <p>
         i&apos;m a 22 years old developer and designer from Tunisia.
         I am interested in software development, architecture, computer networking, and graphic design.
         I enjoy each process of building the application, from conception to deployment.
         
       
       
         </p>
        </Paragraph>


       
       
      </Section>
      <section delay={0.2}>
      <SimpleGrid columns={{lg: 13,  sm:9}} gap={{sm:4,lg:2}}  >
 <GridItem><JsIcon></JsIcon></GridItem>
 <GridItem><TsIcon></TsIcon></GridItem>
 <GridItem><TailwindIcon/></GridItem>
 <GridItem><NextjsIcon></NextjsIcon></GridItem>
 <GridItem><ReactIcon></ReactIcon></GridItem>
 
 
 <GridItem><JavaIcon/></GridItem>
 <GridItem><MysqlIcon/></GridItem>
 <GridItem><PostgresIcon/></GridItem>
 <GridItem><FirebaseIcon/></GridItem>
 <GridItem><FigmaIcon/></GridItem>
 <GridItem><AdobexdIcon/></GridItem>
 <GridItem><AdobePsIcon/></GridItem>
 <GridItem><AdobeAiIcon/></GridItem>
 
</SimpleGrid>

      </section>
      

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
       
        
        <p>Build process ...</p>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <p>Build process ...</p>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <p>Build process ...</p>
        <p>Hey i&apos;am most responsive through emails. you can reach me by emailing <u>contact@saimessaoudi.com</u></p>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          
        </SimpleGrid>

       
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
