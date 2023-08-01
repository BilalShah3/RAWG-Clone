import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"

const ErrorPage = () => {
    const navigate = useNavigate()
    const error = useRouteError()
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
            {
            isRouteErrorResponse(error) ?'This page does not exists.': 
            'An unexpected error occurred.'
            }
        </Text>
        <Button onClick={()=> navigate('/') } 
          whiteSpace="normal" textAlign='left' fontSize='md' variant='link'
          fontWeight={ 'bold'}
        >
            Back to Home
       </Button>
      </Box>
    </>
  )
}

export default ErrorPage