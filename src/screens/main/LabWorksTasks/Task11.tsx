import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function Task11() {
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        const value = answer.trim();

        const correct =
            value.includes('nm.notify') &&
            value.includes('100') &&
            value.includes('notif');

        if (correct) {
            setFeedback(
                '✅ Прекрасно! Уведомление отправится. Вы справились!'
            );
            setIsCorrect(true);
        } else {
            setFeedback(
                '❌ Ошибка. Правильный ответ: nm.notify(100, notif);'
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
                        🔔 Лабораторная №11
                    </Text>

                    <Text style={styles.subtitle}>
                        Уведомления (Notification) | Абдрахманова С.В.
                    </Text>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptionText}>
                        💡 <Text style={styles.bold}>Задание:</Text> Отправить
                        уведомление через NotificationManager.
                    </Text>
                </View>

                <View style={styles.editorArea}>
                    <View style={styles.codeBlock}>
                        <Text style={styles.code}>
{`NotificationManager nm =
    (NotificationManager)
    getSystemService(
        NOTIFICATION_SERVICE
    );

Notification notif =
    builder.build();

______________________ ;

// отправить уведомление с ID = 100`}
                        </Text>
                    </View>

                    <TextInput
                        value={answer}
                        onChangeText={setAnswer}
                        placeholder="Вставьте код..."
                        style={styles.input}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={checkAnswer}
                    >
                        <Text style={styles.buttonText}>
                            📨 Проверить
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
        backgroundColor: '#f5f7fc',
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
        backgroundColor: '#1e2a5e',
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
        backgroundColor: '#fff2df',
        borderLeftWidth: 6,
        borderLeftColor: '#f97316',
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

    editorArea: {
        padding: 24,
    },

    codeBlock: {
        backgroundColor: '#0f172a',
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
    },

    code: {
        color: '#e2e8f0',
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
        backgroundColor: '#2c3e6d',
        borderRadius: 40,
        paddingVertical: 14,
        alignItems: 'center',
    },

    buttonText: {
        color: '#ffffff',
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