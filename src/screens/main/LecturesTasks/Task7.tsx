import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Task7() {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [feedback, setFeedback] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        if (selectedAnswer === null) {
            setIsCorrect(false);
            setFeedback("⚠️ Выберите один из вариантов ответа.");
            return;
        }

        if (selectedAnswer === 0) {
            setIsCorrect(true);
            setFeedback(
                "✅ Правильно! print не переводит строку, а println переводит. Результат будет:\nAB\nC"
            );
        } else {
            setIsCorrect(false);
            setFeedback(
                "❌ Неверно. print оставляет курсор в текущей строке, а println переводит на новую строку."
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
                        ☕ Лекции 8-10 · Ввод в Java
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            System.out.println
                        </Text>
                    </View>
                </View>

                <View style={styles.explanation}>
                    <Text style={styles.explanationText}>
                        💡 Что выведет данный код?
                    </Text>

                    <View style={styles.codeBlock}>
                        <Text style={styles.codeText}>
                            System.out.print("A");
                        </Text>

                        <Text style={styles.codeText}>
                            System.out.println("B");
                        </Text>

                        <Text style={styles.codeText}>
                            System.out.print("C");
                        </Text>
                    </View>
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
                        🔘 AB (новая строка) C
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
                        🔘 ABC (всё в одной строке)
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
                        🔘 A затем BC
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.checkButton}
                    onPress={checkAnswer}
                >
                    <Text style={styles.checkButtonText}>
                        ▶️ Выполнить и проверить
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
        backgroundColor: "#0F766E",
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
        backgroundColor: "#CCFBF1",
        borderRadius: 16,
        padding: 14,
        marginBottom: 20,
    },

    explanationText: {
        color: "#134E4A",
        fontSize: 14,
        marginBottom: 12,
    },

    codeBlock: {
        backgroundColor: "#1E293B",
        borderRadius: 16,
        padding: 14,
    },

    codeText: {
        color: "#E2E8F0",
        fontSize: 15,
        fontFamily: "monospace",
        marginBottom: 4,
    },

    option: {
        backgroundColor: "#F1F5F9",
        borderRadius: 20,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },

    selectedOption: {
        backgroundColor: "#CCFBF1",
        borderColor: "#14B8A6",
        borderWidth: 2,
    },

    optionText: {
        fontSize: 15,
        color: "#111827",
        fontWeight: "500",
    },

    checkButton: {
        backgroundColor: "#14B8A6",
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
        lineHeight: 22,
    },
});