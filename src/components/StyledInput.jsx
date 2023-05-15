import React from 'react'
import {TextInput,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  textInput:{
    borderRadius:5,
    borderColor:'#999',
    borderWidth:1,
    paddingHorizontal:20,
    paddingVertical:10,
    marginBottom:10

  },
  error:{
    borderColor:'red',

  }
})

const StyledInput = ({style={},error,...props}) => {
  const inputStyle=[
    styles.textInput,
    style,
    error && styles.error
]
  return (
    <TextInput style={inputStyle} {...props}>

    </TextInput>
  )
}

export default StyledInput
