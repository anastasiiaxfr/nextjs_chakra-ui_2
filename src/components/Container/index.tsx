import { ReactNode } from 'react';
import { Container } from '@chakra-ui/react';

interface ContainerLayoutProps {
    children: ReactNode;
}

export default function ContainerLayout({ children }: ContainerLayoutProps) {
    return (
        <Container maxW="1180px" w="full">
            {children}
        </Container>
    );
}