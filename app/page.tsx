import BaseDemoVideo from "@/components/BaseDemoVideo";
import TweetBotHeader from "@/components/TweetBotHeader";
import LogInBtn from "@/components/LogInBtn";
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
} from "@chakra-ui/react";

import BottomCta from "../components/landing/bottomCta";
import LandingPageFooter from "../components/landing/footer";
import Navbar from "../components/landing/navbar";

export default function Home() {
  return (
    <div className="w-full h-screen text-sm bg-white flex flex-col justify-start items-start">
      <Navbar />

      <Container minH={"400px"} maxW={"container.xl"} paddingBottom={"20px"}>
        <Text
          fontSize="3xl"
          color="black"
          lineHeight="tall"
          textAlign="left"
          fontWeight="bold"
        >
          Effortlessly create engaging tweets
        </Text>
        <Text
          fontSize="3xl"
          color="black"
          lineHeight="tall"
          textAlign="left"
          fontWeight="bold"
        >
          and threads while preserving your authentic
        </Text>
        <Text
          fontSize="3xl"
          color="black"
          lineHeight="tall"
          textAlign="left"
          fontWeight="bold"
        >
          writing style.
        </Text>
        <Text
          fontSize="lg"
          color="black"
          lineHeight="tall"
          textAlign="left"
          fontWeight="bold"
        >
          Say goodbye to writer’s block and say hello to an endless stream of
        </Text>
        <Text
          fontSize="lg"
          color="black"
          lineHeight="tall"
          textAlign="left"
          fontWeight="bold"
        >
          content to build your following.
        </Text>
        <Button
          color="black"
          bg="blue.400"
          border="1px"
          px={6}
          _hover={{
            bg: "green.800",
            color: "white",
          }}
        >
          Build My Audience!
        </Button>
      </Container>

      <Container
        minH={"270px"}
        maxW={"container.xl"}
        paddingBottom={"20px"}
        borderTop="1px solid black"
        borderBottom="1px solid black"
      >
        <Text
          fontSize="3xl"
          color="black"
          lineHeight="tall"
          textAlign="center"
          as="b"
        >
          TODO: Diagram about how this shit works
        </Text>
      </Container>

      <Container minH={"450px"} maxW={"container.xl"} paddingBottom={"20px"}>
        <Box
          textAlign="center"
          paddingTop="20px"
          paddingBottom="40px"
          marginBottom="20px"
        >
          <Text
            fontSize="3xl"
            color="black"
            lineHeight="tall"
            textAlign="center"
            as="b"
          >
            🔥 Customers can't stop raving about their growth
          </Text>
        </Box>

        {/* TODO: refactor these review cards to be their own component */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing="40px"
          marginTop="20px"
        >
          <Card>
            <CardHeader marginBottom={"1px"} paddingBottom="8px">
              <Heading size="lg">⭐ ⭐ ⭐ ⭐ ⭐</Heading>
            </CardHeader>
            <CardBody marginTop={"1px"} paddingTop="8px">
              <Text lineHeight="tall" fontSize="md">
                Photo AI is just fantastic! I take amazing photos of my wife,
                family and friends. As a photographer I use it to test ideas
                before creating a real photoshoot. I strongly recommend
              </Text>
            </CardBody>
            <Divider color="gray" />
            <CardFooter>
              <Flex width="100%">
                <Box flex="1">
                  <Text as="b">Adolf H.</Text>
                </Box>
                <Spacer />
                <Box>
                  <Badge ml="1" colorScheme="green">
                    VERIFIED PURCHASE
                  </Badge>
                </Box>
              </Flex>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader marginBottom={"1px"} paddingBottom="8px">
              <Heading size="lg">⭐ ⭐ ⭐ ⭐ ⭐</Heading>
            </CardHeader>
            <CardBody marginTop={"1px"} paddingTop="8px">
              <Text lineHeight="tall" fontSize="md">
                Cool AI tool for image generation! I could create a lot of truly
                amazing pictures in different locations with different outfits!
                All my friends were surprised and loved my pictures!
              </Text>
            </CardBody>
            <Divider color="gray" />
            <CardFooter>
              <Flex width="100%">
                <Box flex="1">
                  <Text as="b">Adolf H.</Text>
                </Box>
                <Spacer />
                <Box>
                  <Badge ml="1" colorScheme="green">
                    VERIFIED PURCHASE
                  </Badge>
                </Box>
              </Flex>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader marginBottom={"1px"} paddingBottom="8px">
              <Heading size="lg">⭐ ⭐ ⭐ ⭐ ⭐</Heading>
            </CardHeader>
            <CardBody marginTop={"1px"} paddingTop="8px">
              <Text lineHeight="tall" fontSize="md">
                Good input = good output. Very fun! Took me some effort to get
                the models to feel accurate but once I got the right input it
                was amazing. Photo AI was very responsive to my questions.
              </Text>
            </CardBody>
            <Divider color="gray" />
            <CardFooter>
              <Flex width="100%">
                <Box flex="1">
                  <Text as="b">Adolf H.</Text>
                </Box>
                <Spacer />
                <Box>
                  <Badge ml="1" colorScheme="green">
                    VERIFIED PURCHASE
                  </Badge>
                </Box>
              </Flex>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>

      <Container
        minH={"300px"}
        maxW={"container.xl"}
        paddingBottom={"20px"}
        borderTop="1px solid black"
        borderBottom="1px solid black"
      >
        <Text
          fontSize="3xl"
          color="black"
          lineHeight="tall"
          textAlign="center"
          as="b"
        >
          TODO: Pitch section
        </Text>
      </Container>

      <Container maxW={"container.xl"}>
        <BottomCta />
      </Container>

      <LandingPageFooter />
    </div>
  );
}
