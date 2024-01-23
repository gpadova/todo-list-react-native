import React from "react";
import { View, Text } from "react-native";
import colors from "tailwindcss/colors";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

interface DoneTaskProps {
  description: string;
  deleteTask: (description: string) => void;
  markTaskAsDone: (description: string) => void;
}

export default function DoneTask({
  description,
  deleteTask,
  markTaskAsDone,
}: DoneTaskProps) {
  return (
    <View className=" w-10/12 flex-row h-16 border items-center bg-[#808080] border-neutral-700 rounded-md justify-between">
      <View className="w-1/6 flex-row justify-center">
        <AntDesign
          onPress={() => markTaskAsDone(description)}
          name="checkcircle"
          size={24}
          color={colors.purple[400]}
        />
      </View>
      <View className="w-4/6">
        <Text className="text-gray-100 text-justify opacity-60 line-through">
          {description}
        </Text>
      </View>
      <View className="w-1/6 flex-row justify-center opacity-60">
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
