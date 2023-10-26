'use client'

import { ReactNode } from 'react'
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react'

export default function StatsGridWithImage() {
  return (
    <Box position={'relative'} marginTop="40px">
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('https://shreepng.com/img/Inside/Nature/Earth/planet%20earth%203d%20model.png')"
        backgroundSize={'cover'}        backgroundPosition="left"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={-200}
        >
        <Flex
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Technology
              </Text>
              <Heading color={'white'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                Content Curation with our Proprietary Idea Agent
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                The NewLife™ technology allows you to monitor your crops and get complete
                insights at real time. The proprietary software/hardware ecosystem
                prevents your plants from getting neglected.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  )
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
)

const stats = [
  {
    title: '15 Million +',
    content: (
      <>
        <StatsText>past viral tweets</StatsText> in our library, tailored to your niche.
      </>
    ),
  },
  {
    title: 'Seamless',
    content: (
      <>
        <StatsText>Integration</StatsText> with OpenAI v4.0 for AI-powered content curation, targeted at your niche.
      </>
    ),
  },
  {
    title: 'Dynamic search',
    content: (
      <>
        for writing in the style of specific influencers - including <StatsText>yourself</StatsText>. Maintain your authenticity.
      </>
    ),
  },
  {
    title: 'Original',
    content: (
      <>
        <StatsText>Non-recycled</StatsText> tweets, written in your style. Don't beat a dead horse trying to grow your audience.
      </>
    ),
  },
]