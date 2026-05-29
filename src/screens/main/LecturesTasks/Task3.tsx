import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Task3() {
    const [answer, setAnswer] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        const value = parseInt(answer.trim(), 10);

        if (value === 13) {
            setIsCorrect(true);
            setFeedback(
                "⭐ Верно! 1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 13"
            );
        } else {
            setIsCorrect(false);
            setFeedback(
                "❌ Неверно. Подсказка: 1101₂ = 8 + 4 + 1 = 13"
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
                        🔢 Лекция 3 · Двоичная система
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            перевод чисел
                        </Text>
                    </View>
                </View>

                <View style={styles.explanation}>
                    <Text style={styles.explanationText}>
                        💡 Переведите двоичное число в десятичную
                        систему счисления.
                    </Text>
                </View>

                <View style={styles.taskBlock}>
                    <Text style={styles.taskText}>
                        ⚙️ 1101₂ = ?₁₀
                    </Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Введите десятичное число"
                    keyboardType="numeric"
                    value={answer}
                    onChangeText={setAnswer}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={checkAnswer}
                >
                    <Text style={styles.buttonText}>
                        ✅ Перевести
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
        backgroundColor: "#047857",
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
        backgroundColor: "#ECFDF5",
        borderRadius: 16,
        padding: 14,
        marginBottom: 20,
    },

    explanationText: {
        color: "#065F46",
        fontSize: 14,
    },

    taskBlock: {
        backgroundColor: "#F0FDF4",
        borderRadius: 16,
        paddingVertical: 20,
        alignItems: "center",
        marginBottom: 20,
    },

    taskText: {
        fontSize: 28,
        fontWeight: "700",
        color: "#111827",
    },

    input: {
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderRadius: 30,
        paddingHorizontal: 18,
        paddingVertical: 14,
        fontSize: 16,
        marginBottom: 16,
    },

    button: {
        backgroundColor: "#10B981",
        borderRadius: 30,
        paddingVertical: 16,
        alignItems: "center",
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
    },

    feedback: {
        marginTop: 16,
        borderRadius: 16,
        padding: 14,
    },

    successFeedback: {
        backgroundColor: "#DCFCE7",
    },

    errorFeedback: {
        backgroundColor: "#FEE2E2",
    },

    feedbackText: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 15,
    },

    helpCard: {
        marginTop: 20,
        backgroundColor: "#F9FAFB",
        borderRadius: 16,
        padding: 16,
    },

    helpTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 8,
    },

    helpText: {
        fontSize: 14,
        color: "#374151",
    },

    helpFormula: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "700",
        color: "#047857",
    },
});