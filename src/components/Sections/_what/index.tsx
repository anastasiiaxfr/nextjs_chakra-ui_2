import { Box, Stack, VStack, SimpleGrid, Image, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import Container from "@/components/Container";
import IconCheck from "@/assets/img/icon/check.svg";

export default function Section() {
    return (
        <Box as="section">
            <Container>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                    <VStack align={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }} spacing={10}>
                        <Box as="h2" textStyle="h2" color={useColorModeValue('text.dark.0', 'white')}>
                            What Benifit Will You Get
                        </Box>

                        <List spacing={4}>
                            <ListItem
                                display="flex"
                                alignItems="center"
                                gap="0.5em"
                                fontSize="18px"
                                fontWeight="500"
                                color={useColorModeValue('text.dark.0', 'white')}
                            >
                                <ListIcon as={IconCheck} w="32px" h="32px" />
                                Free Consulting With Experet Saving Money
                            </ListItem>
                            <ListItem
                                display="flex"
                                alignItems="center"
                                gap="0.5em"
                                fontSize="18px"
                                fontWeight="500"
                                color={useColorModeValue('text.dark.0', 'white')}
                            >
                                <ListIcon as={IconCheck} w="32px" h="32px" />
                                Online Banking
                            </ListItem>
                            <ListItem
                                display="flex"
                                alignItems="center"
                                gap="0.5em"
                                fontSize="18px"
                                fontWeight="500"
                                color={useColorModeValue('text.dark.0', 'white')}
                            >
                                <ListIcon as={IconCheck} w="32px" h="32px" />
                                Investment Report Every Month
                            </ListItem>
                            <ListItem
                                display="flex"
                                alignItems="center"
                                gap="0.5em"
                                fontSize="18px"
                                fontWeight="500"
                                color={useColorModeValue('text.dark.0', 'white')}
                            >
                                <ListIcon as={IconCheck} w="32px" h="32px" />
                                Saving Money For The Future
                            </ListItem>
                            <ListItem
                                display="flex"
                                alignItems="center"
                                gap="0.5em"
                                fontSize="18px"
                                fontWeight="500"
                                color={useColorModeValue('text.dark.0', 'white')}
                            >
                                <ListIcon as={IconCheck} w="32px" h="32px" />
                                Online Transection
                            </ListItem>
                        </List>
                    </VStack>
                    <Stack direction="row" spacing={4} position="relative">
                        <Image src="/img/img4.png" alt="ALT" mx="auto" />
                        <Image src="/img/img5.png" alt="ALT" position="absolute" inset="0" margin="auto" />
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
