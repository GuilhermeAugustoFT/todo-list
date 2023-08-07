import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from './styles'
import { TaskType } from "../../types";

interface Props{
    task: TaskType;
    onPress: () => void;
    onDelete: () => void;
}

export default function Task({task, onPress, onDelete}: Props) {
 return(
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <Image source={task.done ? require('../../../assets/task-completed.png') : require('../../../assets/complete-task.png')}/>
        </TouchableOpacity> 
        <Text style={[styles.text, task.done && styles.completedTaskText]}>{task.text}</Text>
        <TouchableOpacity onPress={onDelete}>
            <Image source={require('../../../assets/delete.png')}/>
        </TouchableOpacity>
    </View>
 )   
}