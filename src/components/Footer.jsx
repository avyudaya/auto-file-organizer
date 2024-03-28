import { Flex, Text, Highlight, Heading, Icon, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <Flex mt={6} flexDir='column' align="center" justify="center" textAlign='center'>
            <Text>Made for the love of open source.</Text>
            <Flex mt={2}>
                <IconButton onClick={() => openInNewTab('https://www.linkedin.com/in/avyudaya-acharya-510824169/')} aria-label='LinkedIn'
                    isRound={true} size='sm' color='gray.800' margin={0.5} icon={<FaLinkedin />} />
                <IconButton onClick={() => openInNewTab('https://twitter.com/Aavyudaya')} aria-label='Twitter'
                    isRound={true} size='sm' color='gray.800' margin={0.5} icon={<FaXTwitter />} />
                <IconButton onClick={() => openInNewTab('https://github.com/avyudaya/')} aria-label='Github'
                    isRound={true} size='sm' color='gray.800' margin={0.5} icon={<FaGithub />} />
                <IconButton onClick={() => openInNewTab('https://www.instagram.com/avyudaya.acharya/')} aria-label='Instagram'
                    isRound={true} size='sm' color='gray.800' margin={0.5} icon={<FaInstagram />} />
            </Flex>
        </Flex>
    )
}
