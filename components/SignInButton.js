import { SignInButton, ClerkProvider } from "@clerk/nextjs";
import { ChakraProvider, Box, Button } from "@chakra-ui/react";

export default function SignInClerk() {
  return (
    <Box>
      <SignInButton mode="signIn" />
      <SignInButton mode="signUp" />
    </Box>
  );
}
