import IconCheck from "@/assets/img/icon/check.svg";
import { Box, VStack, HStack, Button, Text, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";

interface PlanItem {
    type: string;
    desc: string;
    cost: string;
    note: string;
    list: string[];
    btn: {
        label: string;
    };
}

interface PlanCardsProps {
    plans: PlanItem[];
}

export default function PlanCards({ plans }: PlanCardsProps) {
    const lightBackgroundColor = useColorModeValue('white', 'dark.1');
    const darkTextColor = useColorModeValue('text.dark.0', 'text.dark.0');
    const lightTextColor = useColorModeValue('main', 'white');

    return (
        <>
            {plans.map((i: PlanItem, ind: number) => {
                const isPro = i.type.toLowerCase() === 'pro';

                return (
                    <VStack
                        key={ind}
                        position="relative"
                        zIndex="1"
                        overflow="hidden"
                        bg={isPro ? 'main' : lightBackgroundColor}
                        color={isPro ? 'white' : lightTextColor}
                        borderRadius="2xl"
                        boxShadow="xl"
                        p={4}
                        _after={{
                            content: '""',
                            position: 'absolute',
                            zIndex: '-1',
                            bottom: '-35vmin',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            bg: 'whiteAlpha.300',
                            borderRadius: "50%",
                            w: "100vmin",
                            h: "100vmin",
                        }}
                    >
                        <Box as="h4" textStyle="h4" color={isPro ? 'white' : lightTextColor}>
                            {i.type}
                        </Box>
                        <Text my={2}>{i.desc}</Text>
                        <HStack>
                            <sup>$</sup>
                            <Text fontSize="50px" fontWeight="600" color={isPro ? 'white' : lightTextColor}>
                                {i.cost}
                            </Text>
                        </HStack>
                        {i.note && (
                            <Box bg="whiteAlpha.400" borderRadius="md" boxShadow="md" p={2} mb={4}>
                                {i.note}
                            </Box>
                        )}
                        <VStack spacing={4} bg="light.0" borderRadius="xl" p={4} w="full">
                            <List spacing={4} textAlign="left">
                                {i.list.map((j: string, ind: number) => (
                                    <ListItem
                                        display="flex"
                                        alignItems="center"
                                        gap="0.5em"
                                        fontSize="18px"
                                        fontWeight="500"
                                        color={darkTextColor}
                                        key={ind}
                                    >
                                        <ListIcon as={IconCheck} w="24px" h="24px" />
                                        {j}
                                    </ListItem>
                                ))}
                            </List>
                            <Button
                                w="full"
                                mt={4}
                                py={6}
                                size="md"
                                variant={isPro ? 'primary' : 'white'}
                                boxShadow="md"
                            >
                                {i.btn.label}
                            </Button>
                        </VStack>
                    </VStack>
                );
            })}
        </>
    );
}
