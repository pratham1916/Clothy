import React from 'react';
import { Avatar, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, Flex, Button, useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const userDataString = localStorage.getItem("Users");
    const userData = JSON.parse(userDataString) || {};
    const toast = useToast();

    const handleLogout = () => {
        localStorage.removeItem("Users");
        onClose();
        toast({
            title: "Logout Successful",
            position: "top",
            description: "You are now logged out.",
            status: "succes",
            duration: 3000,
            isClosable: true,
        });
        window.location.reload(true);
    };

    const handleLoginButtonClick = () => {
        onClose();
    };

    return (
        <>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    borderRadius="md"
                    boxShadow="lg"
                    mx={{ base: 4, md: 4 }}
                    maxW={{ base: '55%', md: '35%' }}
                    p={"3"}
                >
                    <ModalHeader
                        borderBottomWidth="1px"
                        p={{ base: 2, md: 4 }}
                        textAlign="center"
                        fontSize="xl"
                        fontWeight="bold"
                    >
                        Profile
                    </ModalHeader>
                    <ModalCloseButton onClick={onClose} />
                    <ModalBody >
                        <Flex direction="column" align="center">
                            <Avatar size='lg' name={userData.name} src={userData.image} mb={4} />
                            <Text fontWeight='bold' mb='1rem' textAlign="center">
                                Name: {userData.name}
                            </Text>
                            <Text fontWeight='bold' mb='1rem' textAlign="center">
                                Email: {userData.email}
                            </Text>
                            <Text fontWeight='bold' mb='1rem' textAlign="center">
                                Phone Number: {userData.phoneNumber || 'N/A'}
                            </Text>
                            {userData.name ? (
                                <Button colorScheme="red" onClick={handleLogout} mt={4}>
                                    Logout
                                </Button>
                            ) : (
                                <Button colorScheme="green" onClick={handleLoginButtonClick} mt={4}>
                                    <Link to="/login">Login</Link>
                                </Button>
                            )}
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Avatar size='sm' onClick={onOpen} cursor='pointer' />
        </>
    );
};

export default Profile;
