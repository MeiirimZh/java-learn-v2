import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";

export default function Task1() {
    const [q1Answer, setQ1Answer] = useState<number | null>(null);
    const [q2Answer, setQ2Answer] = useState<number | null>(null);
    const [feedback, setFeedback] = useState("");

    const checkAnswers = () => {
        const q1Correct = q1Answer === 1;
        const q2Correct = q2Answer === 0;

        if (q1Correct && q2Correct) {
            setFeedback("🎉 Отлично! Верно ответили на оба вопроса!");
        } else {
            setFeedback(
                "⚠️ Проверьте ответы: двоичный поиск — деление пополам, визуальный язык Scratch."
            );
        }
    };

    const getOptionStyle = (
        selected: number | null,
        index: number
    ) => [
        styles.option,
        selected === index && styles.selectedOption,
    ];

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        🧩 Лекция 1 · Основы IT & CS50
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            алгоритмическое мышление
                        </Text>
                    </View>
                </View>

                <View style={styles.explanation}>
                    <Text style={styles.explanationText}>
                        💡 Закрепите базовые понятия: что такое алгоритм,
                        двоичный поиск и курс CS50.
                    </Text>
                </View>

                <Text style={styles.question}>
                    ❓ Вопрос 1: Что такое двоичный поиск на примере телефонного
                    справочника?
                </Text>

                <TouchableOpacity
                    style={getOptionStyle(q1Answer, 0)}
                    onPress={() => setQ1Answer(0)}
                >
                    <Text style={styles.optionText}>
                        📘 Просматривать каждую страницу по порядку
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={getOptionStyle(q1Answer, 1)}
                    onPress={() => setQ1Answer(1)}
                >
                    <Text style={styles.optionText}>
                        🔍 Делить справочник пополам и отбрасывать ненужную
                        половину
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={getOptionStyle(q1Answer, 2)}
                    onPress={() => setQ1Answer(2)}
                >
                    <Text style={styles.optionText}>
                        🎲 Открывать случайную страницу
                    </Text>
                </TouchableOpacity>

                <Text style={[styles.question, { marginTop: 24 }]}>
                    ❓ Вопрос 2: Какой визуальный язык программирования изучают
                    на CS50?
                </Text>

                <TouchableOpacity
                    style={getOptionStyle(q2Answer, 0)}
                    onPress={() => setQ2Answer(0)}
                >
                    <Text style={styles.optionText}>🐱 Scratch</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={getOptionStyle(q2Answer, 1)}
                    onPress={() => setQ2Answer(1)}
                >
                    <Text style={styles.optionText}>🐍 PythonTurtle</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={getOptionStyle(q2Answer, 2)}
                    onPress={() => setQ2Answer(2)}
                >
                    <Text style={styles.optionText}>🎮 Blockly</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.checkButton}
                    onPress={checkAnswers}
                >
                    <Text style={styles.checkButtonText}>
                        ✅ Проверить ответы
                    </Text>
                </TouchableOpacity>

                {feedback.length > 0 && (
                    <View
                        style={[
                            styles.feedback,
                            feedback.includes("Отлично")
                                ? styles.success
                                : styles.error,
                        ]}
                    >
                        <Text style={styles.feedbackText}>
                            {feedback}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },

    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        padding: 20,
        elevation: 3,
    },

    header: {
        backgroundColor: "#1E3A8A",
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
    },

    title: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "700",
    },

    badge: {
        alignSelf: "flex-start",
        marginTop: 10,
        backgroundColor: "rgba(255,255,255,0.2)",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },

    badgeText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "600",
    },

    explanation: {
        backgroundColor: "#EFF6FF",
        borderRadius: 16,
        padding: 14,
        marginBottom: 20,
    },

    explanationText: {
        fontSize: 14,
        color: "#1E3A8A",
    },

    question: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
        color: "#111827",
    },

    option: {
        backgroundColor: "#F1F5F9",
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 18,
        marginBottom: 10,
    },

    selectedOption: {
        backgroundColor: "#DBEAFE",
        borderWidth: 2,
        borderColor: "#3B82F6",
    },

    optionText: {
        fontSize: 15,
        color: "#111827",
    },

    checkButton: {
        backgroundColor: "#1E3A8A",
        borderRadius: 30,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 12,
    },

    checkButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
    },

    feedback: {
        marginTop: 16,
        padding: 14,
        borderRadius: 16,
    },

    success: {
        backgroundColor: "#DCFCE7",
    },

    error: {
        backgroundColor: "#FEE2E2",
    },

    feedbackText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "600",
    },
});