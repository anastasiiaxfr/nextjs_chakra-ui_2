import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text, useColorModeValue } from "@chakra-ui/react";
import Container from "@/components/Container";
import PlanCards from "./plan-card";
import plansYear, { plansMonth } from "./constant";

export default function Section() {
    return (
        <Box as="section" py={{ base: 10, sm: 20 }} textAlign="center">
            <Container>
                <Box as="h2" textStyle="h2" color={useColorModeValue('text.dark.0', 'white')}>
                    Choose Plan <br />
                    That’s Right For You
                </Box>
                <Text my={5} fontWeight="bold">
                    Choose plan that works best for you, feel free to contact us
                </Text>

                <Tabs variant="soft-rounded" colorScheme="green">
                    <TabList
                        display="inline-flex"
                        justifyContent="center"
                        bg="white"
                        borderRadius="xl"
                        boxShadow="xl"
                        w="auto"
                        p={4}
                        mb={8}
                    >
                        <Tab borderRadius="xl">Bil Monthly</Tab>
                        <Tab borderRadius="xl">Bil Yearly</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel
                            display="grid"
                            gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
                            gap="2em"
                            alignItems="center"
                        >
                            <PlanCards plans={plansMonth} />
                        </TabPanel>
                        <TabPanel display="grid"
                            gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
                            gap="2em"
                            alignItems="center">
                            <PlanCards plans={plansYear} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </Box>
    );
}
