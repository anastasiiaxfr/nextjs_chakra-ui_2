'use client'
import Logo from "@/components/Logo";
import Menu from "@/components/Header/Menu";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';

export interface DrawerNavProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DrawerNav({ isOpen, onClose }: DrawerNavProps) {
    return (
        <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader bg="transparent" borderBottom="1px solid" borderColor="gray.200">
                    <Logo h={25} />
                </DrawerHeader>
                <DrawerBody py={6}>
                    <Menu dir="column" align="flex-start" tt="uppercase" />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}
