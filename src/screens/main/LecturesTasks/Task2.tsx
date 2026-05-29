import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const TERMS = [
    {
        id: "loop",
        term: "⚡ Цикл",
    },
    {
        id: "binary",
        term: "📉 Двоичный поиск",
    },
    {
        id: "scratch",
        term: "🧠 Scratch",
    },
];

const DEFINITIONS = [
    {
        id: "loop",
        text: "Повторение действий",
    },
    {
        id: "binary",
        text: "Эффективный поиск делением пополам",
    },
    {
        id: "scratch",
        text: "Визуальная среда от MIT",
    },
];

export default function Task2() {
    const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

    const [matchedPairs, setMatchedPairs] = useState<
        Record<string, boolean>
    >({});

    const [message, setMessage] = useState(
        "✨ Выберите термин, затем определение"
    );

    const handleTermPress = (termId: string) => {
        if (matchedPairs[termId]) {
            return;
        }

        setSelectedTerm(termId);

        const term = TERMS.find((item) => item.id === termId);

        setMessage(
            `🔍 Выбран термин: ${term?.term}. Теперь выберите определение`
        );
    };

    const handleDefinitionPress = (definitionId: string) => {
        if (!selectedTerm) {
            setMessage("⚠️ Сначала выберите термин");
            return;
        }

        if (selectedTerm === definitionId) {
            const updatedPairs = {
                ...matchedPairs,
                [definitionId]: true,
            };

            setMatchedPairs(updatedPairs);
            setSelectedTerm(null);

            const allMatched =
                TERMS.every((item) => updatedPairs[item.id]);

            if (allMatched) {
                setMessage(
                    "🎉 Отлично! Все понятия верно соединены!"
                );
            } else {
                setMessage("✅ Пара соединена верно");
            }
        } else {
            setSelectedTerm(null);
            setMessage("❌ Неправильная пара. Попробуйте снова");
        }
    };

    const resetGame = () => {
        setSelectedTerm(null);
        setMatchedPairs({});
        setMessage("✨ Выберите термин, затем определение");
    };

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        🎬 Лекция 2 · Нулевой уровень CS50
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            алгоритмы и циклы
                        </Text>
                    </View>
                </View>

                <View style={styles.explanation}>
                    <Text style={styles.explanationText}>
                        💡 Соотнесите понятие с правильным
                        определением.
                    </Text>
                </View>

                <Text style={styles.sectionTitle}>
                    Термины
                </Text>

                {TERMS.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        activeOpacity={0.8}
                        disabled={matchedPairs[item.id]}
                        style={[
                            styles.termButton,
                            selectedTerm === item.id &&
                                styles.selectedItem,
                            matchedPairs[item.id] &&
                                styles.matchedItem,
                        ]}
                        onPress={() =>
                            handleTermPress(item.id)
                        }
                    >
                        <Text style={styles.itemText}>
                            {item.term}
                        </Text>
                    </TouchableOpacity>
                ))}

                <Text
                    style={[
                        styles.sectionTitle,
                        { marginTop: 24 },
                    ]}
                >
                    Определения
                </Text>

                {DEFINITIONS.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        activeOpacity={0.8}
                        disabled={matchedPairs[item.id]}
                        style={[
                            styles.definitionButton,
                            matchedPairs[item.id] &&
                                styles.matchedItem,
                        ]}
                        onPress={() =>
                            handleDefinitionPress(item.id)
                        }
                    >
                        <Text style={styles.itemText}>
                            {item.text}
                        </Text>
                    </TouchableOpacity>
                ))}

                <View
                    style={[
                        styles.messageBox,
                        message.includes("❌")
                            ? styles.errorBox
                            : styles.successBox,
                    ]}
                >
                    <Text style={styles.messageText}>
                        {message}
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.resetButton}
                    onPress={resetGame}
                >
                    <Text style={styles.resetButtonText}>
                        🔄 Сбросить пары
                    </Text>
                </TouchableOpacity>
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
        backgroundColor: "#EA580C",
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
        backgroundColor: "#FFF7ED",
        borderRadius: 16,
        padding: 14,
        marginBottom: 20,
    },

    explanationText: {
        color: "#9A3412",
        fontSize: 14,
    },

    sectionTitle: {
        fontSize: 17,
        fontWeight: "700",
        marginBottom: 12,
        color: "#111827",
    },

    termButton: {
        backgroundColor: "#FEF3C7",
        borderRadius: 30,
        padding: 14,
        marginBottom: 10,
    },

    definitionButton: {
        backgroundColor: "#F1F5F9",
        borderRadius: 30,
        padding: 14,
        marginBottom: 10,
    },

    selectedItem: {
        borderWidth: 2,
        borderColor: "#F97316",
    },

    matchedItem: {
        backgroundColor: "#DCFCE7",
        opacity: 0.7,
    },

    itemText: {
        fontSize: 15,
        textAlign: "center",
        color: "#111827",
        fontWeight: "500",
    },

    messageBox: {
        borderRadius: 16,
        padding: 14,
        marginTop: 16,
    },

    successBox: {
        backgroundColor: "#DCFCE7",
    },

    errorBox: {
        backgroundColor: "#FEE2E2",
    },

    messageText: {
        textAlign: "center",
        fontWeight: "600",
    },

    resetButton: {
        marginTop: 16,
        backgroundColor: "#EA580C",
        borderRadius: 30,
        paddingVertical: 14,
        alignItems: "center",
    },

    resetButtonText: {
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: 15,
    },
});