import { Grid, GridItem } from '@chakra-ui/react'
import NextLink from 'next/link'
import {

  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  
 
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon , ArrowDownIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import { extendTheme } from '@chakra-ui/react'
import { AdobeAiIcon, AdobePsIcon, AdobexdIcon, CssIcon, FigmaIcon, FirebaseIcon, HtmlIcon, JavaIcon, JsIcon, MysqlIcon, NextjsIcon, PostgresIcon, ReactIcon, TailwindIcon, TsIcon, TunisiaIcon } from '../components/DevIcons'



import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
const theme = extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    
  },
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
         i'm a 22 years old developer and designer from Tunisia.
         I am interested in software development, architecture, computer networking, and graphic design.
         I enjoy each process of building the application, from conception to deployment.
         
       
       
         </p>
        </Paragraph>


       
        {/*<Box align="center" my={4}>
          <a href='cv.pdf' download  target="_blank">
          <Button  rightIcon={<ArrowDownIcon />} colorScheme="blue">
              Downlaod CV
            </Button>
          </a>
            
</Box>*/}
      </Section>
      <section delay={0.2}>
      <Grid templateColumns='repeat(13,30px)' gap={2}>
 <GridItem><JsIcon></JsIcon></GridItem>
 <GridItem><TsIcon></TsIcon></GridItem>
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
 <GridItem><TailwindIcon/></GridItem>
</Grid>

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
        <p>I am most responsive through emails. you can reach me by emailing <u>contact@saimessaoudi.com</u></p>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          
        </SimpleGrid>

       
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
