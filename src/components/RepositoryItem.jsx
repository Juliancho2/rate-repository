import React from 'react'
import { View, Image, Text, StyleSheet,Platform } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    language: {
        padding: 4,
        color: '#fff',
        backgroundColor:theme.colors.primary,
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginTop:4,
        marginBottom:4,
        overflow:'hidden'
    }
})

const RepositoryItemHandler = ({ repo }) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>

            <View style={{paddingRight:10}}>
                <Image style={{ width: 48, height: 48 }} source={repo.ownerAvatarUrl}></Image>
            </View>
            <View style={{flex:1}}>
                <StyledText fontSize='subheading' fontWeight='bold' >{repo.fullName}</StyledText>
                <StyledText color={'secondary'}>{repo.description}</StyledText>
                <StyledText style={styles.language}>{repo.language}</StyledText>
            </View>
        </View>
    )
}


const RepositoryItem = ({ repo }) => {
    return (
        <View style={styles.container}>
            <RepositoryItemHandler repo={repo} />
            <RepositoryStats repo={repo} />
        </View>
    )
}

export default RepositoryItem
