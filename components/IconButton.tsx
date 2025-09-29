import React from 'react';
import { Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface IconButtonProps {
    pulsar: () => void;
    icon: string;
    label: string;
    enlace?: string;
    iconFamily?: 'Ionicons' | 'FontAwesome5';
}

const IconButton = ({ icon, pulsar, label, iconFamily = 'Ionicons' }: IconButtonProps) => {
    const IconComponent = iconFamily === 'FontAwesome5' ? FontAwesome5 : Ionicons;

    return (
        <Pressable onPress={pulsar} className="flex-row items-center">
            <IconComponent name={icon as any} size={24} color="black" />
            <Text className="ml-2">{label}</Text>
        </Pressable>
    );
};

export default IconButton;
