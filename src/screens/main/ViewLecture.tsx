// Экран просмотра лекции
import { useLayoutEffect, useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import AppText from "../../../components/AppText";
import Markdown from "react-native-markdown-display";

import { StackScreenProps } from "@react-navigation/stack";
import { LecturesStackParamList } from "../../navigation/types";

import { theme } from "../../theme";

import { useAuth } from "../../context/AuthContext";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase/firebase";

type Props = StackScreenProps<LecturesStackParamList, "ViewLecture">;

type TaskScreen =
    | "Task1"
    | "Task2"
    | "Task3"
    | "Task4"
    | "Task5"
    | "Task6"
    | "Task7"
    | "Task8"
    | "Task9"
    | "Task10"
    | "Task11";

const tasks: Record<number, TaskScreen> = {
    1: "Task1",
    2: "Task2",
    3: "Task3",
    4: "Task4",
    5: "Task5",
    6: "Task5",
    7: "Task6",
    8: "Task7",
    9: "Task7",
    10: "Task7",
    11: "Task8",
    12: "Task8",
    13: "Task9",
    14: "Task10",
    15: "Task11",
    16: "Task11",
    17: "Task11"
};

export default function ViewLecture({ route, navigation }: Props) {
    const { lecture } = route.params;
    const { user } = useAuth();

    const [ haveRead, setHaveRead ] = useState<boolean>(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: lecture.title
        });
    }, [navigation, lecture.title]);

    useEffect(() => {
        if (!user || !haveRead) return;

        const updateUser = async () => {
            await updateDoc(doc(db, "users", user.uid), {
                passedLectures: arrayUnion(lecture.id)
            });
        };

        updateUser();
    }, [haveRead, user, lecture.id]);
    
    return (
        <View style={ styles.main }>
            <ScrollView
                contentContainerStyle={ styles.lecture }
                showsVerticalScrollIndicator={ false }
                onScroll={({ nativeEvent }) => {
                    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;

                    const isEndReached = 
                        layoutMeasurement.height + contentOffset.y >=
                        contentSize.height - 20;
                    
                    if (isEndReached) {
                        if (!haveRead) {
                            setHaveRead(true);
                        }
                    }
                }}
                scrollEventThrottle={16} >
                <Markdown
                    style={{
                        code_inline: {
                            backgroundColor: "#ededeb",
                            color: "#eb5757"    
                        }
                    }}>{ lecture.content }</Markdown>

                <TouchableOpacity 
                    style={ styles.taskButton }
                    onPress={() => navigation.navigate(tasks[lecture.id])}>
                    <AppText style={{ color: theme.colors.onPrimary }}>Перейти к заданию</AppText>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: theme.spacing.md
    },
    lecture: {
        backgroundColor: theme.colors.bgLight,

        borderRadius: 10,
        
        padding: theme.spacing.md,
    },
    taskButton: {
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: theme.colors.primary,

        elevation: 5,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.12,
        shadowRadius: 10,

        borderRadius: 10,

        marginTop: theme.spacing.lg,
        padding: theme.spacing.md
    }
});