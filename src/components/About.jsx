import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, List, ListIcon, ListItem, OrderedList } from '@chakra-ui/react'
import React from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function About() {
    return (
        <Accordion mt={4} allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton borderRadius={8} _expanded={{ bg: 'gray', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                            What is this application?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    I am trying to make file management easy. No one today has time
                    to specify which folder he/she wants to save a file to. I am trying
                    to make this easier by making this extension which will analyze all the
                    existing file and place the newly created file automatically into the
                    relevant directory.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton borderRadius={8} _expanded={{ bg: 'gray', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                            How does it work?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <OrderedList>
                        <ListItem>Connect with your google drive account.</ListItem>
                        <ListItem>Ask you for your preferred style of arrangement.</ListItem>
                        <ListItem>Place files into corresponding folder with required file format.</ListItem>
                        <ListItem>Done. 😸</ListItem>
                    </OrderedList>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton borderRadius={8} _expanded={{ bg: 'gray', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>
                            Future Plans
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <OrderedList>
                        <ListItem>Make it work with other providers.</ListItem>
                        <ListItem>Improve functionality by listening to new file changes and placing them in correct location.</ListItem>
                        <ListItem>Build a AI to do this. 😒</ListItem>
                    </OrderedList>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
