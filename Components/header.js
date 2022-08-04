import React from 'react';
import { Div, Icon, Text } from 'react-native-magnus';
import { TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useNavigate } from 'react-router-native';


const Header = () => {
    const navigate = useNavigate();

    return (
        <Div flexDir="row" alignItems="center" style={{ height: moderateScale(64), paddingHorizontal: moderateScale(16) }}>
            <Div>
                <TouchableOpacity onPress={() => navigate(-1)}>
                    <Icon
                        fontSize="6xl"
                        color="#000000"
                        name="left"
                        fontFamily="AntDesign"
                    />
                </TouchableOpacity>
            </Div>
        </Div>
    )
}

export default Header