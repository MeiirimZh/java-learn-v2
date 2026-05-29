import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Task8() {
    const [answer, setAnswer] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        const normalized = answer.trim().toLowerCase();

        if (normalized === "double") {
            setIsCorrect(true);
            setFeedback(
                "✔️ Молодец! double — тип данных для хранения дробных чисел."
            );
        } else {
            setIsCorrect(false);
            setFeedback(
                "❌ Неверно. Правильный ответ: double."
            );
        }
    };

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        📦 Лекции 11-12 · Переменные и типы
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            int, double, boolean
                        </Text>
                    </View>
                </View>

                <View style={styles.explanation}>
                    <Text style={styles.explanationText}>
                        💡 Заполните пропуск.
                    </Text>
                </View>

                <View style={styles.questionContainer}>
                    <Text style={styles.question}>
                        Переменная для хранения дробного числа
                        в Java — ...
                    </Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Введите тип данных"
                    value={answer}
                    onChangeText={setAnswer}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TouchableOpacity
                    style={styles.checkButton}
                    onPress={checkAnswer}
                >
                    <Text style={styles.checkButtonText}>
                        🔎 Проверить
                    </Text>
                </TouchableOpacity>

                {feedback.length > 0 && (
                    <View
                        style={[
                            styles.feedback,
                            isCorrect
                                ? styles.successFeedback
                                : styles.errorFeedback,
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
        backgroundColor: "#4338CA",
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
        backgroundColor: "#EEF2FF",
        borderRadius: 16,
        padding: 14,
        marginBottom: 20,
    },

    explanationText: {
        color: "#3730A3",
        fontSize: 14,
    },

    questionContainer: {
        backgroundColor: "#F8FAFC",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },

    question: {
        fontSize: 17,
        fontWeight: "600",
        color: "#111827",
        textAlign: "center",
    },

    input: {
        borderWidth: 1,
        borderColor: "#CBD5E1",
        borderRadius: 30,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        marginBottom: 16,
    },

    checkButton: {
        backgroundColor: "#6366F1",
        borderRadius: 30,
        paddingVertical: 16,
        alignItems: "center",
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

    successFeedback: {
        backgroundColor: "#DCFCE7",
    },

    errorFeedback: {
        backgroundColor: "#FEE2E2",
    },

    feedbackText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "600",
    },

    tipContainer: {
        marginTop: 20,
        backgroundColor: "#F8FAFC",
        borderRadius: 16,
        padding: 16,
    },

    tipTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 10,
    },

    tipText: {
        fontSize: 14,
        color: "#374151",
        marginBottom: 4,
    },
});