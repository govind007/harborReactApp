import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text } from 'react-native'
import { PageBackground } from '@/Components'
import InitStartup from '@/Store/Startup/Init'

const IndexStartupContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  return (
    <PageBackground>
      <Text>Loading...</Text>
    </PageBackground>
  )
}

export default IndexStartupContainer
