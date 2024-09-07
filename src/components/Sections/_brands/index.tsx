import Container from "@/components/Container";
import { Box, VStack, HStack, Image, useColorModeValue } from "@chakra-ui/react";

export default function Section() {
    return (
        <Box as="section">
            <Container>
                <VStack textAlign={{ base: 'center', sm: 'left' }}>
                    <Box as="h2" textStyle="h3" color={useColorModeValue('text.dark.0', 'white')}>
                        More than 25,000 teams use Collabs
                    </Box>
                    <HStack
                        columnGap={10}
                        rowGap={5}
                        my={{ base: 2, sm: 8 }}
                        p={4}
                        overflow="hidden"
                        position="relative"
                        wrap={{ base: 'wrap', sm: 'nowrap' }}
                        justify={{ base: 'center', sm: 'start' }}
                    >
                        <Image src="/img/brands/logo1.svg" height={{ base: '26px', sm: '38px' }} width="auto" alt="alt"></Image>
                        <Image src="/img/brands/logo2.svg" height={{ base: '26px', sm: '38px' }} width="auto" alt="alt"></Image>
                        <Image src="/img/brands/logo3.svg" height={{ base: '26px', sm: '38px' }} width="auto" alt="alt"></Image>
                        <Image src="/img/brands/logo4.svg" height={{ base: '26px', sm: '38px' }} width="auto" alt="alt"></Image>
                        <Image src="/img/brands/logo5.svg" height={{ base: '26px', sm: '38px' }} width="auto" alt="alt"></Image>
                    </HStack>
                </VStack>
            </Container>
        </Box>
    );
}
