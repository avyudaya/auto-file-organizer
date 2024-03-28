import { Flex, Text, Highlight, Heading, Icon, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <Flex mt={6} flexDir='column' align="center" justify="center" textAlign='center'>
            <Text>Made for the love of open source.</Text>
            <Flex mt={2}>
                <IconButton isRound={true} onClick={() => { }} aria-label='LinkedIn' size='sm' color='gray.800' margin={0.5} icon={<FaLinkedin/>} />
                <IconButton isRound={true} aria-label='Twitter' size='sm' color='gray.800' margin={0.5} icon={<FaXTwitter/>} />
                <IconButton isRound={true} aria-label='Github' size='sm' color='gray.800' margin={0.5} icon={<FaGithub/>} />
                <IconButton isRound={true} aria-label='Instagram' size='sm' color='gray.800' margin={0.5} icon={<FaInstagram/>} />
            </Flex>
        </Flex>
    )
}
