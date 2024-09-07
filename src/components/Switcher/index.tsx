'use client';

import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export default function ColorModeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();

    const bg = useColorModeValue('dark.2', 'transparent');
    const btnHover = useColorModeValue('whiteAlpha.300', 'whiteAlpha.300');
    const btnColor = useColorModeValue('main', 'main');
    const btnBd = useColorModeValue('main', 'main');

    return (
        <Button
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            _hover={{ bg: btnHover }}
            w="fit-content"
            border="2px solid"
            size="sm"
            borderColor={btnBd}
            bg={bg}
            color={btnColor}
        >
            {colorMode === 'dark' ? <BsSun /> : <BsMoonStarsFill />}
        </Button>
    );
}