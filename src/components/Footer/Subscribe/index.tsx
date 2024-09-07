"use client";
import { Box, HStack, Text, Input, Button } from "@chakra-ui/react";
import Icon from "@/assets/img/icon/arr-r.svg";

export default function Subscribe() {
    const inputBg = "transparent";

    return (
        <Box w="full">
            <Text mb={4} fontWeight="500">
                Get started noew try our product
            </Text>
            <HStack
                spacing={-5}
                w={{ lg: "75%" }}
                position="relative"
                borderRadius="16pc"
                border="2px solid"
                borderColor="text.dark.1"
                overflow="hidden"
            >
                <Input placeholder="Enter your email here" type="email" p={6} bg={inputBg} border="0" />
                <Button
                    zIndex="1"
                    position="absolute"
                    inset="0"
                    left="auto"
                    right="4px"
                    margin="auto"
                    w="40px"
                    h="40px"
                    variant="circle"
                    p={2}
                >
                    <Icon w="24" h="24" />
                </Button>
            </HStack>
        </Box>
    );
}
