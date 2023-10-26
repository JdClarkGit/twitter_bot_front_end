import {
    Badge,
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    Flex,
    Grid,
    Heading,
    SimpleGrid,
    Text,
    Spacer,
    Divider,
    Image,
    Center,
    Button,
    Stack,
    Icon,
    createIcon,
    Link,
  } from "@chakra-ui/react";

  import { keyframes } from '@emotion/react';

const TopCta = () => {
    const animation = keyframes`
    to {
       background-position: 200%;
     }
  `


    return ( <>
       
    <Container
        minH={"400px"}
        maxW={"container.lg"}
        paddingTop={"80px"}
      >
        <Text
          fontSize="5xl"
          color="white"
          lineHeight="tall"
          textAlign="left"
          fontWeight="extrabold"
          fontFamily={'heading'}
        >
          Supercharge your Twitter growth and monetize your expanding audience.
        </Text>
        <br />
        <Text
      bgGradient="linear(to-l, #7928CA,#FF0080, #93E9BE, #00FFFF)"
      bgClip="text"
      fontSize="5xl"
      fontWeight="extrabold"
      fontFamily={'heading'}
      backgroundSize= "200% auto"
      animation= {`${animation} 4s ease-in-out infinite alternate`}
    >
  Powered by AI. 🖖
    </Text>
        <br />
        {/* <Text
          fontSize="5xl"
          color="white"
          lineHeight="tall"
          textAlign="left"
          fontWeight="bold"
          fontFamily={'heading'}
        >
          Powered by AI
        </Text> */}
        <br />
        <Center>
          <Button
            px={6}
            colorScheme="twitter"
            size="lg"
            paddingRight="40px"
            paddingLeft="40px"
            minW="400px"
            minH="50px"
          >
            <Text fontSize="2xl">Let's go!</Text>
            
          </Button>
        </Center>
        <Center marginTop="20px">
          <Link textAlign="left" color="white">
            Learn more.
          </Link>
        </Center>
      </Container>
    </>)
}

export default TopCta;