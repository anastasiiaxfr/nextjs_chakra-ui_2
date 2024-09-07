import Logo from "@/components/Logo";
import { Box, VStack, Grid, HStack, Flex, Text } from "@chakra-ui/react";
import Container from "@/components/Container";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import menu from "./constant";
import Subscribe from "./Subscribe";


export default function Footer() {
    return (
        <Box as="footer">
            <Container>
                <Grid templateColumns={{ base: "1fr", md: "1fr auto" }} gap="3em" py={10} color="text.dark.1">
                    <VStack spacing={8} align="flex-start">
                        <Logo h={40} />

                        <Subscribe />
                    </VStack>
                    <Grid templateColumns={{ base: "auto auto", md: "auto auto auto" }} gap="2em">
                        {menu.map((i, ind: number) => (
                            <VStack spacing={4} key={ind} align="flex-start" fontWeight="500">
                                <Text color="white">{i.group}</Text>
                                {i.links.map((j, ind: number) => (
                                    <Link as={NextLink} href={j.url} key={ind} _hover={{ color: "main" }}>
                                        {j.label}
                                    </Link>
                                ))}
                            </VStack>
                        ))}
                    </Grid>
                </Grid>

                <Flex
                    align="center"
                    justify="space-between"
                    py={4}
                    fontSize={{ base: "13px", sm: "18px" }}
                    wrap={{ base: "wrap", md: "nowrap" }}
                    gap="0.5em"
                >
                    <Text>&copy; 2022 Biccas Inc. Copyright and rights reserved</Text>
                    <HStack spacing={2} wrap={{ base: "wrap", md: "nowrap" }}>
                        <Link as={NextLink} href="/terms">
                            Terms and Condtions
                        </Link>
                        <Box as="hr" w="1" h="1" border="0" borderRadius="50%" bg="whiteAlpha.500" />
                        <Link as={NextLink} href="/privacy">
                            Privacy Policy
                        </Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}
