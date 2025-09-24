import { View, Image, Text } from 'react-native'
import React from 'react'
import IconButton from "./IconButton"
import "@/global.css"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const ProfileDetails = () => {
  return (
    <View className="flex justify-center items-center">
      <Image
        className="max-h-36  max-w-36 rounded-full "
        source={require('../assets/images/icon.png')}
      />

      <Text className="text-2xl font-bold text-center"> Martin Contreras</Text>
      <Text className="text-xl font-blod text-gray-400">Student </Text>


      <IconButton icon='logo-instagram' pulsar={() => console.log("Instagram")} label={''}  ></IconButton>
      <IconButton icon='facebook-square' pulsar={() => console.log("Facebook")} label={''} ></IconButton>
      <IconButton icon='whatsapp' pulsar={() => console.log("Whatsaap")} label={''} ></IconButton>
      <IconButton icon='linkedin' pulsar={() => console.log("Linkedin")} label={''} ></IconButton>




    </View>
  )
}

export default ProfileDetails