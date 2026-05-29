import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Task4() {
    const [answered, setAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (answer: boolean) => {
        setAnswered(true);

        // В HTML правильный ответ: ЛОЖЬ
        if (!answer) {
            setIsCorrect(true);
            setFeedback(
                "✅ Правильно! Классический ASCII использует 7 бит (0–127)."
            );
        } else {
            setIsCorrect(false);
            setFeedback(
                "❌ Ошибка. Стандартный ASCII является 7-битной кодировкой."
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
                        💾 Лекция 4 · ASCII
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            кодирование символов
                        </Text>
                    </View>
                </View>

                <View style={styles.explanation}>
                    <Text style={styles.explanationText}>
                        💡 Определите истинность утверждения
                        про кодировку ASCII.
                    </Text>
                </View>

                <View style={styles.statementCard}>
                    <Text style={styles.statementTitle}>
                        🔹 Утверждение
                    </Text>

                    <Text style={styles.statementText}>
                        «Стандарт ASCII использует 8 бит для
                        кодирования всех символов»
                    </Text>
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.trueButton}
                        onPress={() => checkAnswer(true)}
                    >
                        <Text style={styles.buttonText}>
                            ✅ Правда
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.falseButton}
                        onPress={() => checkAnswer(false)}
                    >
                        <Text style={styles.buttonText}>
                            ❌ Ложь
                        </Text>
                    </TouchableOpacity>
                </View>

                {answered && (
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
        backgroundColor: "#6D28D9",
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
        backgroundColor: "#F5F3FF",
        borderRadius: 16,
        padding: 14,
        marginBottom: 20,
    },

    explanationText: {
        color: "#5B21B6",
        fontSize: 14,
    },

    statementCard: {
        backgroundColor: "#FAFAFA",
        borderRadius: 16,
        padding: 18,
    },

    statementTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 10,
    },

    statementText: {
        fontSize: 17,
        lineHeight: 24,
        color: "#111827",
    },

    buttonsContainer: {
        flexDirection: "row",
        gap: 12,
        marginTop: 20,
    },

    trueButton: {
        flex: 1,
        backgroundColor: "#DCFCE7",
        borderRadius: 20,
        paddingVertical: 16,
        alignItems: "center",
    },

    falseButton: {
        flex: 1,
        backgroundColor: "#FEE2E2",
        borderRadius: 20,
        paddingVertical: 16,
        alignItems: "center",
    },

    buttonText: {
        fontWeight: "700",
        fontSize: 16,
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
        fontSize: 15,
        fontWeight: "600",
    },

    infoCard: {
        marginTop: 20,
        backgroundColor: "#F9FAFB",
        borderRadius: 16,
        padding: 16,
    },

    infoTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 8,
    },

    infoText: {
        fontSize: 14,
        color: "#374151",
        marginBottom: 6,
        lineHeight: 20,
    },
});