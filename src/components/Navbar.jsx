import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading as={Link} to='/' size='md'>Files Organizer</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='teal' as={Link} to='/about' variant='ghost'>About</Button>
            </ButtonGroup>
        </Flex>
    )
}
