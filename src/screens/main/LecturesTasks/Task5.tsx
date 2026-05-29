import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const WORDS = [
    "персонаж",
    "сцены",
    "спрайт",
    "объект",
    "или",
    "это",
];

export default function Task5() {
    const [sentence, setSentence] = useState<string[]>([]);
    const [feedback, setFeedback] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const addWord = (word: string) => {
        setSentence((prev) => [...prev, word]);
    };

    const clearSentence = () => {
        setSentence([]);
        setFeedback("");
        setIsCorrect(null);
    };

    const checkSentence = () => {
        const text = sentence.join(" ").toLowerCase();

        const correct =
            text.includes("спрайт это персонаж") ||
            text.includes("спрайт это объект");

        if (correct) {
            setIsCorrect(true);
            setFeedback(
                "🎉 Совершенно верно! Спрайт — это персонаж или объект в Scratch."
            );
        } else {
            setIsCorrect(false);
            setFeedback(
                '🔁 Попробуйте собрать определение: "спрайт это персонаж" или "спрайт это объект".'
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
                        🎨 Лекции 5-6 · Scratch
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            спрайты и скрипты
                        </Text>
                    </View>
                </View>

                <View style={styles.explanation}>
                    <Text style={styles.explanationText}>
                        💡 Соберите определение из слов.
                        Нажимайте на слова по порядку.
                    </Text>
                </View>

                <Text style={styles.sectionTitle}>
                    Доступные слова
                </Text>

                <View style={styles.wordsContainer}>
                    {WORDS.map((word, index) => (
                        <TouchableOpacity
                            key={`${word}-${index}`}
                            style={styles.wordButton}
                            onPress={() => addWord(word)}
                        >
                            <Text style={styles.wordText}>
                                {word}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentenceLabel}>
                        📝 Ваше предложение:
                    </Text>

                    <Text style={styles.sentenceText}>
                        {sentence.length > 0
                            ? sentence.join(" ")
                            : "Нажмите на слова"}
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.checkButton}
                    onPress={checkSentence}
                >
                    <Text style={styles.buttonText}>
                        ✅ Проверить определение
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.resetButton}
                    onPress={clearSentence}
                >
                    <Text style={styles.buttonText}>
                        🔄 Очистить
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
        backgroundColor: "#BE185D",
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
        backgroundColor: "#FDF2F8",
        borderRadius: 16,
        padding: 14,
        marginBottom: 20,
    },

    explanationText: {
        color: "#9D174D",
        fontSize: 14,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 12,
    },

    wordsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },

    wordButton: {
        backgroundColor: "#FCE7F3",
        borderRadius: 24,
        paddingHorizontal: 16,
        paddingVertical: 10,
    },

    wordText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#831843",
    },

    sentenceContainer: {
        marginTop: 20,
        backgroundColor: "#FFF1F2",
        borderRadius: 16,
        padding: 16,
    },

    sentenceLabel: {
        fontWeight: "700",
        marginBottom: 8,
    },

    sentenceText: {
        fontSize: 16,
        lineHeight: 24,
        color: "#111827",
    },

    checkButton: {
        backgroundColor: "#BE185D",
        borderRadius: 30,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 20,
    },

    resetButton: {
        backgroundColor: "#6B7280",
        borderRadius: 30,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 12,
    },

    buttonText: {
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: 15,
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
});