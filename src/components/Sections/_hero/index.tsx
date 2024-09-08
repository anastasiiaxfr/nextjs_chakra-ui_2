import { Box, Stack, HStack, VStack, SimpleGrid, Button, Text, Image, useColorModeValue, } from "@chakra-ui/react";
import Container from "@/components/Container";
import Line from "@/assets/img/line.svg";
import IconPlay from "@/assets/img/icon/play.svg";


export default function Section() {
    return (
        <Box as="section" py={{ base: 10, sm: 20 }}>
            <Container>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <VStack align={{ base: 'center', md: 'flex-start' }} textAlign={{ base: 'center', md: 'left' }} spacing={8}>
                        <Box as="h1" textStyle="h1" color={useColorModeValue('text.dark.0', 'white')}>We’re here to Increase your Productivity</Box>
                        <Line height="34" width="100%" />
                        <Text textStyle="subtitle">
                            Let&apos;s make your work more organize and easily using the Taskio Dashboard with many of the latest
                            featuresin managing work every day.
                        </Text>
                        <HStack wrap={{ base: 'wrap', sm: 'nowrap' }} justify={{ base: 'center' }}>
                            <Button variant="rounded" size='lg' w={{ base: 'full', sm: 'auto' }}>Try free trial</Button>
                            <Button leftIcon={<IconPlay color="inherit" />} size='lg' variant='text'>View Demo</Button>
                        </HStack>
                    </VStack>
                    <Stack direction="row" spacing={4} position="relative">
                        <Image
                            src="/img/img1.png"
                            alt="Image 1"
                            mx="auto"
                            width="410"
                            objectFit='contain'
                            fallbackSrc='https://via.placeholder.com/300x400'
                        />
                        <Image
                            src="/img/img2.png"
                            alt="Image 2"
                            style={{ position: 'absolute', inset: '0', margin: 'auto' }}
                        />
                        <Image
                            src="/img/img3.png"
                            alt="Image 3"
                            style={{ position: 'absolute', inset: '0', margin: 'auto' }}
                        />
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
