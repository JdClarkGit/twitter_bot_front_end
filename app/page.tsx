"use client";
import BaseDemoVideo from "@/components/BaseDemoVideo";
import TweetBotHeader from "@/components/TweetBotHeader";
import LogInBtn from "@/components/LogInBtn";
// import socialboostImage from "./Desktop/Socialboost/socialboostImage.png";
// import DemoLogo from "@components/DemoLogo";
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
import { CalendarIcon } from "@chakra-ui/icons";

import BottomCta from "../components/landing/bottomCta";
import LandingPageFooter from "../components/landing/footer";
import Navbar from "../components/landing/navbar";
import SchedulingFeature from "../components/landing/SchedulingFeature";

export default function Home() {
  return (
    <Box bgGradient="linear(to-br, black, blue.700, black)">
      <Navbar />

      <Container
        minH={"400px"}
        maxW={"container.lg"}
        paddingBottom={"20px"}
        paddingTop={"40px"}
      >
        <Text
          fontSize="5xl"
          color="white"
          lineHeight="tall"
          textAlign="left"
          fontWeight="bold"
        >
          Supercharge your Twitter growth and monetize your expanding audience.
        </Text>
        <br />
        <Text
          fontSize="5xl"
          color="white"
          lineHeight="tall"
          textAlign="left"
          fontWeight="bold"
        >
          Powered by AI
        </Text>
        <br />
        <Center>
          <Button
            color="black"
            bg="green.400"
            px={6}
            _hover={{
              bg: "green.800",
              color: "white",
            }}
            size="lg"
            paddingRight="40px"
            paddingLeft="40px"
          >
            Let's go!
          </Button>
        </Center>
        <Center marginTop="20px">
          <Link textAlign="left" color="white">
            Learn more.
          </Link>
        </Center>
      </Container>

      <SchedulingFeature />

      <Container minH={"450px"} maxW={"container.xl"} paddingBottom={"20px"}>
        <Box
          textAlign="center"
          paddingTop="20px"
          paddingBottom="40px"
          marginBottom="20px"
        >
          <Text
            fontSize="3xl"
            color="white"
            lineHeight="tall"
            textAlign="center"
            as="b"
          >
            Customers can't stop raving about their growth 🔥
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
                  <Text as="b">Customer</Text>
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
                  <Text as="b">Customer</Text>
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
                  <Text as="b">Customer</Text>
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
        minH={"200px"}
        maxW={"container.xl"}
        paddingBottom={"20px"}
        borderTop="1px solid black"
        borderBottom="1px solid black"
        textAlign="center"
      >
        <Container>
          <Button
            mt="3"
            color="black"
            bg="green.400"
            px={6}
            _hover={{
              bg: "green.800",
              color: "white",
            }}
            size="lg"
          >
            Start My Free Trial
          </Button>
          <Text color="#bdbdbd" mb="8">
            Cancel anytime
          </Text>
        </Container>
        <Text
          fontSize="3xl"
          color="white"
          lineHeight="tall"
          textAlign="center"
          as="b"
        >
          All the features you've been waiting for with Easy Engage
          <Text fontSize="md" mb="8">
            (and then some)
          </Text>
        </Text>
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(1, 1fr)"
          gap={1}
          textAlign="left"
        >
          <Container textAlign="left">
            <Text
              fontSize="2xl"
              color="#C6F6D4"
              lineHeight="tall"
              textAlign="left"
              as="b"
            >
              🚀 Content Curation with Idea Agent
              <Text
                fontSize="lg"
                align="left"
                color="#bdbdbd"
                fontWeight="normal"
                mb="8"
              >
                * Curated content from a library of millions, tailored to your
                niche.
                <br />
                * Dynamic search for topics, keywords, or influencers.
                <br />
                * Exclusion tools for specific keywords or sources.
                <br />
                * Tailored content suggestions, supercharged by AI.
                <br />
                * Seamless integration with ChatGPT for AI-powered content
                suggestions.
                <br />
                * Automated tweet re-writer for optimizing engagement.
                <br />
                * Curated thread suggestions and hooks, ensuring relevance.
                <br />
              </Text>
            </Text>
            <Container textAlign="left">
              <Text
                fontSize="2xl"
                color="#C6F6D4"
                lineHeight="tall"
                textAlign="center"
                as="b"
              >
                🗓 Scheduling & Automations with Research Agent
                <Text
                  fontSize="lg"
                  align="left"
                  color="#bdbdbd"
                  fontWeight="normal"
                  mb="8"
                >
                  * Schedule tweets, threads, and auto-responses.
                  <br />
                  * Rich media support - Emojis, GIFs, images, and videos.
                  <br />
                  * Quick queue system for efficient content planning.
                  <br />
                  * AI-driven insights into optimal tweeting times.
                  <br />
                  * Intuitive draft creation and management.
                  <br />
                  * Interaction-based auto DMs to maintain engagement.
                  <br />
                  * Automated promotions linking back to your products or
                  services.
                  <br />
                </Text>
              </Text>
            </Container>
            <Container textAlign="left">
              <Text
                fontSize="2xl"
                color="#C6F6D4"
                lineHeight="tall"
                textAlign="center"
                as="b"
              >
                🤝 Twitter CRM Integration
                <Text
                  fontSize="lg"
                  align="left"
                  color="#bdbdbd"
                  fontWeight="normal"
                  mb="8"
                >
                  * Introducing the NEW Lead Finder: Use AI to discover
                  potential leads on Twitter.
                  <br />
                  * Engage with audiences based on keywords or profiles.
                  <br />
                  * Smart filtering options to streamline your feed.
                  <br />
                  * Auto-responses crafted by AI.
                  <br />
                  * Organized lists based on interactions or imported data.
                  <br />
                  * Personal note features for every contact.
                  <br />
                </Text>
              </Text>
            </Container>
            <Container textAlign="left">
              <Text
                fontSize="2xl"
                color="#C6F6D4"
                lineHeight="tall"
                textAlign="center"
                as="b"
              >
                📊 Analytics Dashboard
                <Text
                  fontSize="lg"
                  align="left"
                  color="#bdbdbd"
                  fontWeight="normal"
                  mb="8"
                >
                  * Comprehensive insights into key performance metrics.
                  <br />
                  * Discover top-performing tweets and their impact.
                  <br />
                  * Monitor daily growth trends.
                  <br />
                  * Detailed analytics for every tweet.
                  <br />
                  * AI-powered tweet re-write suggestions.
                  <br />
                  * Full-fledged insights: impressions, clicks, engagements, and
                  more.
                  <br />
                  * Share your success stats (optional).
                  <br />
                </Text>
              </Text>
            </Container>

            <Container textAlign="left">
              <Text
                fontSize="2xl"
                color="#C6F6D4"
                lineHeight="tall"
                textAlign="center"
                as="b"
              >
                🔥 Extras for Maximum Utility
                <Text
                  fontSize="lg"
                  align="left"
                  color="#bdbdbd"
                  fontWeight="normal"
                >
                  * Multi-account management without additional costs.
                  <br />
                  * Ghostwriting features for client management.
                  <br />
                  * Preview links for seamless content sharing.
                  <br />
                </Text>
              </Text>
            </Container>
          </Container>
        </Grid>
      </Container>

      <Container
        minH={"300px"}
        maxW={"container.xl"}
        paddingBottom={"20px"}
        borderTop="1px solid black"
        borderBottom="1px solid black"
      >
        <Container>
          <Button
            mt="3"
            color="black"
            bg="green.400"
            textAlign="center"
            px={6}
            _hover={{
              bg: "green.800",
              color: "white",
            }}
            size="lg"
          >
            Let's Build My Brand
          </Button>
          <Text color="#bdbdbd" mb="8">
            Cancel anytime
          </Text>
        </Container>
        <Container mb="8">
          <Text
            fontSize="5xl"
            color="#47BB78"
            lineHeight="tall"
            textAlign="left"
            as="b"
          >
            FAQ
          </Text>
        </Container>
        <Container mb="8">
          <Text
            mt="0"
            mb="0"
            fontSize="30px"
            as="b"
            color="white"
            lineHeight="24px"
          >
            What is Easy Engage?
          </Text>

          <Text
            fontSize="sm"
            color="#bdbdbd"
            lineHeight="tall"
            textAlign="left"
          >
            Easy Engage is a cutting-edge platform that uses the advanced
            capabilities of ChatGPT4 and LLM to autonomously post tweets or
            threads on any subject matter to your Twitter account. With features
            to automate, schedule, and curate content tailored to your mental
            models, audience, and preferences, Easy Engage is the ultimate tool
            for active Twitter users looking to elevate their online presence.
          </Text>
        </Container>
        <Container mb="8">
          <Text
            mt="0"
            mb="0"
            fontSize="30px"
            as="b"
            color="white"
            lineHeight="24px"
            textAlign="center"
          >
            Who is Easy Engage For?
          </Text>
          <Text
            fontSize="sm"
            color="#bdbdbd"
            lineHeight="tall"
            textAlign="left"
          >
            Easy Engage is designed for individuals, influencers, brands, and
            businesses that want to maintain a consistent and impactful presence
            on Twitter without the constant manual effort. Whether you're
            looking to engage with your audience, share expertise, or grow your
            followers, Easy Engage is here to help.
          </Text>
        </Container>

        <Container mb="8">
          <Text
            mt="0"
            mb="0"
            fontSize="30px"
            as="b"
            color="white"
            lineHeight="24px"
            textAlign="center"
          >
            How does the idea agent work?
          </Text>
          <Text
            fontSize="sm"
            color="#bdbdbd"
            lineHeight="tall"
            textAlign="left"
          >
            The idea agent operates by harnessing the power of a vast database.
            It collates and processes information from the research agent, which
            scrapes relevant data from the web. Using this data, the idea agent
            generates unique and engaging ideas tailored to your audience and
            preferences.
          </Text>
        </Container>
        <Container mb="8">
          <Text
            mt="0"
            mb="0"
            fontSize="30px"
            as="b"
            color="white"
            lineHeight="24px"
            textAlign="center"
          >
            How does the research agent work?
          </Text>
          <Text
            fontSize="sm"
            color="#bdbdbd"
            lineHeight="tall"
            textAlign="left"
          >
            The research agent is a sophisticated tool that scours the web for
            relevant content based on your preferences, industry trends, and
            audience interests. It pulls this information into our system,
            ensuring that the ideas and content generated are up-to-date and
            resonant.
          </Text>
        </Container>

        <Container mb="8">
          <Text
            mt="0"
            mb="0"
            fontSize="30px"
            as="b"
            color="white"
            lineHeight="24px"
            textAlign="center"
          >
            Does the autonomous posting meet Twitter requirements?
          </Text>
          <Text
            fontSize="sm"
            color="#bdbdbd"
            lineHeight="tall"
            textAlign="left"
          >
            Absolutely. We've designed Easy Engage to be fully compliant with
            Twitter's terms of service and API usage guidelines. Our platform
            ensures that all posts adhere to these requirements while delivering
            quality content to your audience.
          </Text>
        </Container>

        <Container mb="8">
          <Text
            mt="0"
            mb="0"
            fontSize="30px"
            as="b"
            color="white"
            lineHeight="24px"
            textAlign="center"
          >
            How much can Easy Engage help me grow my social media presence?
          </Text>
          <Text
            fontSize="sm"
            color="#bdbdbd"
            lineHeight="tall"
            textAlign="left"
          >
            With consistent, relevant, and engaging content, Easy Engage can
            significantly boost your Twitter presence. By automating the content
            creation process, you can maintain a steady stream of posts, leading
            to increased engagement, more followers, and a stronger online
            brand.
          </Text>
        </Container>

        <Container mb="8">
          <Text
            mt="0"
            mb="0"
            fontSize="30px"
            as="b"
            color="white"
            lineHeight="24px"
            textAlign="center"
          >
            What if it doesn’t work for me?
          </Text>
          <Text
            fontSize="sm"
            color="#bdbdbd"
            lineHeight="tall"
            textAlign="left"
          >
            We understand that every individual and brand has unique needs. If
            Easy Engage doesn't meet your expectations, we're committed to
            working closely with you to refine the platform to better suit your
            requirements or address any concerns you may have.
          </Text>
        </Container>
        <Container mb="8">
          <Text
            mt="0"
            mb="0"
            fontSize="30px"
            as="b"
            color="white"
            lineHeight="24px"
            textAlign="center"
          >
            Will all of my tweets be authentic?
          </Text>
          <Text
            fontSize="sm"
            color="#bdbdbd"
            lineHeight="tall"
            textAlign="left"
          >
            Yes. While Easy Engage automates the content generation process, the
            tweets are still tailored to your mental models, audience, and
            preferences. This ensures that the content remains authentic to your
            voice and brand identity.
          </Text>
        </Container>

        <Container mb="8">
          <Text
            mt="0"
            mb="0"
            fontSize="30px"
            as="b"
            color="white"
            lineHeight="24px"
            textAlign="center"
          >
            How does Easy Engage make new tweets that replicate who I am?
          </Text>
          <Text
            fontSize="sm"
            color="#bdbdbd"
            lineHeight="tall"
            textAlign="left"
          >
            Easy Engage uses advanced algorithms and AI technology to understand
            your preferences, past tweets, and audience engagement. By analyzing
            this data, it crafts tweets that align with your personality, tone,
            and brand, ensuring authenticity in every post.
          </Text>
        </Container>

        <Container mb="8">
          <Text
            mt="0"
            mb="0"
            fontSize="30px"
            as="b"
            color="white"
            lineHeight="24px"
            textAlign="center"
          >
            Is this safe to use?
          </Text>
          <Text
            fontSize="sm"
            color="#bdbdbd"
            lineHeight="tall"
            textAlign="left"
          >
            Your safety and security are our top priorities. Easy Engage uses
            state-of-the-art encryption and security measures to ensure that
            your data and account credentials are protected. Furthermore, we
            strictly adhere to Twitter's API usage guidelines and never share
            your information with third parties.
          </Text>
        </Container>

        <Container mb="8">
          <Text
            mt="0"
            mb="0"
            fontSize="30px"
            as="b"
            color="white"
            lineHeight="24px"
            textAlign="center"
          >
            What should I do to get more Twitter followers?
          </Text>
          <Text
            fontSize="sm"
            color="#bdbdbd"
            lineHeight="tall"
            textAlign="left"
          >
            Using Easy Engage is a great start! Regularly posting engaging and
            relevant content can significantly boost your followers. Engage with
            your audience, participate in trending conversations, and use the
            platform's analytics to refine your content strategy. Remember,
            consistency is key, and with Easy Engage, you have a powerful ally
            in your growth journey.
          </Text>
        </Container>
      </Container>

      <Container maxW={"container.xl"}>
        <BottomCta />
      </Container>

      <LandingPageFooter />
    </Box>
  );
}
