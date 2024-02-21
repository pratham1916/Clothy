import React from 'react'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'


const Register = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Register if yor are new here!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <Input ref={initialRef} placeholder='Username' />
                        </FormControl>

                        <FormControl mt={4}>
                            <Input type='password' placeholder='Password' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='orange' mr={3}>Register</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Register
