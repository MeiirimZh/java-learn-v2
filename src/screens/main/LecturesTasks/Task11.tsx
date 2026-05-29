import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Task11() {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [feedback, setFeedback] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        if (selectedAnswer === null) {
            setIsCorrect(false);
            setFeedback("⚠️ Выберите вариант ответа.");
            return;
        }

        if (selectedAnswer === 0) {
            setIsCorrect(true);
            setFeedback(
                "✔️ Верно! При делении int на int дробная часть отбрасывается, поэтому 17 / 5 = 3."
            );
        } else {
            setIsCorrect(false);
            setFeedback(
                "❌ Неверно. В Java целочисленное деление отбрасывает дробную часть. Правильный ответ: 3."
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
                        🧮 Лекции 15-17 · int и String
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            арифметика и конкатенация
                        </Text>
                    </View>
                </View>

                <View style={styles.explanation}>
                    <Text style={styles.explanationText}>
                        💡 Решите выражение и вспомните правило
                        целочисленного деления в Java.
                    </Text>
                </View>

                <View style={styles.codeBlock}>
                    <Text style={styles.codeText}>
                        int result = 17 / 5;
                    </Text>

                    <Text style={styles.questionText}>
                        Чему равен result?
                    </Text>
                </View>

                <TouchableOpacity
                    style={[
                        styles.option,
                        selectedAnswer === 0 &&
                            styles.selectedOption,
                    ]}
                    onPress={() => setSelectedAnswer(0)}
                >
                    <Text style={styles.optionText}>
                        3 (целочисленное деление)
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.option,
                        selectedAnswer === 1 &&
                            styles.selectedOption,
                    ]}
                    onPress={() => setSelectedAnswer(1)}
                >
                    <Text style={styles.optionText}>
                        3.4
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.option,
                        selectedAnswer === 2 &&
                            styles.selectedOption,
                    ]}
                    onPress={() => setSelectedAnswer(2)}
                >
                    <Text style={styles.optionText}>
                        2
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.checkButton}
                    onPress={checkAnswer}
                >
                    <Text style={styles.checkButtonText}>
                        🔢 Вычислить
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
        backgroundColor: "#BE123C",
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
        backgroundColor: "#FFE4E6",
        borderRadius: 16,
        padding: 14,
        marginBottom: 20,
    },

    explanationText: {
        color: "#9F1239",
        fontSize: 14,
    },

    codeBlock: {
        backgroundColor: "#1E293B",
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
    },

    codeText: {
        color: "#E2E8F0",
        fontSize: 16,
        fontFamily: "monospace",
        marginBottom: 10,
    },

    questionText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "700",
    },

    option: {
        backgroundColor: "#F8FAFC",
        borderRadius: 20,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },

    selectedOption: {
        backgroundColor: "#FFE4E6",
        borderColor: "#F43F5E",
        borderWidth: 2,
    },

    optionText: {
        fontSize: 15,
        color: "#111827",
        fontWeight: "500",
    },

    checkButton: {
        backgroundColor: "#F43F5E",
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

    tipCard: {
        marginTop: 20,
        backgroundColor: "#F8FAFC",
        borderRadius: 16,
        padding: 16,
    },

    tipTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 8,
    },

    tipText: {
        fontSize: 14,
        color: "#374151",
        marginBottom: 6,
    },

    example: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "700",
        color: "#BE123C",
    },
});