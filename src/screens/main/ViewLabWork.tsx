// Экран просмотра лабораторной работы
import { useState, useLayoutEffect, useEffect } from "react";

import { StyleSheet, View, TouchableOpacity } from "react-native";
import AppText from "../../../components/AppText";
import Toast from "react-native-toast-message";

import usePdf from "../../hooks/usePdf";

import { StackScreenProps } from "@react-navigation/stack";
import { LabWorksStackParamList } from "../../navigation/types";

import PdfView from "../../../components/PdfView";

import { theme } from "../../theme";

import { useAuth } from "../../context/AuthContext";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase/firebase";

type Props = StackScreenProps<LabWorksStackParamList, "ViewLabWork">;

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
    | "Task11"
    | "Task12"
    | "Task13"
    | "Task14"
    | "Task15";

const tasks: Record<number, TaskScreen> = {
    1: "Task1",
    2: "Task2",
    3: "Task3",
    4: "Task4",
    5: "Task5",
    6: "Task6",
    7: "Task7",
    8: "Task8",
    9: "Task9",
    10: "Task10",
    11: "Task11",
    12: "Task12",
    13: "Task13",
    14: "Task14",
    15: "Task15"
};

export default function ViewLabWork({ route, navigation }: Props) {
    const { labWork } = route.params;
    const { pdf } = usePdf();

    const [ haveRead, setHaveRead ] = useState<boolean>(false);

    const { user } = useAuth();

    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Поздравляем 🎉',
            text2: 'Вы завершили лабораторную работу'
        })
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: labWork.title
        });
    }, [navigation, labWork.title]);

    const pdfFile = pdf.find(
        (pdfFile) => pdfFile.id === labWork.pdf_id
    );

    useEffect(() => {
        if (!user || !haveRead) return;

        const updateUser = async () => {
            await updateDoc(doc(db, "users", user.uid), {
                passedLabs: arrayUnion(labWork.id)
            });

            showToast();
        };

        updateUser();
    }, [haveRead, user, labWork.id]);

    if (!pdfFile) {
        return (
            <View>
                <AppText>PDF не найден</AppText>
            </View>
        )
    }

    if (!pdfFile) return null;

    return (
        <View style={ styles.main }>
            <PdfView fileId={ pdfFile.file_id } />

            {!haveRead && (
                <TouchableOpacity style={ styles.button } onPress={() => setHaveRead(true)}>
                    <AppText style={{ color: theme.colors.onPrimary }}>Завершить лабораторную</AppText>
                </TouchableOpacity>
            )}

            <TouchableOpacity 
                style={ styles.button }
                onPress={() => navigation.navigate(tasks[labWork.id])}>
                <AppText style={{ color: theme.colors.onPrimary }}>Перейти к заданию</AppText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,

        gap: theme.spacing.md,

        padding: theme.spacing.md
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: theme.colors.secondary,

        elevation: 5,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.12,
        shadowRadius: 10,

        borderRadius: 10,

        padding: theme.spacing.md
    }
});