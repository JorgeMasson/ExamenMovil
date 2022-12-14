import React, { useEffect, useState, useCallback } from 'react';
import {
    Text,
    Div,
    Button,
    Radio,
    Checkbox
} from "react-native-magnus";
import MainHeading from '../Components/main-heading';
import { BackHandler, StyleSheet, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocation, useNavigate } from 'react-router-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Header from '../Components/header';

const FifthQuestioon = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selected, setSelected] = useState([]);
    const montoReparto = location.state.montoReparto;
    const arregloMayor = [
        "aumentoProuctividad",
        "aumentoVentas",
        "entornoFavorable",
        "nuevasOportunidades"
    ]
    const arregloMenor = [
        "disminucionProductividad",
        "inseguridad",
        "entorno"
    ];

    const updateSelected = useCallback(
        (value) => {
            setSelected([...selected, value]);
        },
        [selected]
    );

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
                <Div w="12.18%" bg="#48bb78" />
                <Div w="12.18%" bg="#48bb78" />
                <Div w="12.18%" bg="#48bb78" />
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
            </Div>
            <Header />
            <View style={styles.page}>
                <MainHeading textAlign="left">
                    {montoReparto === "Mayor" ? "??Cu??les fueron las razones por las que el monto de reparto de utilidades fue mayor?" : "??Cu??les fueron las razones por las que habr?? menor reparto de utilidades?"}
                </MainHeading>
                {montoReparto === "Mayor" ? (
                    <Div mt={40} flexDir="column">
                        <Checkbox.Group column>
                            {arregloMayor.map((item) => (
                                <Checkbox key={item} value={item} onPress={() => updateSelected(item)}>
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
                                            <Text
                                                fontSize="xl"
                                                color={checked ? "white" : "gray800"}
                                                numberOfLines={1}
                                            >
                                                {item === "aumentoProuctividad" ?
                                                    "Aumento en la productividad de las y los colaboradores" :
                                                    item === "aumentoVentas" ?
                                                        "Aumento de Ventas" :
                                                        item === "entornoFavorable" ?
                                                            "Entorno econ??mico favorable" :
                                                            "Nuevas oportunidades de negocio"
                                                }
                                            </Text>
                                        </Div>
                                    )}
                                </Checkbox>
                            ))}
                        </Checkbox.Group>
                    </Div>
                ) : (
                    <Div mt={40} flexDir="column">
                        <Checkbox.Group column>
                            {arregloMenor.map((item) => (
                                <Checkbox key={item} value={item} onPress={() => updateSelected(item)}>
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
                                            <Text
                                                fontSize="xl"
                                                color={checked ? "white" : "gray800"}
                                                numberOfLines={1}
                                            >
                                                {item === "disminucionProductividad" ?
                                                    "Disminuci??n en la productividad de las y los colaboradores" :
                                                    item === "inseguridad" ?
                                                        "Afectaciones por inseguridad" :
                                                        "Afectaciones por el entorno pol??tico y econ??mico"
                                                }
                                            </Text>
                                        </Div>
                                    )}
                                </Checkbox>
                            ))}
                        </Checkbox.Group>
                    </Div>
                )}
                <Div mt={40} flexDir='column'>
                    <Button
                        w={240}
                        bg="#48bb78"
                        alignSelf="center"
                        rounded="circle"
                        fontWeight='700'
                        fontSize="xl"
                        disabled={selected < 1}
                        onPress={() => navigate("/sixth-question")}
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

export default FifthQuestioon;