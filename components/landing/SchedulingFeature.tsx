import {
    Badge,
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    Flex,
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
  import { CalendarIcon } from "@chakra-ui/icons";

const SchedulingFeature = () => {
return (<Container
    minH={"270px"}
    maxW={"container.xl"}
    paddingBottom={"20px"}
    borderTop="1px solid black"
    borderBottom="1px solid black"
    color="white"
    marginTop="25px"
    paddingTop="40px"
    paddingBottom="40px"
  >
    <Center marginBottom="10px">
      <Text
        fontSize="5xl"
        color="white"
        lineHeight="tall"
        textAlign="center"
        as="b"
      >
        Queue your content in seconds.
      </Text>
    </Center>
    <Center>
      <Text color="white">
        Write, schedule, and boost your tweets - with no need for extra
        apps.
      </Text>
    </Center>

    <SimpleGrid
      columns={{ base: 1, md: 3 }}
      spacing="40px"
      marginTop="50px"
    >
      <Card background="none" borderColor="gray.300" borderWidth="0.5px" _hover={{
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(255, 255, 255, 0.1)", // White with 50% opacity
    },
  }}>
        <CardHeader marginBottom={"1px"} paddingBottom="8px">
          <Heading size="lg" color="white">Schedule with one click.</Heading>
        </CardHeader>
        <CardBody marginTop={"1px"} paddingTop="8px">
          <Text lineHeight="tall" fontSize="md" color="white">
            Queue your post with a single click - or pick a time manually.
          </Text>
          <Center marginTop="25px">
          <CalendarIcon boxSize="30%" color="white"/>
          </Center>
        </CardBody>
      </Card>

      <Card background="none" borderColor="gray.300" borderWidth="0.5px" _hover={{
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(255, 255, 255, 0.1)", // White with 50% opacity
    },
  }}>
        <CardHeader marginBottom={"1px"} paddingBottom="8px">
          <Heading size="lg" color="white">Schedule with one click.</Heading>
        </CardHeader>
        <CardBody marginTop={"1px"} paddingTop="8px">
          <Text lineHeight="tall" fontSize="md" color="white">
            Queue your post with a single click - or pick a time manually.
          </Text>
          <Center marginTop="25px">
          <CalendarIcon boxSize="30%" color="white"/>
          </Center>
        </CardBody>
      </Card>

      <Card background="none" borderColor="gray.300" borderWidth="0.5px" _hover={{
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(255, 255, 255, 0.1)", // White with 50% opacity
    },
  }}>
        <CardHeader marginBottom={"1px"} paddingBottom="8px">
          <Heading size="lg" color="white">Schedule with one click.</Heading>
        </CardHeader>
        <CardBody marginTop={"1px"} paddingTop="8px">
          <Text lineHeight="tall" fontSize="md" color="white">
            Queue your post with a single click - or pick a time manually.
          </Text>
          <Center marginTop="25px">
          <CalendarIcon boxSize="20%" color="white"/>
          </Center>
        </CardBody>
      </Card>
    </SimpleGrid>
  </Container>)
}

export default SchedulingFeature;