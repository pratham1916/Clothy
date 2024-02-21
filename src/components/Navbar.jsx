import { Avatar, Badge, Box, Button, ButtonGroup, HStack, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, Wrap, WrapItem, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import "../style/Navbar.css"
import Profile from './Profile';

const Navbar = () => {
    return (
        <HStack px={{ base: 8, md: 20 }} spacing="24px" align="center" justify="space-between">
            <Box>
                <Link to="/"><Text fontSize={{ base: '30px', md: '30px' }} as='b'>Clothy</Text></Link>
            </Box>
            <HStack display={{ base: 'none', md: 'flex' }} spacing="12">
                <Box className='active' as='b'>
                    <Link to="/" >Home</Link>
                </Box>
                <Box as='b'>
                    <Link to="/men">Mens</Link>
                </Box>
                <Box as='b'>
                    <Link to="/women">Women</Link>
                </Box>
                <Box as='b'>
                    <Link to="/accessories">Accessories</Link>
                </Box>
            </HStack>
            <HStack spacing="5">
                <Box fontSize='22px'>
                    <Link to="/wishlist"><FaRegHeart /></Link>
                </Box>
                <Box fontSize='22px'>
                    <Link to="/cart"><FaCartShopping /></Link>
                </Box>
                <Profile />
            </HStack>
        </HStack>
    )
}
export default Navbar
