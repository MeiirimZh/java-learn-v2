import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function Task6() {
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        const value = answer.trim();

        const correct =
            value.includes('button.startAnimation') &&
            value.includes('anim');

        if (correct) {
            setFeedback(
                '🎯 Отлично! Красавчик! Анимация запущена.'
            );
            setIsCorrect(true);
        } else {
            setFeedback(
                '❌ Нужно: button.startAnimation(anim);'
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
                <Text style={styles.title}>
                    ✨ Лаб.6 Анимация
                </Text>

                <Text style={styles.subtitle}>
                    Преподаватель Абдрахманова С.В.
                </Text>

                <Text style={styles.description}>
                    💡 Задание: запустить анимацию на кнопке при клике.
                </Text>

                <View style={styles.codeBlock}>
                    <Text style={styles.code}>
{`Animation anim = AnimationUtils.loadAnimation(
    this,
    R.anim.scale_anim
);

________________________;

// запуск анимации на кнопке`}
                    </Text>
                </View>

                <TextInput
                    value={answer}
                    onChangeText={setAnswer}
                    placeholder="Код запуска..."
                    multiline
                    style={styles.input}
                    textAlignVertical="top"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={checkAnswer}
                >
                    <Text style={styles.buttonText}>
                        Проверить
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef2ff',
    },

    content: {
        padding: 20,
    },

    card: {
        backgroundColor: '#ffffff',
        borderRadius: 32,
        padding: 24,
        elevation: 6,
    },

    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1e2a5e',
    },

    subtitle: {
        marginTop: 6,
        fontSize: 14,
        color: '#555',
        marginBottom: 16,
    },

    description: {
        fontSize: 15,
        color: '#333',
        marginBottom: 16,
    },

    codeBlock: {
        backgroundColor: '#1e293b',
        borderRadius: 16,
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
        backgroundColor: '#fff8ed',
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        minHeight: 80,
        marginBottom: 12,
    },

    button: {
        backgroundColor: '#1e2a5e',
        borderRadius: 40,
        paddingVertical: 14,
        alignItems: 'center',
    },

    buttonText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16,
    },

    feedback: {
        marginTop: 16,
        padding: 12,
        borderRadius: 24,
    },

    successFeedback: {
        backgroundColor: '#d9f0e1',
    },

    errorFeedback: {
        backgroundColor: '#ffe0e0',
    },

    feedbackText: {
        textAlign: 'center',
        fontWeight: '500',
    },
});