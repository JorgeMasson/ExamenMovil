import React, { useEffect, useState } from 'react';
import {
    Text,
    Div,
    Button,
    Radio
} from "react-native-magnus";
import MainHeading from '../Components/main-heading';
import { BackHandler, StyleSheet, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigate } from 'react-router-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Header from '../Components/header';

const SecondQuestion = () => {
    const navigate = useNavigate();
    const [numEmpleados, setNumEmpleados] = useState("");
    const empleados = [
        "1 a 10",
        "11 a 50",
        "51 a 250",
        "251 o más"
    ];

    function handleBackButtonClick() {
        navigate(-1);
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, []);

    return (
        <SafeAreaView >
            <Div
                display="flex"
                flexDir="row"
                h={4}
                w="100%"
                justifyContent="space-between"
            >
                <Div w="12.18%" bg="#48bb78" />
                <Div w="12.18%" bg="#48bb78" />
                <Div w="12.18%" bg="#48bb78" />
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
            </Div>
            <Header />
            <View style={styles.page}>
                <MainHeading textAlign="left">
                    Número de empleados
                </MainHeading>
                <Div mt={40} flexDir="column">
                    <Radio.Group column>
                        {empleados.map((item) => (
                            <Radio key={item} value={item} onPress={(() => setNumEmpleados(item))}>
                                {({ checked }) => (
                                    <Div
                                        w="100%"
                                        h={50}
                                        bg={checked ? "#48bb78" : "transparent"}
                                        px="xl"
                                        py="md"
                                        my={10}
                                        alignItems='center'
                                    >
                                        <Text fontSize="xl" color={checked ? "white" : "gray800"} numberOfLines={1}>{item}</Text>
                                    </Div>
                                )}
                            </Radio>
                        ))}
                    </Radio.Group>
                </Div>
                <Div mt={40} flexDir='column'>
                    <Button
                        w={240}
                        bg="#48bb78"
                        alignSelf="center"
                        rounded="circle"
                        fontWeight='700'
                        fontSize="xl"
                        disabled={numEmpleados === ""}
                        onPress={() => navigate("/third-question")}
                    >
                        Siguiente
                    </Button>
                </Div>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: moderateScale(28),
        paddingVertical: verticalScale(28)
    }
});

export default SecondQuestion;