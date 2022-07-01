import { Container, Heading,  } from '@chakra-ui/react'
import Layout from '../components/layouts/article'





const Posts = () => (
  <Layout title="Skills">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Technical skills
      </Heading>


    <p>Build process ...</p>
     

      

      
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
