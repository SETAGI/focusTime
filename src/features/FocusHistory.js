import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {colors} from '../utils/colors'
import {spacing, fontSizes} from '../utils/sizes'

export const FocusHistory = ({history}) => {

  if(!history || !history.length){
    return(
      <Text style={styles.title}> We have not focused on anything yet </Text>
    ) 
  } 
  const renderItem = ({item}) => {
    return(
      <Text style={styles.text}> - {item} </Text>
    )
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}> Focus history will be here </Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: spacing.md,
    flex: 1
  },
  text:{
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm
  },
  title:{
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold' 
  }
})