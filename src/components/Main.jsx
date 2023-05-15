import React from 'react'
import { View, Text, Platform } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Routes } from 'react-router-native'
import Login from '../pages/Login'



const Main = () => {
  return (
    <View style={{ flexGrow: 1,paddingBottom:60 }}>
      <AppBar/>
      <Routes onNavigationEnd={<Text>Cargando...</Text>} onNavigationStart={<Text>Cargando...</Text>}>
        <Route
          path='/'
          element={<RepositoryList />}
        />

        <Route path='/signin'
          element={<Login></Login>} />
      </Routes>
    </View>
  )
}

export default Main
