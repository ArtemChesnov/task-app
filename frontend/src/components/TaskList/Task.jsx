import { useState } from 'react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

import { UpdateTask } from './UpdateTask';
import { useDispatch } from 'react-redux';
import { completeTask, removeTask } from '../../store/action-creators/actionCreators';

export const Task = ({ task }) => {
  const [editTask, setEditTask] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();

  function updateTask(task) {
    onOpen();
    setEditTask(task);
  }

  const handleCompleteTask = (task) => {
    dispatch(completeTask(task));

    task.completed
      ? toast({
          title: 'Try again',
          description: "Let's do it!",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      : toast({
          title: 'Good job!',
          description: "Let's do it!",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
  };

  const deleteTask = (task) => {
    dispatch(removeTask(task));

    toast({
      title: 'The task was deleted',
      status: 'info',
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Box>
      <HStack>
        <Flex alignItems="baseline" w="full">
          <Box w="15%">
            <Badge
              w="22"
              cursor="pointer"
              colorScheme={task.completed ? 'green' : 'orange'}
              onClick={() => handleCompleteTask(task)}
            >
              {task.completed ? 'Success' : 'In Progress'}
            </Badge>
          </Box>
          <Box wordBreak="break-word" w="70%">
            <Text
              pt="2"
              fontSize="lg"
              px={4}
              textDecoration={task.completed ? 'line-through' : ''}
            >
              {task.title}
            </Text>
          </Box>
          <Box w="15%" alignItems="center">
            <Flex justifyContent="space-evenly">
              <IconButton
                size="xs"
                icon={<EditIcon />}
                onClick={() => updateTask(task)}
              />
              <IconButton
                size="xs"
                icon={<DeleteIcon />}
                onClick={() => deleteTask(task)}
              />
              <UpdateTask
                isOpen={isOpen}
                onClose={onClose}
                editTask={editTask}
              />
            </Flex>
          </Box>
        </Flex>
      </HStack>
    </Box>
  );
};
