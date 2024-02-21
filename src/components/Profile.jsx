import React from 'react';
import { Avatar, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text } from '@chakra-ui/react';

const Profile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
        <>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight='bold' mb='1rem'>
                            My Name is Pratham Nemade
                        </Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Avatar size='sm' onClick={onOpen} cursor='pointer' />
        </>
    );
};

export default Profile;
