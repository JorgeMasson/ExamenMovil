import { Alert, BackHandler, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import {
    Div,
    Button,
} from "react-native-magnus";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from 'react-native-size-matters';
import MainHeading from '../Components/main-heading';
import { useNavigate } from 'react-router-native';

const Quiz = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to exit the app?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
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
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
                <Div w="12.18%" bg="#DFDFDF" />
            </Div>
            <View style={styles.page}>
                <MainHeading textAlign="left">
                    Contestaré esta encuesta respecto a la experiencia de la empresa que represento:
                </MainHeading>
                <Div mt={200} flexDir='column'>
                    <Button
                        w={240}
                        bg="#48bb78"
                        alignSelf="center"
                        rounded="circle"
                        fontWeight='700'
                        fontSize="xl"
                        onPress={() => navigate("/first-question")}
                    >
                        Acepto
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
                        onPress={() => {
                            Alert.alert("Hold on!", "Are you sure you want to exit the app?", [
                                {
                                    text: "Cancel",
                                    onPress: () => null,
                                    style: "cancel"
                                },
                                { text: "YES", onPress: () => BackHandler.exitApp() }
                            ]);
                            return true;
                        }}
                    >
                        No acepto
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

export default Quiz