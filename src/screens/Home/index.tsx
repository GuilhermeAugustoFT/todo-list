import { View, Image, Alert } from "react-native";
import uuid from 'react-native-uuid';
import { styles } from "./styles";
import Input from "../../components/Input";
import { useEffect, useState } from "react";
import TasksList from "../../components/TasksList";
import { TaskType } from "../../types";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [tasksList, setTasksList] = useState<TaskType[]>([]);

  const handleAddTask = () => {
    if(inputValue.length === 0)
    {
      Alert.alert('Tarefa inválida!', 'Adicione um texto para sua nova tarefa!', [{text: 'Ok'}])
    } else {
      setTasksList([...tasksList, {id: uuid.v4().toString(),text: inputValue, done: false}]);
      setInputValue('');
    }
  }

  const handleDeleteTask = (taskId: string) => {
    Alert.alert('Deletar tarefa', 'Deseja realmente deletar essa tarefa?', [
      {
        text: 'Sim',
        onPress: () => {
          deleteTask(taskId)
        }
      },
      {
        text: 'Não',
        
      }
    ])
  }

  const deleteTask = (taskId: string) => {
    const aux = tasksList.filter(task => task.id != taskId);
    setTasksList(aux);
  } 

  const handleCompleteTask = (taskId: string) => {
    setTasksList((prevTasksList) => {
      const updatedTasks = prevTasksList.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      );
      return updatedTasks;
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.mainContainer}>
        <Input
          placeholder={"Adicione uma nova tarefa"}
          value={inputValue}
          onChange={setInputValue}
          onPress={handleAddTask}
        />
        <TasksList list={tasksList} onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask}/>
      </View>
    </View>
  );
}
