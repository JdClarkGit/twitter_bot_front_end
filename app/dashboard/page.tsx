"use client";

import React, { useContext, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlus,
  faFileAlt,
  faUser,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faPlus, faFileAlt, faUser, faCog, faSignOutAlt);
library.add(faSearch); // Adds the search icon to the library
import Link from "next/link";
import {
  Box,
  Badge,
  Button,
  Flex,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Text,
  Divider,
  Heading,
  Input,
  LinkBox,
  LinkOverlay,
  Spacer,
} from "@chakra-ui/react";

import { useUser } from "@clerk/nextjs";
import { AuthContext } from "@/providers/AuthContext";

export default function DashboardPage() {
  const [inputValue, setInputValue] = useState("");
  const menuItems = [
    { alt: "", icon: faHome, href: null },
    { alt: "", icon: faPlus, href: "/create" },
    { alt: "", icon: faFileAlt, href: "/notes" },
    { alt: "", icon: faUser, href: "/profile" },
    { alt: "", icon: faCog, href: "/settings" },
    { alt: "", icon: faSignOutAlt, href: "/" },
  ];

  const user = useUser();
  const userId = useContext(AuthContext);

  console.log(userId);

  console.log(user?.user);

  return (
    <Flex
      height="100vh"
      width="100vw"
      bgGradient="linear(to-br, black, blue.700, black)"
    >
      {/* Sidebar Menu */}
      <Box
        height="100%"
        width="150px"
        paddingY={5}
        borderRight="1px solid gray "
      >
        {menuItems.map((item, index) => (
          <Box key={index} mb={2} textAlign="center">
            {item.href ? (
              <Button
                variant="ghost"
                size="lg"
                background="none"
                cursor="pointer"
                color="white"
                width="100px"
                height="100px"
                _hover={{
                  bgColor: "#2976B8",
                  cursor: "pointer",
                }}
              >
                {/* <FontAwesomeIcon icon={item.icon} size="2x" className="mr-2" /> */}
                <LinkOverlay as={Link} href={item.href}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    size="xl"
                    className="mr-2"
                  />
                  {item.alt}
                </LinkOverlay>
              </Button>
            ) : (
              <Button
                variant="ghost"
                background="none"
                size="lg"
                cursor="pointer"
                color="white"
                width="100px"
                height="100px"
                _hover={{
                  bgColor: "#2976B8",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <LinkOverlay>
                  <FontAwesomeIcon
                    icon={item.icon}
                    size="sm"
                    className="mr-2"
                  />
                  {item.alt}
                </LinkOverlay>
              </Button>
            )}
          </Box>
        ))}
      </Box>

      {/* Dashboard Content */}
      <Box flex="1" p={5}>
        {/* Header Area */}
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Heading as="h2" size="md" color="white" textAlign="center">
            Hello {user?.user?.firstName} 👋! Welcome to tour dashboard. Let's
            leverage AI to grow your brand, without the hassle.
          </Heading>
          <Box>
            <Button variant="ghost" mr={3}>
              🔔 Notifications
            </Button>{" "}
            {/* Notification Icon */}
            <Input
              type="text"
              placeholder="Search..."
              variant="filled"
              rounded="lg"
              paddingLeft="40px"
              maxWidth="300px"
            />
          </Box>
        </Flex>

        {/* Main Content Area */}
        <Flex wrap="wrap" gap={6} mt={4} justifyContent="center">
          {/* CRM Link */}
          <LinkBox
            as="div"
            w="30%"
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            textAlign="center"
            _hover={{ bgColor: "white", color: "#256861", cursor: "pointer" }}
            bg="#2976B8"
            color="white"
          >
            <Heading size="md">
              <LinkOverlay
                as={Link}
                href="/create"
                color="white"
                _hover={{ color: "black" }}
              >
                CRM Dashboard
              </LinkOverlay>
            </Heading>
          </LinkBox>

          {/* Recent Notes */}
          <LinkBox
            as="div"
            w="30%"
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            textAlign="center"
            _hover={{ bgColor: "black", color: "white", cursor: "pointer" }}
            bg="#2976B8"
            color="white"
          >
            <Heading size="md" mb={3}>
              Recent Notes
            </Heading>
            <LinkOverlay as={Link} href="/notes">
              View All
            </LinkOverlay>
          </LinkBox>

          {/* Other cards can follow in similar fashion */}
        </Flex>

        {/* Footer Area (if needed) */}
        <Heading
          mt={40}
          mb={20}
          as="h3"
          size="lg"
          color="white"
          textAlign="center"
        >
          AI generated Tweet ideas 💡 for you based on your previous content
        </Heading>
        {/* bgGradient="linear(to-br, black, blue.700, black) */}
        <Card width="30%" marginRight="2rem">
          <CardHeader marginBottom={"1px"} paddingBottom="8px">
            <Heading size="lg">AI Generated Topic # 1</Heading>
          </CardHeader>
          <CardBody marginTop={"1px"} paddingTop="8px">
            <Text lineHeight="tall" fontSize="md">
              Idea 1
            </Text>
            <Button
              bg="#2976B8"
              mb={5}
              onClick={() => setInputValue("Default feedback message.")}
            >
              Edit
            </Button>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Feedback..."
            />
          </CardBody>
          <Divider color="white" />
          <CardFooter>
            <Flex width="30%">
              <Box flex="1">
                <Button
                  background="#2976B8"
                  as="b"
                  _hover={{
                    bgColor: "white",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  Tweet!
                </Button>
              </Box>
              <Spacer />
              <Box>
                <Badge ml="2" colorScheme="green">
                  Verified Original
                </Badge>
              </Box>
            </Flex>
          </CardFooter>
        </Card>
        <Card width="30%">
          <CardHeader marginBottom={"1px"} paddingBottom="8px">
            <Heading size="lg">AI Generated Topic # 1</Heading>
          </CardHeader>
          <CardBody marginTop={"1px"} paddingTop="8px">
            <Text lineHeight="tall" fontSize="md">
              Idea 1
            </Text>
            <Button
              bg="#2976B8"
              mb={5}
              onClick={() => setInputValue("Default feedback message.")}
            >
              Edit
            </Button>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Feedback..."
            />
          </CardBody>
          <Divider color="white" />
          <CardFooter>
            <Flex width="30%">
              <Box flex="1">
                <Button
                  background="#2976B8"
                  as="b"
                  _hover={{
                    bgColor: "white",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  Tweet!
                </Button>
              </Box>
              <Spacer />
              <Box>
                <Badge ml="2" colorScheme="green">
                  Verified Original
                </Badge>
              </Box>
            </Flex>
          </CardFooter>
        </Card>

        {/* ... */}
      </Box>
    </Flex>
  );
}
