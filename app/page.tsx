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
import Testimonials from "../components/landing/Testimonials";
import Faq from "../components/landing/Faq";

export default function Home() {
  return (
    <Box
      bgGradient="linear(to-br, black, blue.800, black)"
      position={"relative"}
      minWidth="100vw" // Ensure gradient covers the entire viewport width
      overflowX="hidden" // Potentially prevent horizontal scroll
    >
      <Navbar />

      <TopCta />

      <StatsGridWithImage />

      <SchedulingFeature />

      <Testimonials />

      <Faq />

      <Container maxW={"container.xl"}>
        <BottomCta />
      </Container>

      <LandingPageFooter />
    </Box>
  );
}
