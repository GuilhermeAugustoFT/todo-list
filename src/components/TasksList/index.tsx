import { View, Text, Image, FlatList, ListRenderItem } from "react-native";
import { styles } from "./styles";
import Task from "../Task";
import { TaskType } from "../../types";

interface Props {
  list: TaskType[];
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}
export default function TasksList({ list, onCompleteTask, onDeleteTask }: Props) {

  const getCompleteTasksLength = (): number => {
    return list.filter(item => item.done).length;
  }

  const renderItem: ListRenderItem<TaskType> = ({ item }) => (
    <Task key={item.id} task={item} onPress={() => onCompleteTask(item.id)} onDelete={() => onDeleteTask(item.id)} />
  );

  return (
    <View style={styles.container}>
      <View style={[styles.header, list.length > 0 && styles.headerNoBottomBorder]}>
        <View style={styles.headerTitle}>
          <Text style={styles.created}>Criadas</Text>
          <View style={styles.countContainer}>
            <Text style={styles.count}>{list.length}</Text>
          </View>
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.done}>Concluídas</Text>
          <View style={styles.countContainer}>
            <Text style={styles.count}>{getCompleteTasksLength()}</Text>
          </View>
        </View>
      </View>
        <FlatList
          data={list}
          renderItem={renderItem}
          ListEmptyComponent={
            <View style={styles.emptyStateContainer}>
              <Image
                style={styles.emptyStateImage}
                source={require("../../../assets/empty-list.png")}
              />
              <Text style={styles.emptyStateTopText}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyStateBottomText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          }
        />
    </View>
  );
}
