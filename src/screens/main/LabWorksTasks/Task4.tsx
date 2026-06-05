import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function Task4() {
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        const user = answer.trim();

        const correct =
            user.includes('textColor') &&
            (
                user.includes('#FF0000') ||
                user.includes('red') ||
                user.includes('android:textColor')
            );

        if (correct) {
            setFeedback(
                '✅ Верно! Вы отлично поняли стилизацию. Молодец!'
            );
            setIsCorrect(true);
        } else {
            setFeedback(
                '❌ Нужно добавить: <item name="android:textColor">#FF0000</item>'
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
                        🎨 Лабораторная работа №4: Стили
                    </Text>

                    <Text style={styles.subtitle}>
                        Преподаватель Абдрахманова С.В.
                    </Text>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptionText}>
                        💡 Задание: Допишите определение стиля в файле
                        styles.xml, который делает текст красным и размер 20sp.
                    </Text>
                </View>

                <View style={styles.editorArea}>
                    <View style={styles.codeBlock}>
                        <Text style={styles.code}>
{`<style name="MyTextStyle">
    <item name="android:textSize">20sp</item>

    _________________________

</style>`}
                        </Text>
                    </View>

                    <TextInput
                        value={answer}
                        onChangeText={setAnswer}
                        placeholder="Вставьте строку для цвета текста"
                        multiline
                        style={styles.input}
                        textAlignVertical="top"
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={checkAnswer}
                    >
                        <Text style={styles.buttonText}>
                            ✨ Применить проверку
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
        backgroundColor: '#eef2fa',
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
        fontSize: 13,
        opacity: 0.9,
        marginTop: 6,
    },

    description: {
        backgroundColor: '#fbf5e8',
        borderLeftWidth: 5,
        borderLeftColor: '#ff9a3c',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },

    descriptionText: {
        fontSize: 15,
        color: '#4a3b1c',
        lineHeight: 22,
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
        color: '#cbd5e1',
        fontFamily: 'monospace',
        fontSize: 14,
        lineHeight: 22,
    },

    input: {
        backgroundColor: '#fffaf0',
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 28,
        padding: 12,
        minHeight: 90,
        fontSize: 14,
        marginBottom: 12,
    },

    button: {
        backgroundColor: '#ff9a3c',
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
        borderRadius: 40,
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