import React, { useEffect } from 'react';
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

const ThirdQuestion = () => {
    const navigate = useNavigate();

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
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
            </Div>
            <Header />
            <View style={styles.page}>
                <MainHeading textAlign="left">
                    ¿Este año habrá entrega de reparto de utilidades?
                </MainHeading>
                <Div mt={200} flexDir='column'>
                    <Button
                        w={240}
                        bg="#48bb78"
                        alignSelf="center"
                        rounded="circle"
                        fontWeight='700'
                        fontSize="xl"
                        onPress={() => navigate("/fourth-question", { state: { utilidades: true } })}
                    >
                        Sí
                    </Button>
                    <Button
                        bg="transparent"
                        color='#000000'
                        borderWidth={1}
                        borderColor="#48bb78"
                        mt={20}
                        w={240}
                        alignSelf="center"
                        rounded="circle"
                        fontWeight='700'
                        fontSize="xl"
                        onPress={() => navigate("/fourth-question", { state: { utilidades: false } })}
                    >
                        No
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

export default ThirdQuestion;