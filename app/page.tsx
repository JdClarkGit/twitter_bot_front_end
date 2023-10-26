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
import StatsGridWithImage from "@/components/landing/StatsGridWithImage";
import TopCta from "../components/landing/TopCta";
import Testimonials from "../components/landing/Testimonials"
import Faq from "../components/landing/Faq"

export default function Home() {
  return (
    <Box bgGradient="linear(to-br, black, blue.800, black)" position={'relative'}>
      <Navbar />

      <TopCta />

      <StatsGridWithImage />

      <SchedulingFeature />

      <Testimonials />

      {/* <Container
        minH={"200px"}
        maxW={"container.xl"}
        paddingBottom={"20px"}
        borderTop="1px solid black"
        textAlign="center"
      >

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
      </Container> */}

      <Faq/>

      <Container maxW={"container.xl"}>
        <BottomCta />
      </Container>

      <LandingPageFooter />
    </Box>
  );
}
