import { View, Image, Text, Linking } from 'react-native'
import React from 'react'
import IconButton from "./IconButton"
import "@/global.css"


const Links = {
  instagram: "https://www.instagram.com/010wrafa/",
  facebook: "https://www.facebook.com/profile.php?id=100080919690136",
  whatsapp: "https://wa.me/593990097694", 
  linkedin: "https://www.linkedin.com/in/martin-contreras-9a7136380/" 
}

const ProfileDetails = () => {
  return (
    <View className="flex justify-center items-center">
      <Image
        className="max-h-36 max-w-36 rounded-full"
        source={require('../assets/images/fotoyo.jpeg')}
      />

      <Text className="text-2xl font-bold text-center"> Martin Contreras</Text>
      {/* 2. Corregido el error de tipeo de font-blod a font-bold */}
      <Text className="text-xl font-bold text-gray-400">Student </Text>

      <View className="flex-row justify-around w-full mt-4">
        <IconButton icon='logo-instagram' pulsar={() => Linking.openURL(Links.instagram)} label={''} />
        <IconButton icon='facebook-square' pulsar={() => Linking.openURL(Links.facebook)} iconFamily='FontAwesome5' label={''} />
        <IconButton icon='whatsapp' pulsar={() => Linking.openURL(Links.whatsapp)} iconFamily='FontAwesome5' label={''} />
        <IconButton icon='linkedin' pulsar={() => Linking.openURL(Links.linkedin)} iconFamily='FontAwesome5' label={''} />
      </View>
    </View>
  )
}

export default ProfileDetails