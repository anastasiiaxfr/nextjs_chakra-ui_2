import Container from "@/components/Container";
import { Box, Grid, VStack, Text, Button, Image, useColorModeValue } from "@chakra-ui/react";

export default function Section() {
    return (
        <Box as="section" py={{ base: 10, sm: 20 }}>
            <Container>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 0.5fr" }} gap="3em" textAlign={{ base: 'center', sm: 'left' }}>
                    <Box as="h2" textStyle="h2" color={useColorModeValue('text.dark.0', 'white')}>
                        Our Features you cab get
                    </Box>
                    <Text>
                        We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly
                    </Text>
                    <Button variant="rounded" size='lg' w={{ base: 'full', sm: 'auto' }}>Try free trial</Button>
                </Grid>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap="3em" mt={10} textAlign={{ base: 'center', sm: 'left' }}>
                    <VStack align="left" spacing={4}>
                        <Image src="/img/p1.svg" alt="ALT" w="100%" maxW="400" borderRadius="2xl" opacity={useColorModeValue('1', '0.5')} _hover={{ opacity: '1' }} />
                        <Box as="h4" textStyle="h4" color={useColorModeValue('text.dark.0', 'white')}>Collboration Teams </Box>
                        <Text fontSize="18px">Here you can handle projects together with team virtually</Text>
                    </VStack>
                    <VStack align="left" spacing={4}>
                        <Image src="/img/p2.svg" alt="ALT" w="100%" maxW="400" borderRadius="2xl" opacity={useColorModeValue('1', '0.5')} _hover={{ opacity: '1' }} />
                        <Box as="h4" textStyle="h4" color={useColorModeValue('text.dark.0', 'white')}>Cloud Storage </Box>
                        <Text fontSize="18px">No nedd to worry about storage because we provide storage up to 2 TB</Text>
                    </VStack>
                    <VStack align="left" spacing={4}>
                        <Image src="/img/p3.svg" alt="ALT" w="100%" maxW="400" borderRadius="2xl" opacity={useColorModeValue('1', '0.5')} _hover={{ opacity: '1' }} />
                        <Box as="h4" textStyle="h4" color={useColorModeValue('text.dark.0', 'white')}>Daily Analytics</Box>
                        <Text fontSize="18px">We always provide useful informatin to make it easier for you every day</Text>
                    </VStack>
                </Grid>
            </Container>
        </Box>
    )
}