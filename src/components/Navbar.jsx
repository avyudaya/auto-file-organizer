import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Flex, Heading, IconButton, Spacer, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ user, signOut }) {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading as={Link} to='/' size='md'>Files Organizer</Heading>
            </Box>
            <Spacer />
            <ButtonGroup>
                <Button colorScheme='teal' as={Link} to='/about' variant='ghost'>About</Button>
                {user && <Button onClick={signOut} colorScheme='teal' variant='ghost'>Signout</Button>
                }
                <IconButton onClick={toggleColorMode} aria-label='Search database' icon={colorMode == 'light' ? <MoonIcon /> : <SunIcon />} />

            </ButtonGroup>
        </Flex>
    )
}
