import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Task6() {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [feedback, setFeedback] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        if (selectedAnswer === null) {
            setIsCorrect(false);
            setFeedback("⚠️ Сначала выберите вариант ответа.");
            return;
        }

        if (selectedAnswer === 0) {
            setIsCorrect(true);
            setFeedback(
                "🎯 Верно! Проект должен содержать минимум 2 спрайта, условие, цикл, переменную и звук."
            );
        } else {
            setIsCorrect(false);
            setFeedback(
                "❌ Неполные требования. Перечитайте лекцию и попробуйте снова."
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
                        ✨ Лекция 7 · Проект Scratch
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            творческое задание
                        </Text>
                    </View>
                </View>

                <View style={styles.explanation}>
                    <Text style={styles.explanationText}>
                        💡 Выберите правильные минимальные
                        требования к проекту Scratch.
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
                        ✔️ минимум 2 спрайта, условие, цикл,
                        переменная, звук
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
                        ❌ только один спрайт и анимация без
                        звука
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
                        ❌ достаточно одного спрайта и трёх
                        скриптов
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.checkButton}
                    onPress={checkAnswer}
                >
                    <Text style={styles.checkButtonText}>
                        📋 Проверить
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
        backgroundColor: "#EAB308",
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
    },

    title: {
        color: "#1F2937",
        fontSize: 22,
        fontWeight: "700",
    },

    badge: {
        alignSelf: "flex-start",
        marginTop: 10,
        backgroundColor: "rgba(0,0,0,0.15)",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },

    badgeText: {
        color: "#1F2937",
        fontSize: 12,
        fontWeight: "600",
    },

    explanation: {
        backgroundColor: "#FEF9C3",
        borderRadius: 16,
        padding: 14,
        marginBottom: 20,
    },

    explanationText: {
        color: "#854D0E",
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
        borderColor: "#EAB308",
        borderWidth: 2,
        backgroundColor: "#FEF3C7",
    },

    optionText: {
        fontSize: 15,
        color: "#111827",
        fontWeight: "500",
    },

    checkButton: {
        backgroundColor: "#EAB308",
        borderRadius: 30,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 12,
    },

    checkButtonText: {
        color: "#1F2937",
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
});