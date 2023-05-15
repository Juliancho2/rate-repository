import { Formik, useField } from 'formik'
import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import StyledInput from '../components/StyledInput'
import StyledText from '../components/StyledText'
import { loginValidationSchema } from '../../validationsSchemas/login.js'

const initialValues = {
    email: '',
    password: ''
}
const styles = StyleSheet.create({
    form: {
        margin: 12
    },
    error:{
        color:'red',
        fontSize:12,
        marginBottom:20,
        marginTop:-10
    }
})

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
            <StyledInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>
                {meta.error}</StyledText>}
        </>
    )
}



const Login = () => {
    return (
        <Formik validationSchema={loginValidationSchema}  initialValues={initialValues} onSubmit={values => console.log(values)}>
            {({ handleSubmit }) => {
                return (
                    <View style={styles.form} >
                        <FormikInputValue
                            name={'email'}
                            placeholder='Email'
                        />
                        <FormikInputValue
                            name={'password'}
                            placeholder='Password'
                            secureTextEntry
                        />
                        <Button
                            onPress={handleSubmit}
                            title='Log In' />
                    </View>
                )
            }
            }
        </Formik>
    )
}

export default Login
