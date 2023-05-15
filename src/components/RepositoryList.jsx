import React, { useEffect, useState } from 'react'
import {  Text, FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'

const RepositoryList = () => {
  const {repositories}=useRepositories()

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <RepositoryItem key={repo.id} repo={repo} />
      )}
    >
    </FlatList>
  )
}

export default RepositoryList
