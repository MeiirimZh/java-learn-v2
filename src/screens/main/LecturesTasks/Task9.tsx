import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Task9() {
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
                "✅ Верно! В Java отсутствие точки с запятой вызывает ошибку компиляции."
            );
        } else {
            setIsCorrect(false);
            setFeedback(
                "❌ Неверно. Java требует точку с запятой ';' в конце инструкции."
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
                        ⚙️ Лекция 13 · Компилятор Java
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            байт-код, JVM
                        </Text>
                    </View>
                </View>

                <View style={styles.explanation}>
                    <Text style={styles.explanationText}>
                        💡 Что произойдёт, если забыть точку с
                        запятой в Java?
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
                        🚫 Ошибка компиляции, программа не
                        запустится
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
                        ✅ Программа скомпилируется, но появится
                        предупреждение
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
                        ⚠️ Синтаксис будет исправлен
                        автоматически
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.checkButton}
                    onPress={checkAnswer}
                >
                    <Text style={styles.checkButtonText}>
                        🛠️ Проверить
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
        backgroundColor: "#7E22CE",
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
        backgroundColor: "#F3E8FF",
        borderRadius: 16,
        padding: 14,
        marginBottom: 20,
    },

    explanationText: {
        color: "#6B21A8",
        fontSize: 14,
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
        backgroundColor: "#F3E8FF",
        borderColor: "#A855F7",
        borderWidth: 2,
    },

    optionText: {
        fontSize: 15,
        color: "#111827",
        fontWeight: "500",
    },

    checkButton: {
        backgroundColor: "#A855F7",
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

    infoCard: {
        marginTop: 20,
        backgroundColor: "#F8FAFC",
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
        lineHeight: 20,
        marginBottom: 4,
    },
});