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
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

const features = [
  {
    id: 0,
    title: 'Schedule with one-click.',
    text: 'Queue your post with a single click, or a pick a time manually.',
  },
  {
    id: 1,
    title: 'Pick the perfect time.',
    text: 'Time each post to perfection with our propriety analytics engine.',
  },
  {
    id: 2,
    title: 'Boost your content.',
    text: 'Automatically retweet or quote-tweet your posts at the optimal time for increased engagement.',
  },
  {
    id: 3,
    title: 'Don\'t know what to put here.',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  }
]



export default function GridListWithHeading() {
  return (
    <Box p={4} marginTop="40px" marginBottom="40px">
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'5xl'} fontWeight='bold' color='white'>Queue your content in seconds.</Heading>
        <Text color='white' fontSize={'xl'}>
          Write, schedule, and boost your tweets - with no need for extra apps.
        </Text>
      </Stack>

      <Container maxW={'3xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={20}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'#26a7de'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={'bold'} color="white">{feature.title}</Text>
                <Text color={'gray.300'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}