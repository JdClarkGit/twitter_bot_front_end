import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faSearch); // Adds the search icon to the library
import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

export default function DashboardPage() {
  const menuItems = [
    { alt: "Home", src: "/path/to/notes-logo.png", href: null },
    { alt: "Create", src: "/path/to/image.png", href: "/create" },
    { alt: "Notes", src: "/path/to/notes-logo.png", href: "/notes" },
    { alt: "Profile", src: "/path/to/notes-logo.png", href: "/profile" },
    { alt: "Settings", src: "/path/to/image.png", href: "/settings" },
    { alt: "Log Out", src: "/path/to/image.png", href: "/" },
  ];

  return (
    <Flex height="100vh" width="100vw" backgroundColor="white">
      {/* Sidebar Menu */}
      <Box width="250px" paddingY={5}>
        {menuItems.map((item, index) => (
          <Box key={index} mb={3} textAlign="center">
            {item.href ? (
              <LinkBox as="div">
                <LinkOverlay as={Link} href={item.href}>
                  {item.alt}
                </LinkOverlay>
              </LinkBox>
            ) : (
              <Button variant="ghost">{item.alt}</Button>
            )}
          </Box>
        ))}
      </Box>

      {/* Dashboard Content */}
      <Box flex="1" p={5}>
        {/* Header Area */}
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Heading as="h2" size="lg">
            Dashboard
          </Heading>
          <Box>
            <Button variant="ghost" mr={3}>
              🔔
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
            {/* FontAwesome icon can be placed here if desired */}
          </Box>
        </Flex>

        {/* Main Content Area */}
        <Flex wrap="wrap" gap={6} mt={4}>
          {/* CRM Link */}
          <LinkBox
            as="div"
            w="1/2" // <-- Adjusted width here
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            textAlign="center"
            _hover={{ bgColor: "white", color: "#256861", cursor: "pointer" }}
            bg="#256861"
            color="white"
          >
            <LinkOverlay as={Link} href="/create" size="md">
              CRM Dashboard
            </LinkOverlay>
          </LinkBox>

          {/* Recent Notes */}
          <LinkBox
            as="div"
            w="1/3"
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            textAlign="center"
            _hover={{ bgColor: "white", color: "#256861", cursor: "pointer" }}
            bg="#256861"
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
        {/* ... */}
      </Box>
    </Flex>
  );
}
