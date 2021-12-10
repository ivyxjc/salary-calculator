import {
  Alert, AlertDescription,
  AlertIcon,
  Box,
  Button,
  chakra,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Skeleton,
  Stack,
  useBoolean,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import Markdown from 'markdown-to-jsx'

const Ma = () => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Flex
        w="full"
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        shadow="md"
        rounded="lg"
        overflow="hidden"
      >
        <Alert status='warning' colorScheme='white'>
          <AlertIcon/>
          <AlertDescription>
            <Box mx={-3} py={2} px={4}>
              <Box mx={3}>
                <chakra.span color={useColorModeValue('yellow.400', 'yellow.300')} fontWeight="bold">
                  Warning
                </chakra.span>
                <chakra.p color={useColorModeValue('gray.600', 'gray.200')} fontSize="sm">
                  <Markdown>{`This site is under developing. It may not work properly.`}</Markdown>
                </chakra.p>
              </Box>
            </Box>
          </AlertDescription>
        </Alert>
      </Flex>
    </Flex>
  )
}

const DefaultLayout: React.FC<{}> = (props) => {
  const [isNavBarOpen, setNavBarOpen] = useBoolean(false)

  return (
    <Container maxW="container.xl" px={['0', '4']}>
      <Ma/>
      <nav>
        <Flex
          display={['flex', 'none']}
          alignItems="center"
          p="4"
          justifyContent="space-between"
          borderBottom="1px"
          borderBottomColor="gray.100"
        >
          <Link href="/">
            <div>Brand</div>
          </Link>
        </Flex>
        <Flex
          py="4"
          px={['4', '0']}
          direction={['column', 'row']}
          alignItems="center"
          justifyContent="space-between"
          borderBottom={['1px', '0']}
          borderBottomColor="gray.100"
          display={[isNavBarOpen ? 'flex' : 'none', 'flex']}
        >
          <Link display={['none', 'block']} href="/" _hover={{color: 'inherit'}}>
            <div>Brand</div>
          </Link>
          <Stack
            spacing={['2', '5']}
            mb={['4', '0']}
            alignItems={['flex-start', 'center']}
            direction={['column', 'row']}
          >
            <Link href="/pricing">Pricing</Link>
            <Link href="/download">Download</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/blog">Blog</Link>
          </Stack>
          <HStack>
            <div>Hello wrold</div>
          </HStack>
        </Flex>
      </nav>
      <main>{props.children}</main>
    </Container>
  )
}

export default DefaultLayout
