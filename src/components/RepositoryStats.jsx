import React from 'react'
import { View,Text } from 'react-native'
import StyledText from './StyledText'

const parseThousands=value=>{
    return value > 100 
    ? `${Math.round(value / 100)/ 10}k`
    :String(value)
}

const RepositoryStats = ({ repo }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View >
                <StyledText align='center' fontWeight={'bold'}>{parseThousands(repo.stargazersCount)}</StyledText  >
                <StyledText align='center' >Stars</StyledText> 
            </View>
            <View >
                <StyledText fontWeight={'bold'}>{parseThousands(repo.forksCount)}</StyledText>
                <StyledText align='center'  >Forks</StyledText>
            </View>
            <View >
                <StyledText fontWeight={'bold'} >{repo.ratingAverage}</StyledText>
                <StyledText align='center'  >Rate</StyledText>
            </View>
            <View >
                <StyledText align='center' fontWeight={'bold'} >{repo.reviewCount}</StyledText>
                <StyledText align='center'  >Review</StyledText>
            </View>
        </View>
    )
}

export default RepositoryStats
