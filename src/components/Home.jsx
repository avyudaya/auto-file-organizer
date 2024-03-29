import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Flex, Heading, Stack, Text, Icon, Center, Box, Avatar, Badge, Divider, Spinner, useDisclosure, ModalOverlay
} from '@chakra-ui/react'
import { FaGoogleDrive } from "react-icons/fa";
import { CheckCircleIcon } from '@chakra-ui/icons'
import { loadHomeDirectory } from '../service/loadHomeDirectory'
import { handleOptimizeDrive } from '../service/optimizeFiles'
import OrganizePicker from './OrganizePicker'
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
    if (user) {
      fetchHomeDirectory()
    }
  }, [user])

  const organizeFiles = async () => {
    setLoading(true)
    let res = await handleOptimizeDrive()
    if (res) {
      setLoading(false)
    }
  }

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayOne />)

  return (
    <Flex align="center" justify={user ? 'start' : 'center'} textAlign='center'>
      {user ? <Box p={2} w='100vw'>
        <Flex my={6}>
          <Avatar size='lg' src={user.le.wt.hK} />
          <Box ml='3'>
            <Text fontSize='xl' fontWeight='bold' mb={2}>
              {user.le.wt.Ad}
            </Text>
            <Badge borderRadius={6} p={1} alignItems='center' display='flex' justifyContent='center' ml='1' colorScheme='green'>
                Google Drive&nbsp;<Icon as={CheckCircleIcon} />
              </Badge>
          </Box>
        </Flex>
        <Divider orientation='horizontal' />
        <Flex flexDir='column' justifyContent='center' alignItems='start' my={4}>
          {loadHomeStatus ?
            <>
              <Text fontSize='lg' fontWeight='bold'> <Icon as={FaGoogleDrive} boxSize={4} /> Google Drive Status: <Badge colorScheme={statusColors[loadHomeStatus.type]}>{loadHomeStatus.type}</Badge></Text>
              <Text mb={4} fontSize='lg'>Files without proper folders: {loadHomeStatus.files} / {loadHomeStatus.total}</Text>
              <Button isLoading={loading} onClick={() => {
                setOverlay(<OverlayOne />)
                onOpen()
              }} colorScheme='teal' size='sm'>Organize Now</Button>
              <OrganizePicker isOpen={isOpen} onClose={onClose} overlay={overlay} size='5xl' />
            </>
            : <Spinner color='teal.500' />}
        </Flex>
        <Divider orientation='horizontal' />
        {/* <Flex>
          <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='new-files-alerts' mb='0'>
              Place new files in proper location automatically?
            </FormLabel>
            <Switch colorScheme='teal' id='new-files-alerts' />
          </FormControl>
        </Flex> */}
      </Box> :
        <Card maxW='sm' variant='unstyled'>
          <CardBody>
            <Stack mt='6' spacing='3'>
              <Heading size='lg'>Organize Google Drive</Heading>
              <Center><Icon as={FaGoogleDrive} boxSize={10} /></Center>
              <Text marginTop={2}>
                Sign in to connect and organize your google drive files.
              </Text>
              <Button onClick={() => handleSignIn()} colorScheme='teal' size='sm'>Sign In</Button>
            </Stack>
          </CardBody>
        </Card>}
    </Flex>
  )
}
