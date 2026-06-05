// Навигатор экранов лабораторных работ
import { createStackNavigator } from "@react-navigation/stack";
import { LabWorksStackParamList } from "../../navigation/types";

import LabWorksList from "./LabWorksList";
import ViewLabWork from "./ViewLabWork";
import Task1 from "./LabWorksTasks/Task1";
import Task2 from "./LabWorksTasks/Task2";
import Task3 from "./LabWorksTasks/Task3";
import Task4 from "./LabWorksTasks/Task4";
import Task5 from "./LabWorksTasks/Task5";
import Task6 from "./LabWorksTasks/Task6";
import Task7 from "./LabWorksTasks/Task7";
import Task8 from "./LabWorksTasks/Task8";
import Task9 from "./LabWorksTasks/Task9";
import Task10 from "./LabWorksTasks/Task10";
import Task11 from "./LabWorksTasks/Task11";
import Task12 from "./LabWorksTasks/Task12";
import Task13 from "./LabWorksTasks/Task13";
import Task14 from "./LabWorksTasks/Task14";
import Task15 from "./LabWorksTasks/Task15";

import { theme } from "../../theme";

const Stack = createStackNavigator<LabWorksStackParamList>();

export default function LabWorks() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                    height: 100
                },
                headerTintColor: theme.colors.onPrimary
            }}>
            <Stack.Screen name="LabWorksList" component={ LabWorksList } options={{ title: 'Лабораторные работы' }} />
            <Stack.Screen name="ViewLabWork" component={ ViewLabWork } />
            <Stack.Screen
                name="Task1"
                component={Task1}
                options={{ title: "📱 Лабораторная №1: Первое Android-приложение" }}
            />

            <Stack.Screen
                name="Task2"
                component={Task2}
                options={{ title: "🧩 Лабораторная №2: EditText → Button → TextView" }}
            />

            <Stack.Screen
                name="Task3"
                component={Task3}
                options={{ title: "🚀 Лабораторная №3: Переход на SecondActivity" }}
            />

            <Stack.Screen
                name="Task4"
                component={Task4}
                options={{ title: "🎨 Лабораторная №4: Стили и темы" }}
            />

            <Stack.Screen
                name="Task5"
                component={Task5}
                options={{ title: "📋 Лабораторная №5: Кастомный список" }}
            />

            <Stack.Screen
                name="Task6"
                component={Task6}
                options={{ title: "✨ Лабораторная №6: Анимация" }}
            />

            <Stack.Screen
                name="Task7"
                component={Task7}
                options={{ title: "🗺️ Лабораторная №7: Google Maps" }}
            />

            <Stack.Screen
                name="Task8"
                component={Task8}
                options={{ title: "🖼️ Лабораторная №8: Создание виджета" }}
            />

            <Stack.Screen
                name="Task9"
                component={Task9}
                options={{ title: "📌 Лабораторная №9: Options Menu" }}
            />

            <Stack.Screen
                name="Task10"
                component={Task10}
                options={{ title: "💬 Лабораторная №10: AlertDialog" }}
            />

            <Stack.Screen
                name="Task11"
                component={Task11}
                options={{ title: "🔔 Лабораторная №11: Уведомления" }}
            />

            <Stack.Screen
                name="Task12"
                component={Task12}
                options={{ title: "🎵 Лабораторная №12: Воспроизведение звука" }}
            />

            <Stack.Screen
                name="Task13"
                component={Task13}
                options={{ title: "📽️ Лабораторная №13: VideoView" }}
            />

            <Stack.Screen
                name="Task14"
                component={Task14}
                options={{ title: "📸 Лабораторная №14: Камера" }}
            />

            <Stack.Screen
                name="Task15"
                component={Task15}
                options={{ title: "⚙️ Лабораторная №15: SharedPreferences и SQLite" }}
            />
        </Stack.Navigator>
    )
}