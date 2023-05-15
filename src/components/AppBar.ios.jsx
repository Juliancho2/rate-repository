import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Constans from 'expo-constants'
import StyledText from './StyledText'
import theme from '../theme'
import { Link, useLocation } from 'react-router-native'
import { TouchableHighlight } from 'react-native-web'

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: 'red',
        paddingTop: Constans.statusBarHeight + 20,
        paddingBottom: 20,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    active:{
        color:theme.appBar.textPrimary,
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },

})

const AppBarTap = ({ children, to }) => {
    const {pathname}=useLocation()
    const active=pathname === to
    const textStyles = [
        styles.text,
        active && styles.active
    ]
    return (
        <Link to={to} component={TouchableHighlight}>
            <StyledText fontWeight={'bold'} style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBarIos = () => {
    
    return (
        <View style={styles.appBar}>
            <ScrollView horizontal>
                <AppBarTap to={'/'}>Repositories</AppBarTap>
                <AppBarTap   to={'/signin'}>Sign in</AppBarTap>
            </ScrollView>

        </View>
    )
}

export default AppBarIos
