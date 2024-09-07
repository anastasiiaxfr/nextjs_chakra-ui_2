import NextLink from 'next/link';
import { Flex, Link, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import menu from '../constant';

interface MenuItem {
    label: string;
    URL: string;
}

interface MenuProps {
    dir?: 'row' | 'column';
    align?: 'center' | 'flex-start' | 'flex-end';
    tt?: 'initial' | 'uppercase' | 'lowercase' | 'capitalize';
}

export default function Menu({ dir = 'row', align = 'center', tt = 'initial' }: MenuProps) {
    const { pathname } = useRouter();
    const activeLinkColor = useColorModeValue('text.dark.0', 'white');
    const inactiveLinkColor = useColorModeValue('text.dark.1', 'gray.500');
    const hoverColor = useColorModeValue('main', 'color.1');

    return (
        <Flex align={align} rowGap={4} columnGap={10} direction={dir}>
            {menu.map((item: MenuItem, index: number) => {
                const isActive = pathname === item.URL;

                return (
                    <Link
                        as={NextLink}
                        href={item.URL}
                        key={index}
                        textTransform={tt}
                        fontWeight={isActive ? 'bold' : 'normal'}
                        color={isActive ? activeLinkColor : inactiveLinkColor}
                        _hover={{ color: hoverColor }}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </Flex>
    );
}
