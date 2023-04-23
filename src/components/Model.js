import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react"
import Chart from "./Chart"
import React from "react"

function ChartModal({ isOpen, onOpen, onClose }) {
    const finalRef = React.useRef(null)

    return (
        <>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Rating of Acedemic Block</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Chart />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Details</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default ChartModal;