import React from "react";
import { View, Text } from "react-native";
import colors from "tailwindcss/colors";
import { Entypo, EvilIcons } from "@expo/vector-icons";

interface NotDoneTaskProps {
  description: string;
  deleteTask: (description: string) => void;
  markTaskAsDone: (description: string) => void;
}

export default function NotDoneTask({
  description,
  deleteTask,
  markTaskAsDone,
}: NotDoneTaskProps) {
  return (
    <View className=" w-10/12 flex-row h-16 border items-center bg-[#808080] border-neutral-700 rounded-md justify-between">
      <View className="w-1/6 flex-row justify-center">
        <Entypo
          onPress={() => markTaskAsDone(description)}
          name="circle"
          size={24}
          color={colors.blue[400]}
        />
      </View>
      <View className="w-4/6">
        <Text className="text-gray-100 text-justify">{description}</Text>
      </View>
      <View className="w-1/6 flex-row justify-center">
        <EvilIcons
          onPress={() => deleteTask(description)}
          name="trash"
          size={32}
          color="white"
        />
      </View>
    </View>
  );
}
