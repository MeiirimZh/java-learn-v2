import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Task10() {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [feedback, setFeedback] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        if (selectedAnswer === null) {
            setIsCorrect(false);
            setFeedback("⚠️ Выберите один из вариантов.");
            return;
        }

        if (selectedAnswer === 0 || selectedAnswer === 1) {
            setIsCorrect(true);
            setFeedback(
                "🔥 Верно! На первом уровне вы изучили вывод на экран, переменные, компиляцию и комментарии."
            );
        } else {
            setIsCorrect(false);
            setFeedback(
                "❌ Базы данных изучаются значительно позже. Пока вы освоили основы Java."
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
                        🏆 Итоги Level 1
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            что я умею
                        </Text>
                    </View>
                </View>

                <View style={styles.explanation}>
                    <Text style={styles.explanationText}>
                        💡 Отметьте навык и проверьте, относится
                        ли он к темам первого уровня.
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
                        Вывод на экран и переменные типа int
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
                        Основы компиляции и комментарии
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
                        Полноценную работу с базами данных
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.checkButton}
                    onPress={checkAnswer}
                >
                    <Text style={styles.checkButtonText}>
                        📚 Подтвердить успехи
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
        backgroundColor: "#115E59",
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
    },

    summaryCard: {
        marginTop: 20,
        backgroundColor: "#F8FAFC",
        borderRadius: 16,
        padding: 16,
    },

    summaryTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 10,
    },

    summaryText: {
        fontSize: 14,
        color: "#374151",
        marginBottom: 6,
    },
});