import React from "react";
import { Text } from "react-native-magnus";
import { moderateScale } from "react-native-size-matters";

const MainHeading = ({ children, ...props }) => (
    <Text
        fontSize="4xl"
        w={288}
        textAlign="center"
        mx="auto"
        mt={moderateScale(5)}
        color="#000000"
        fontWeight="700"
        {...props}
    >
        {children}
    </Text>
);

export default MainHeading;