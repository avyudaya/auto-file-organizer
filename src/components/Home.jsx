import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Flex, Heading, Stack, Text, Icon, Center, Box, Avatar, Badge, Divider, Spinner } from '@chakra-ui/react'
import { FaGoogleDrive } from "react-icons/fa";
import { CheckCircleIcon } from '@chakra-ui/icons'
import {loadHomeDirectory} from '../service/loadHomeDirectory'
import { handleOptimizeDrive } from '../service/optimizeFiles'
const statusColors = {
  'UNORGANIZED': 'red',
  'MODARATELY ORGANIZED': 'orange',
  'KIND OF ORGANIZED': 'yellow',
  'ORGANIZED': 'green'
}

export default function Home({ user, handleSignIn }) {
  const [loadHomeStatus, setLoadHomeStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    async function fetchHomeDirectory() {
      var res = await loadHomeDirectory();
      setLoadHomeStatus(res)
    }
    if(user){
      fetchHomeDirectory()
    }
  }, [user])

  const organizeFiles = async () => {
    setLoading(true)
    let res = await handleOptimizeDrive()
    if(res){
      setLoading(false)
    }
  }

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
          {loadHomeStatus ? 
          <>
          <Text fontWeight='bold'>Current <Icon as={FaGoogleDrive} boxSize={4} /> Status: <Badge colorScheme={statusColors[loadHomeStatus.type]}>{loadHomeStatus.type}</Badge></Text>
          <Text mb={3}>Files without proper folders: {loadHomeStatus.files} / {loadHomeStatus.total}</Text>
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
