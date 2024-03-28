import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Flex, Heading, Stack, Text, Icon, Center, Box, Avatar, Badge, Divider, Spinner } from '@chakra-ui/react'
import { FaGoogleDrive } from "react-icons/fa";
import { CheckCircleIcon } from '@chakra-ui/icons'
import {loadHomeDirectory} from '../service/loadHomeDirectory'

export default function Home({ user, handleSignIn }) {
  const [loadedHomeDirectory, setLoadedHomeDirectory] = useState(false)
  const [loading, setLoading] = useState(false)
  const organizeFiles = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  useEffect(() => {
    async function fetchHomeDirectory() {
      var res = await loadHomeDirectory();
      setLoadedHomeDirectory(true)
    }
    if(user){
      fetchHomeDirectory()
    }
  }, [user])

  return (
    <Flex align="center" justify={user ? 'start' : 'center'} textAlign='center'>
      {user ? <Box p={2} w='100vw'>
        <Flex mb={3}>
          <Avatar src={user.le.wt.hK} />
          <Box ml='3'>
            <Text fontWeight='bold'>
              {user.le.wt.Ad}
              <Badge borderRadius={6} p={1} alignItems='center' display='flex' justifyContent='center' ml='1' colorScheme='green'>
                Google Drive&nbsp;<Icon as={CheckCircleIcon} />
              </Badge>
            </Text>
          </Box>
        </Flex>
        <Divider orientation='horizontal' />
        <Flex flexDir='column' justifyContent='center' alignItems='start' mt={2}>
          {loadedHomeDirectory ? 
          <>
          <Text fontWeight='bold' mb={3}>Current Status: <Badge colorScheme='red'>Unorganized</Badge></Text>
          <Button isLoading={loading} size='sm' onClick={() => organizeFiles()} colorScheme='teal'>Organize Now</Button>
          </>
            : <Spinner color='teal.500' />}
        </Flex>
      </Box> :
        <Card maxW='sm' variant='unstyled'>
          <CardBody>
            <Stack mt='6' spacing='3'>
              <Heading size='lg'>Organize Google Drive</Heading>
              <Center><Icon as={FaGoogleDrive} boxSize={10} /></Center>
              <Text marginTop={2}>
                Sign in to connect and organize your google drive files.
              </Text>
              <Button onClick={() => handleSignIn()} colorScheme='teal'>Sign In</Button>
            </Stack>
          </CardBody>
        </Card>}
    </Flex>
  )
}
