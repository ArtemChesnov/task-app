import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { ColorModeSwitcher } from './../ColorModeSwitcher';

export const Header = () => {
  return (
    <Box as="header">
      <Container maxW="container.lg" py="5" px="20">
        <Flex justifyContent="space-between" alignItems="center">
          <Text>Simple Task ReactApp with Redux and Chakra UI</Text>
          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  )
}
