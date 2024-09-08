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
    const darkTextColor = useColorModeValue('text.dark.0', 'white');
    const lightTextColor = useColorModeValue('text.dark.1', 'whiteAlpha.700');

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
                            top: '50em',
                            left: '50%',
                            transform: 'translateX(-50%) translateY(-42em)',
                            bg: 'whiteAlpha.300',
                            borderRadius: "50%",
                            w: "100vmin",
                            h: "100vmin",
                            display: isPro ? 'block' : 'none',
                        }}
                    >
                        <Box as="h4" textStyle="h4" color={isPro ? 'white' : darkTextColor}>
                            {i.type}
                        </Box>
                        <Text my={2}>{i.desc}</Text>
                        <HStack color={isPro ? 'white' : darkTextColor}>
                            <sup>$</sup>
                            <Text fontSize="50px" fontWeight="600">
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
                                        fontSize={{ base: "14px", sm: "18px" }}
                                        fontWeight="500"
                                        color="text.dark.0"
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
