import React from 'react'
import { Button, Card, CardBody, Flex, Heading, Stack, Text, Icon, Center } from '@chakra-ui/react'
import { FaGoogleDrive } from "react-icons/fa";

export default function Home() {
  return (
    <Flex align="center" justify="center" textAlign='center'>
      <Card maxW='sm' variant='unstyled'>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading size='lg'>Organize Google Drive</Heading>
          <Center><Icon as={FaGoogleDrive} boxSize={10}/></Center>
          <Text marginTop={2}>
            Sign in to connect and organize your google drive files.
          </Text>
          <Button colorScheme='teal'>Sign In</Button>
        </Stack>
      </CardBody>
    </Card>
    </Flex>
  )
}
