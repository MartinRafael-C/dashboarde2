import { View, Image, Text } from 'react-native'
import React from 'react'
import "@/global.css"


const ProfileDetails = () => {
  return (
    <View className="flex justify-center items-center">
      <Image 
      className ="max-h-36  max-w-36 rounded-full "
      source={require('../assets/images/icon.png')} 
      />
     
      <Text className="text-2xl font-bold text-center"> Martin Contreras</Text>
      <Text className="text-xl font-blod text-gray-400">Student </Text>

      


    </View>
  )
}

export default ProfileDetails