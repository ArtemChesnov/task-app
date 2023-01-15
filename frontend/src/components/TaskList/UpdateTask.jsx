import React, { useRef, useState } from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useToast,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { updateTask } from '../../store/action-creators/actionCreators'

export const UpdateTask = ({ isOpen, onClose, editTask }) => {
  const [value, setValue] = useState('')
  const initialRef = useRef(null)
  const toast = useToast()
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    const updatedTask = {
      id: editTask.id,
      title: value,
      completed: editTask.completed,
    }

    dispatch(updateTask(updatedTask))
    setValue('')
    onClose()
    toast({
      title: 'The task has been updated',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Task</FormLabel>
              <Input
                ref={initialRef}
                value={value}
                placeholder={editTask.title}
                onChange={(event) => setValue(event.currentTarget.value)}
                isRequired
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit">
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  )
}
