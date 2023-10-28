"use strict";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      width="100vw"
      position="sticky"
      top="0"
      zIndex="100"
      bgGradient="linear(to-r, black 10%, blue.800 90%)"
    >
      <Flex
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.900"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={"white"}
            fontSize="3xl"
          >
            EasyEngage.ai
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"/dashboard"}
            color="white"
          >
            Log In
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            colorScheme="twitter"
            href={"/signup"}
            _hover={{
              backgroundColor: "white",
              color: "blue",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={
                  navItem.label === "Inspiration" ||
                  navItem.label === "Benefits"
                    ? "#3BA1F2"
                    : "#3BA1F2"
                }
                borderColor={
                  navItem.label === "Inspiration" ||
                  navItem.label === "Benefits"
                    ? "#2976B8"
                    : "white"
                }
                _hover={{
                  textDecoration: "none",
                  color:
                    navItem.label === "Inspiration" ||
                    navItem.label === "Benefits"
                      ? "white"
                      : linkHoverColor,
                  borderColor:
                    navItem.label === "Inspiration" ||
                    navItem.label === "Benefits"
                      ? "white"
                      : "transparent",
                }}
                h="100%"
                display="flex"
                alignItems="center"
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({
  label,
  href,
  subLabel,
}: {
  label: string;
  href: string;
  subLabel?: string;
}) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("purple.200", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box background="white" p={1} borderRadius="md">
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "purple.400" }}
            fontWeight={500}
            color="#26a7de"
          >
            {label}
          </Text>
          <Text fontSize={"sm"} color={"purple"}>
            {subLabel || ""}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"purple.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Button}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0.5rem" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
          fontSize={"sm"}
        >
          {children &&
            children.map((child: NavItem) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.newItem && (
                  <Text
                    color={useColorModeValue("blue.800", "blue.200")}
                    mr={2}
                  >
                    NEW
                  </Text>
                )}
                <Box display="flex" alignItems="center">
                  <Text
                    href={child.href}
                    as="a"
                    display="block"
                    transition="all 0.2s"
                    _hover={{ color: "gray.500" }}
                    fontWeight="600"
                  >
                    {child.label}
                  </Text>
                  {child.subLabel && (
                    <Text
                      color={useColorModeValue("blue.800", "blue.200")}
                      ml={2}
                    >
                      {child.subLabel}
                    </Text>
                  )}
                </Box>
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inspiration",
    children: [
      {
        label: "See a Product Demo",
        subLabel: "See a demo of EasyEngage.ai's capabilities",
        href: "#",
      },
      {
        label: "Success stories",
        subLabel: "Discover how businesses thrive with EasyEngage.ai",
        href: "#",
      },
    ],
  },
  {
    label: "Benefits",
    children: [
      {
        label: "Gain more followers",
        subLabel: "Let EasyEngage.ai's AI agent enhance your online presence",
        href: "#",
      },
      {
        label: "Be yourself",
        subLabel: "Experience genuine content creation without redundancy",
        href: "#",
      },
    ],
  },
  {
    label: "Products",
    children: [
      {
        label: "Product A",
        subLabel: "Discover the benefits of Product A",
        href: "#",
      },
      {
        label: "Product B",
        subLabel: "Learn how Product B can enhance your business",
        href: "#",
      },
    ],
  },
  {
    label: "Company",
    children: [
      {
        label: "About Us",
        subLabel: "Learn more about EasyEngage.ai",
        href: "#",
      },
      {
        label: "Careers",
        subLabel: "Join our passionate team",
        href: "#",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "#",
  },
];
