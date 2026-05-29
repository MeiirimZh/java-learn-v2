import { createStackNavigator } from "@react-navigation/stack";
import { LecturesStackParamList } from "../../navigation/types";

import LecturesList from "./LecturesList";
import ViewLecture from "./ViewLecture";
import Task1 from "./LecturesTasks/Task1";
import Task2 from "./LecturesTasks/Task2";
import Task3 from "./LecturesTasks/Task3";
import Task4 from "./LecturesTasks/Task4";
import Task5 from "./LecturesTasks/Task5";
import Task6 from "./LecturesTasks/Task6";
import Task7 from "./LecturesTasks/Task7";
import Task8 from "./LecturesTasks/Task8";
import Task9 from "./LecturesTasks/Task9";
import Task10 from "./LecturesTasks/Task10";
import Task11 from "./LecturesTasks/Task11";

import { theme } from "../../theme";

const Stack = createStackNavigator<LecturesStackParamList>();

export default function Lectures() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                    height: 100
                },
                headerTintColor: theme.colors.onPrimary
            }}>
            <Stack.Screen name="LecturesList" component={ LecturesList } options={{ title: 'Лекции' }} />
            <Stack.Screen name="ViewLecture" component={ ViewLecture } />
            <Stack.Screen name="Task1" component={ Task1 } options={{ title: '🧩 Лекция 1 · Основы IT & CS50' }} />
            <Stack.Screen name="Task2" component={ Task2 } options={{ title: '🎬 Лекция 2 · Нулевой уровень CS50' }} />
            <Stack.Screen name="Task3" component={ Task3 } options={{ title: '🔢 Лекция 3 · Двоичная система' }} />
            <Stack.Screen name="Task4" component={ Task4 } options={{ title: '💾 Лекция 4 · ASCII' }} />
            <Stack.Screen name="Task5" component={ Task5 } options={{ title: '🎨 Лекции 5-6 · Scratch' }} />
            <Stack.Screen name="Task6" component={ Task6 } options={{ title: '✨ Лекция 7 · Проект Scratch' }} />
            <Stack.Screen name="Task7" component={ Task7 } options={{ title: '☕ Лекции 8-10 · Ввод в Java' }} />
            <Stack.Screen name="Task8" component={ Task8 } options={{ title: '📦 Лекции 11-12 · Переменные и типы' }} />
            <Stack.Screen name="Task9" component={ Task9 } options={{ title: '⚙️ Лекция 13 · Компилятор Java' }} />
            <Stack.Screen name="Task10" component={ Task10 } options={{ title: '🏆 Итоги Level 1' }} />
            <Stack.Screen name="Task11" component={ Task11 } options={{ title: '🧮 Лекции 15-17 · int и String' }} />
        </Stack.Navigator>
    )
}