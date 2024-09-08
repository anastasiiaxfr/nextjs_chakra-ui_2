import Head from "next/head";
import { Box, Text, ListItem, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>★Biccas | by Xforeal★</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main">
        <Box as="article" py={{ base: 10, sm: 20 }}>
          <Container>
            <Box as="h1" textStyle="h2" mb={8} color={useColorModeValue("text.dark.0", "white")}>
              Terms of Service
            </Box>
            <Box as="h2" textStyle="heading2" color={useColorModeValue("text.dark.0", "white")}>
              Welcome to Biccas
            </Box>
            <Text>
              At Biccas, we are committed to enhancing your productivity by helping you organize and manage your work
              more effectively using our Dashboard. By accessing or using Biccas, you agree to comply with the following
              terms and conditions.
            </Text>
            <Box as="h2" textStyle="heading2" color={useColorModeValue("text.dark.0", "white")}>
              1. Acceptance of Terms
            </Box>
            <Text>
              By using Biccas, you confirm that you have read, understood, and agreed to these Terms of Service and our
              Privacy Policy. If you do not agree with these terms, please refrain from using our services.
            </Text>
            <Box as="h2" textStyle="heading2" color={useColorModeValue("text.dark.0", "white")}>
              2. Services Provided
            </Box>
            <Text>
              Biccas offers a comprehensive suite of tools designed to streamline task and project management. Our
              features include:
            </Text>
            <UnorderedList>
              <ListItem>Task creation and management</ListItem>
              <ListItem>Project tracking</ListItem>
              <ListItem>Daily work organization tools</ListItem>
              <ListItem>Advanced productivity features</ListItem>
            </UnorderedList>
            <Box as="h2" textStyle="heading2" color={useColorModeValue("text.dark.0", "white")}>
              3. User Responsibilities
            </Box>
            <Text>As a Biccas user, you agree to:</Text>
            Use the service solely for lawful purposes and in accordance with these Terms. Provide accurate and complete
            information when creating your account. Protect your account credentials and immediately report any
            unauthorized use. Respect the intellectual property rights of Biccas and other users.
            <Box as="h2" textStyle="heading2" color={useColorModeValue("text.dark.0", "white")}>
              4. Prohibited Activities
            </Box>
            <Text>You agree not to:</Text>
            <UnorderedList>
              <ListItem>Engage in activities that disrupt or interfere with the Biccas Dashboard.</ListItem>
              <ListItem> Use the service to distribute malicious software or harmful components.</ListItem>
              <ListItem> Attempt unauthorized access to any part of Biccas or its infrastructure.</ListItem>
            </UnorderedList>
            <Box as="h2" textStyle="heading2" color={useColorModeValue("text.dark.0", "white")}>
              5. Termination of Service
            </Box>
            <Text>
              We reserve the right to suspend or terminate your access to Biccas if we believe you have violated these
              Terms of Service. You may also terminate your use of our service at any time by discontinuing use and
              closing your account.
            </Text>
            <Box as="h2" textStyle="heading2" color={useColorModeValue("text.dark.0", "white")}>
              6. Changes to Terms
            </Box>
            <Text>
              Biccas may update these Terms of Service at any time. We will notify you of significant changes by posting
              the updated terms on our website. Continued use of Biccas after such changes constitutes acceptance of the
              new terms.
            </Text>
            <Box as="h2" textStyle="heading2" color={useColorModeValue("text.dark.0", "white")}>
              7. Limitation of Liability
            </Box>
            <Text>
              Biccas is provided on an &quot;as-is&quot; basis without any warranties. We do not guarantee the accuracy or
              completeness of the information provided and are not liable for any damages arising from your use of the
              service.
            </Text>
            <Box as="h2" textStyle="heading2" color={useColorModeValue("text.dark.0", "white")}>
              8. Contact Us
            </Box>
            <Text>
              For any questions or concerns regarding these Terms of Service, please contact us at support@biccas.com.
            </Text>
          </Container>
        </Box>
      </Box>
    </>
  );
}
