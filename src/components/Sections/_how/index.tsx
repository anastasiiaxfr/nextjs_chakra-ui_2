import Container from "@/components/Container";
import { Box, Grid, VStack, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import ReactStars from 'react-stars'

import Icon1 from "@/assets/img/icon/i1.svg";
import Icon2 from "@/assets/img/icon/i2.svg";
import Icon3 from "@/assets/img/icon/i3.svg";

export default function Section() {
    return (
        <Box as="section" py={{ base: 10, sm: 20 }} bg={useColorModeValue('light.0', 'dark.0')}>
            <Container>
                <Grid templateColumns={{ base: "1fr", md: "1.25fr 1fr" }} gap="3em">
                    <VStack spacing={8}>
                        <Box as="h2" textStyle="h2" color={useColorModeValue('text.dark.0', 'white')}>
                            How we support our pratner all over the world
                        </Box>
                        <Text>
                            SaaS become a common delivery model for many business application, including office software, messaging
                            software, payroll processing software, DBMS software, management software
                        </Text>

                        <HStack spacing={10} justify="flex-start" w="full">
                            <VStack align="start">
                                <ReactStars count={5} value={5} size={24} color2={'#FFC728'} />
                                <HStack color={useColorModeValue('text.dark.0', 'white')}><Text fontWeight="bold">4.9</Text><Text> / 5 rating</Text></HStack>
                                <Text fontWeight="bold">databricks</Text>
                            </VStack>
                            <VStack align="start">
                                <ReactStars count={5} value={4} size={24} color2={'#FFC728'} />
                                <HStack color={useColorModeValue('text.dark.0', 'white')}><Text fontWeight="bold">4.8</Text><Text>/ 5 rating</Text></HStack>
                                <Text fontWeight="bold">Chainalysis</Text>
                            </VStack>
                        </HStack>
                    </VStack>
                    <VStack spacing={8} align="start">
                        <HStack spacing={4} align="flex-start">
                            <Box p={4} bg={useColorModeValue('white', 'dark.1')} boxShadow="xl">
                                <Icon1 width="28" height="28" />
                            </Box>
                            <Box>
                                <Box as="h4" textStyle="h4" mb={2} color={useColorModeValue('text.dark.0', 'white')}>
                                    Publishing
                                </Box>
                                <Text fontSize="18px">
                                    Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your
                                    barnd
                                </Text>
                            </Box>
                        </HStack>

                        <HStack spacing={4} align="flex-start">
                            <Box p={4} bg={useColorModeValue('white', 'dark.1')} boxShadow="xl">
                                <Icon2 width="28" height="28" />
                            </Box>
                            <Box>
                                <Box as="h4" textStyle="h4" mb={2} color={useColorModeValue('text.dark.0', 'white')}>
                                    Analytics
                                </Box>
                                <Text fontSize="18px">Analyze your performance and create goegeous report</Text>
                            </Box>
                        </HStack>

                        <HStack spacing={4} align="flex-start">
                            <Box p={4} bg={useColorModeValue('white', 'dark.1')} boxShadow="xl">
                                <Icon3 width="28" height="28" />
                            </Box>
                            <Box>
                                <Box as="h4" textStyle="h4" mb={2} color={useColorModeValue('text.dark.0', 'white')}>
                                    Engagement
                                </Box>
                                <Text fontSize="18px">Quiuckly navigate you anda engage with your adience</Text>
                            </Box>
                        </HStack>
                    </VStack>
                </Grid>
            </Container>
        </Box>
    );
}
