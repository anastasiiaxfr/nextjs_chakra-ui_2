"use client";
import { useRef } from "react";
import Logo from "@/components/Logo";
import Container from "@/components/Container";
import Nav from "@/components/Header/Menu";
import Drawer from "@/components/Header/Drawer";
import { HamburgerIcon } from "@chakra-ui/icons";
import Switcher from "@/components/Switcher";
import { Box, Stack, Flex, Button, useDisclosure } from "@chakra-ui/react";

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);
    return (
        <>
            <Box py={4}>
                <Container>
                    <Flex justify="space-between" align="center">
                        <Logo h={40} />
                        <Box display={{ base: "none", md: "flex" }}>
                            <Nav />
                        </Box>
                        <Stack spacing={4} direction="row" align="center">
                            <Stack display={{ base: "none", sm: "flex" }} spacing={4} direction="row" align="center">
                                <Button variant="text" size="sm">
                                    Login
                                </Button>
                                <Button as="a" href="/" variant="primary" size="sm">
                                    Sign Up
                                </Button>

                            </Stack>
                            <Switcher />
                            <Button display={{ base: "flex", md: "none" }} ref={btnRef} onClick={onOpen} colorScheme="gray" size="sm">
                                <HamburgerIcon />
                            </Button>

                        </Stack>
                    </Flex>
                </Container>
            </Box>
            <Drawer isOpen={isOpen} onClose={onClose} />
        </>
    );
}
