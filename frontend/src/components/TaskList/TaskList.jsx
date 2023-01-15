import React, { useEffect } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  ScaleFade,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { getTasks } from './../../store/action-creators/actionCreators';
import { Task } from './Task';
import { Loading } from './../Loading/Loading';
import { Error } from '../Error/Error';

export const TaskList = () => {
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <>
      <Flex justifyContent="center">
        {tasks.length ? (
          <Card w="xl">
            <CardHeader textAlign="center">
              <Heading size="md">Tasks</Heading>
            </CardHeader>
            {loading ? (
              <Loading />
            ) : (
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  {tasks.map((task) => (
                    <Task key={task.id} task={task} />
                  ))}
                </Stack>
              </CardBody>
            )}
          </Card>
        ) : (
          <Text pt="2" fontSize="lg" px={4}>
            The task list is empty
          </Text>
        )}
      </Flex>

      {error && <Error error={error} />}
    </>
  );
};
