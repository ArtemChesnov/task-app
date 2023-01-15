import {
  Button,
  Flex,
  Input,
  FormControl,
  Box,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/action-creators/actionCreators';

export const TaskForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(task));

    toast({
      title: 'The task has been added',
      description: "Let's do it!",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });

    setTask('');
  };

  return (
    <Box>
      <Flex justifyContent="center" p={5}>
        <form onSubmit={handleSubmit}>
          <FormControl w='xs'>
            <Flex>
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Enter task..."
                value={task}
                onChange={(event) => setTask(event.currentTarget.value)}
                isRequired
              />
              <Button py={4} px={8} type="submit">
                Add
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Flex>
    </Box>
  );
};
