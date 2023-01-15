import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
} from '@chakra-ui/react';

export const Error = ({ error }) => {
  return (
    <>
      <Box display="flex" justifyContent="center" textAlign="center">
        <Alert status="error" my={12} w="xl">
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </Box>
    </>
  );
};
