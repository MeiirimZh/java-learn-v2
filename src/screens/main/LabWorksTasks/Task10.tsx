import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function Task10() {
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        const value = answer.trim();

        if (value.includes('dialog.show()')) {
            setFeedback(
                '🎉 Отлично! Диалог появится. Вы всё правильно сделали!'
            );
            setIsCorrect(true);
        } else {
            setFeedback(
                '⚠️ Неверно. Правильно: dialog.show();'
            );
            setIsCorrect(false);
        }
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        💬 Лабораторная работа №10
                    </Text>

                    <Text style={styles.subtitle}>
                        AlertDialog | Преподаватель Абдрахманова С.В.
                    </Text>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptionText}>
                        💡 <Text style={styles.bold}>Задание:</Text> Показать
                        созданный диалог (допишите строку).
                    </Text>
                </View>

                <View style={styles.main}>
                    <View style={styles.codeBlock}>
                        <Text style={styles.code}>
{`AlertDialog.Builder builder =
    new AlertDialog.Builder(this);

builder.setMessage("Вы уверены?");

builder.setPositiveButton(
    "Да",
    (d, w) -> finish()
);

AlertDialog dialog = builder.create();

________________ ;

// отобразить окно`}
                        </Text>
                    </View>

                    <TextInput
                        value={answer}
                        onChangeText={setAnswer}
                        placeholder="Код..."
                        style={styles.input}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={checkAnswer}
                    >
                        <Text style={styles.buttonText}>
                            🔔 Проверить
                        </Text>
                    </TouchableOpacity>

                    {!!feedback && (
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
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4fa',
    },

    content: {
        padding: 20,
    },

    card: {
        backgroundColor: '#ffffff',
        borderRadius: 32,
        overflow: 'hidden',
        elevation: 6,
    },

    header: {
        backgroundColor: '#2c3e6d',
        paddingVertical: 20,
        paddingHorizontal: 24,
    },

    title: {
        color: '#ffffff',
        fontSize: 26,
        fontWeight: '700',
    },

    subtitle: {
        color: '#ffffff',
        opacity: 0.9,
        fontSize: 13,
        marginTop: 6,
    },

    description: {
        backgroundColor: '#fff6e8',
        borderLeftWidth: 6,
        borderLeftColor: '#ff9a3c',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },

    descriptionText: {
        color: '#4a3b1c',
        fontSize: 15,
        lineHeight: 22,
    },

    bold: {
        fontWeight: '700',
    },

    main: {
        padding: 24,
    },

    codeBlock: {
        backgroundColor: '#1e293b',
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
    },

    code: {
        color: '#cbd5e1',
        fontFamily: 'monospace',
        fontSize: 14,
        lineHeight: 22,
    },

    input: {
        backgroundColor: '#fef9ef',
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 28,
        padding: 12,
        fontSize: 14,
        marginBottom: 12,
    },

    button: {
        backgroundColor: '#ff9a3c',
        borderRadius: 60,
        paddingVertical: 14,
        alignItems: 'center',
    },

    buttonText: {
        color: '#2c3e6d',
        fontSize: 16,
        fontWeight: '700',
    },

    feedback: {
        marginTop: 16,
        padding: 12,
        borderRadius: 40,
    },

    successFeedback: {
        backgroundColor: '#dff9e6',
    },

    errorFeedback: {
        backgroundColor: '#ffe0e0',
    },

    feedbackText: {
        textAlign: 'center',
        fontWeight: '500',
    },
});