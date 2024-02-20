import { Avatar, Badge, Box, Button, ButtonGroup, HStack, IconButton, Spacer, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

import "../style/Navbar.css"
import { SearchIcon } from '@chakra-ui/icons';

const Navbar = () => {
    return (
        <HStack px={20}>
            <Box>
                <Link to="/"><Text fontSize='30px' as='b'>Clothy</Text></Link>
            </Box>
            <Spacer />
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
            <Spacer />
            <HStack spacing="5">
                <Box fontSize='22px'>
                    <Link to="/wishlist"><FaRegHeart /></Link>
                </Box>
                <Box fontSize='22px'>
                    <Link to="/cart"><FaCartShopping /></Link>
                </Box>
                <Wrap>
                    <WrapItem>
                        <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    </WrapItem>
                </Wrap>
            </HStack>
        </HStack>
    )
}

export default Navbar
