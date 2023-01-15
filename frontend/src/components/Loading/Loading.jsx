import { Box, Spinner, Stack } from '@chakra-ui/react';

export const Loading = () => {
  return (
    <>
      <Box p={4} display="flex" justifyContent="center">
        <Stack direction="row" spacing={4}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="green.500"
            size="xl"
          />
        </Stack>
      </Box>
    </>
  );
};
