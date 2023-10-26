'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Center
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

const faq_data = [
    {
      "title": "What is Easy Engage?",
      "subtitle": "Easy Engage is a cutting-edge platform that uses the advanced capabilities of ChatGPT4 and LLM to autonomously post tweets or threads on any subject matter to your Twitter account. With features to automate, schedule, and curate content tailored to your mental models, audience, and preferences, Easy Engage is the ultimate tool for active Twitter users looking to elevate their online presence."
    },
    {
      "title": "Who is Easy Engage For?",
      "subtitle": "Easy Engage is designed for individuals, influencers, brands, and businesses that want to maintain a consistent and impactful presence on Twitter without the constant manual effort. Whether you're looking to engage with your audience, share expertise, or grow your followers, Easy Engage is here to help."
    },
    {
      "title": "How does the idea agent work?",
      "subtitle": "The idea agent operates by harnessing the power of a vast database. It collates and processes information from the research agent, which scrapes relevant data from the web. Using this data, the idea agent generates unique and engaging ideas tailored to your audience and preferences."
    },
    {
      "title": "How does the research agent work?",
      "subtitle": "The research agent is a sophisticated tool that scours the web for relevant content based on your preferences, industry trends, and audience interests. It pulls this information into our system, ensuring that the ideas and content generated are up-to-date and resonant."
    },
    {
      "title": "Does the autonomous posting meet Twitter requirements?",
      "subtitle": "Absolutely. We've designed Easy Engage to be fully compliant with Twitter's terms of service and API usage guidelines. Our platform ensures that all posts adhere to these requirements while delivering quality content to your audience."
    },
    {
      "title": "How much can Easy Engage help me grow my social media presence?",
      "subtitle": "With consistent, relevant, and engaging content, Easy Engage can significantly boost your Twitter presence. By automating the content creation process, you can maintain a steady stream of posts, leading to increased engagement, more followers, and a stronger online brand."
    },
    {
      "title": "What if it doesn’t work for me?",
      "subtitle": "We understand that every individual and brand has unique needs. If Easy Engage doesn't meet your expectations, we're committed to working closely with you to refine the platform to better suit your requirements or address any concerns you may have."
    },
    {
      "title": "Will all of my tweets be authentic?",
      "subtitle": "Yes. While Easy Engage automates the content generation process, the tweets are still tailored to your mental models, audience, and preferences. This ensures that the content remains authentic to your voice and brand identity."
    },
    {
      "title": "How does Easy Engage make new tweets that replicate who I am?",
      "subtitle": "Easy Engage uses advanced algorithms and AI technology to understand your preferences, past tweets, and audience engagement. By analyzing this data, it crafts tweets that align with your personality, tone, and brand, ensuring authenticity in every post."
    },
    {
      "title": "Is this safe to use?",
      "subtitle": "Your safety and security are our top priorities. Easy Engage uses state-of-the-art encryption and security measures to ensure that your data and account credentials are protected. Furthermore, we strictly adhere to Twitter's API usage guidelines and never share your information with third parties."
    },
    {
      "title": "What should I do to get more Twitter followers?",
      "subtitle": "Using Easy Engage is a great start! Regularly posting engaging and relevant content can significantly boost your followers. Engage with your audience, participate in trending conversations, and use the platform's analytics to refine your content strategy. Remember, consistency is key, and with Easy Engage, you have a powerful ally in your growth journey."
    }
  ]
  
export default function Faq() {
  return (      <Container
    minH={"300px"}
    maxW={"container.xl"}
    paddingBottom={"20px"}
  >
    <Center><Text fontSize="6xl" color="#26a7de" fontWeight="bold" fontFamily="heading" marginBottom="20px">FAQ</Text></Center>
    {faq_data.map((item, index) => (
        <Container key={index} mb="8" maxW="container.md">
          <Text
            mt="0"
            mb="0"
            fontSize="30px"
            as="b"
            color="white"
            lineHeight="24px"
            textAlign="center"
          >
            {item.title}
          </Text>
          <Text
            marginTop="20px"
            fontSize="sm"
            color="#bdbdbd"
            lineHeight="tall"
            textAlign="left"
          >
            {item.subtitle}
          </Text>
        </Container>
      ))}
      </Container>
  )
}