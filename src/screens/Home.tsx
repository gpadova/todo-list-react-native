import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import NotDoneTask from "../components/NotDoneTask";
import DoneTask from "../components/DoneTask";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

interface Task {
  description: string;
  done: boolean;
}
export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");
  function addTaskToList() {
    const task: Task = {
      description: text,
      done: false,
    };
    setTasks((prevState) => [...prevState, task]);
    setText("");
  }
  function deleteTask(description: string) {
    const newTasksList = tasks.filter(
      (item) => item.description !== description
    );
    setTasks(newTasksList);
  }
  function markTaskAsDone(description: string) {
    const updatedTasks = tasks.map((value) => {
      if (value.description === description) {
        return {
          ...value,
          done: !value.done,
        };
      }
      return value;
    });
    setTasks(updatedTasks);
  }
  return (
    <>
      <View className="flex-1 h-full pt-12 w-full flex-col bg-black items-center">
        <View className="flex justify-center items-center h-40  ">
          <Image source={require("../../assets/Logo.png")} alt="ToDo logo" />
        </View>
        <View className="flex-1  items-center h-full w-full bg-[#1A1A1A]">
          <View className="w-full flex flex-row justify-center gap-4 -translate-y-5 ">
            <TextInput
              placeholder="Adicione uma nova tarefa"
              value={text}
              onChangeText={(e) => setText(e)}
              placeholderTextColor={colors.gray[500]}
              className="bg-gray-700 w-60 p-2 h-12 rounded-md placeholder:text-gray-400"
            />
            <TouchableOpacity className="bg-blue-500  justify-center itens-center p-2 rounded-md">
              <EvilIcons
                onPress={addTaskToList}
                name="plus"
                size={32}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
          <View className="w-11/12  flex-row justify-around items-center">
            <View className="w-1/2  flex-row justify-center items-center gap-4">
              <Text className="font-bold text-blue-400 text-lg">Criadas</Text>
              <View className="bg-[#333333] px-2 py-1 rounded-lg">
                <Text className="text-white font-bold">{tasks.length}</Text>
              </View>
            </View>
            <View className="w-1/2 flex-row justify-center items-center gap-4">
              <Text className="font-bold text-purple-400 text-lg">
                Concluídas
              </Text>
              <View className="bg-[#333333] px-2 py-1 rounded-lg">
                <Text className="text-white font-bold">
                  {tasks.filter((item) => item.done).length}
                </Text>
              </View>
            </View>
          </View>
          <View className="bg-gray-500 h-1 w-3/4 my-3" />
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center",
              gap: 10,
            }}
            data={tasks}
            renderItem={({ item }) => {
              if (item.done) {
                return (
                  <DoneTask
                    deleteTask={deleteTask}
                    description={item.description}
                    markTaskAsDone={markTaskAsDone}
                  />
                );
              }
              return (
                <NotDoneTask
                  deleteTask={deleteTask}
                  markTaskAsDone={markTaskAsDone}
                  description={item.description}
                />
              );
            }}
            ListEmptyComponent={() => {
              return (
                <View className="items-center gap-10 my-5">
                  <Feather
                    name="clipboard"
                    size={80}
                    color={colors.gray[500]}
                  />
                  <View className="items-center gap-1">
                    <Text className="text-gray-100 font-bold">
                      Você ainda não tem tarefas cadastradas
                    </Text>
                    <Text className="text-gray-100 ">
                      Crie tarefas e organize seus itens a fazer
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </>
  );
}
