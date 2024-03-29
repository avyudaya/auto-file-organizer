import { Button, Box, Spacer, Text, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, Stack, Flex, Link, Badge, Show, useToast } from '@chakra-ui/react'
import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { handleOptimizeDrive } from '../service/optimizeFiles'

export default function OrganizePicker({ onClose, size, isOpen, overlay }) {
    const toast = useToast()
    const handleSubmit = (data) => {
        const examplePromise = new Promise((resolve, reject) => {
            handleOptimizeDrive().then(() => resolve(200))
                .catch(err => resolve(500))
        })

        // Will display the loading toast until the promise is either resolved
        // or rejected.
        toast.promise(examplePromise, {
            success: { title: 'Successfully organized files.' },
            error: { title: 'Something went wrong.s' },
            loading: { title: 'Organizing' },
        })
        onClose()
    }

    return (
        <Modal motionPreset='slideInBottom' onClose={onClose} size={size} isOpen={isOpen} isCentered>
            {overlay}
            <ModalContent>
                <ModalHeader>Please provide a structure pattern ✌️</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex
                        p={2}
                        w="100%"
                        direction={{ base: 'column', md: 'row' }}
                    >
                        <Stack p={3} w={{ md: '30%' }} justify="center" spacing={3}>
                            <Heading size='lg'>Datacurator - Filetree</Heading>
                            <Text>
                                a standard filetree for /r/datacurator [ and r/datahoarder ]
                            </Text>
                            <Link href='https://github.com/roboyoshi/datacurator-filetree?tab=readme-ov-file' isExternal>
                                Datacurator github link <ExternalLinkIcon mx='2px' />
                            </Link>
                            <Box>
                                <Button size='sm' onClick={() => handleSubmit('Datacurator')} colorScheme='teal'>Select</Button>
                            </Box>
                        </Stack>
                        <Spacer mb={10} />
                        <Stack p={3} w={{ md: '30%' }} justify="center" spacing={3}>
                            <Heading size='lg'>The PARA Method</Heading>
                            <Text>
                                A simple, comprehensive, yet extremely flexible system for organizing any type of digital information across any platform.
                            </Text>
                            <Link href='https://fortelabs.com/blog/para/' isExternal>
                                Article link <ExternalLinkIcon mx='2px' />
                            </Link>
                            <Box>
                                <Button size='sm' onClick={() => handleSubmit('PARA')} colorScheme='teal'>Select</Button>
                            </Box>
                        </Stack>
                        <Spacer mb={10} />
                        <Show above='md'>
                            <Stack p={3} w={{ md: '30%' }} justify="center" align='center' spacing={3}>
                                <Heading size='md'>AI prompt</Heading>
                                <Badge>Coming Soon</Badge>
                                <Box>
                                    <Button size='sm' variant='outline' colorScheme='teal'>Create your own.</Button>
                                </Box>
                            </Stack>
                            <Spacer mb={10} />
                        </Show>
                    </Flex>
                    <Show below='md'>
                        <Stack p={3} justify="center" align='start' spacing={3}>
                            <Heading size='md'>AI prompt <Badge>Coming Soon</Badge></Heading>
                            <Box>
                                <Button size='sm' variant='outline' colorScheme='teal'>Create your own.</Button>
                            </Box>
                        </Stack>
                        <Spacer mb={10} />
                    </Show>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
