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
  import { CalendarIcon, TimeIcon, LinkIcon } from "@chakra-ui/icons";

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
      <Card boxShadow="4px 4px 8px rgba(255, 255, 255, 0.5)" background="none" borderColor="gray.300" borderWidth="0.5px" _hover={{
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
          <CalendarIcon boxSize="20%" color="green.400"/>
          </Center>
        </CardBody>
      </Card>

      <Card boxShadow="4px 4px 8px rgba(255, 255, 255, 0.5)" background="none" borderColor="gray.300" borderWidth="0.5px" _hover={{
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
          <Heading size="lg" color="white">Pick the perfect time.</Heading>
        </CardHeader>
        <CardBody marginTop={"1px"} paddingTop="8px">
          <Text lineHeight="tall" fontSize="md" color="white">
            Time each post to perfection using our performance analytics.
          </Text>
          <Center marginTop="25px">
          <TimeIcon boxSize="20%" color="green.400"/>
          </Center>
        </CardBody>
      </Card>

      <Card boxShadow="4px 4px 8px rgba(255, 255, 255, 0.5)" background="none" borderColor="gray.300" borderWidth="0.5px" _hover={{
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
          <Heading size="lg" color="white">Boost your content.</Heading>
        </CardHeader>
        <CardBody marginTop={"1px"} paddingTop="8px">
          <Text lineHeight="tall" fontSize="md" color="white">
            Automatically retweet and plug your posts for boosted engagement.
          </Text>
          <Center marginTop="25px">
          <LinkIcon boxSize="20%" color="green.400"/>
          </Center>
        </CardBody>
      </Card>
    </SimpleGrid>
  </Container>)
}

export default SchedulingFeature;