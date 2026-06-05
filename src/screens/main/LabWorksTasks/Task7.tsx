import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function Task7() {
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        const userCode = answer.trim();

        const correct =
            userCode.includes('addMarker') &&
            userCode.includes('MarkerOptions') &&
            userCode.includes('karaganda') &&
            userCode.includes('Караганда');

        if (correct) {
            setFeedback(
                '🎉 Отлично! Маркер в Караганде добавлен верно. Ты — настоящий Android-разработчик!'
            );
            setIsCorrect(true);
        } else {
            setFeedback(
                '⚠️ Неверно. Правильный ответ: googleMap.addMarker(new MarkerOptions().position(karaganda).title("Караганда, Казахстан"));'
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
                        🗺️ Лабораторная работа №7
                    </Text>

                    <Text style={styles.subtitle}>
                        Работа с картами · Google Maps | Преподаватель Абдрахманова С.В.
                    </Text>

                    <Text style={styles.location}>
                        📍 Казахстан, город Караганда
                    </Text>
                </View>

                <View style={styles.taskInfo}>
                    <Text style={styles.taskText}>
                        💡 <Text style={styles.bold}>Задание:</Text> В методе
                        onMapReady нужно добавить маркер на карту в центре
                        Караганды (Казахстан). Координаты: широта 49.8063,
                        долгота 73.1024.
                    </Text>
                </View>

                <View style={styles.codeArea}>
                    <View style={styles.codeBlock}>
                        <Text style={styles.code}>
{`@Override
public void onMapReady(GoogleMap googleMap) {

    LatLng karaganda =
        new LatLng(49.8063, 73.1024);

    ________________________;

    // добавить маркер с заголовком
    // "Караганда, Казахстан"

    googleMap.moveCamera(
        CameraUpdateFactory.newLatLngZoom(
            karaganda,
            12
        )
    );
}`}
                        </Text>
                    </View>

                    <TextInput
                        value={answer}
                        onChangeText={setAnswer}
                        placeholder="Вставьте код добавления маркера..."
                        multiline
                        style={styles.input}
                        textAlignVertical="top"
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={checkAnswer}
                    >
                        <Text style={styles.buttonText}>
                            ✅ Проверить задание
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
                            <Text
                                style={[
                                    styles.feedbackText,
                                    isCorrect
                                        ? styles.successText
                                        : styles.errorText,
                                ]}
                            >
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
        elevation: 8,
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
        marginBottom: 4,
    },

    subtitle: {
        color: '#ffffff',
        opacity: 0.9,
        fontSize: 13,
    },

    location: {
        color: '#ffffff',
        opacity: 0.8,
        fontSize: 12,
        marginTop: 6,
    },

    taskInfo: {
        backgroundColor: '#fff6e8',
        borderLeftWidth: 6,
        borderLeftColor: '#ff9a3c',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },

    taskText: {
        color: '#4a3b1c',
        fontSize: 15,
        lineHeight: 22,
    },

    bold: {
        fontWeight: '700',
    },

    codeArea: {
        padding: 24,
    },

    codeBlock: {
        backgroundColor: '#1e293b',
        borderRadius: 24,
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
        borderColor: '#dddddd',
        borderRadius: 28,
        padding: 14,
        minHeight: 100,
        fontSize: 14,
        marginBottom: 14,
    },

    button: {
        backgroundColor: '#2c3e6d',
        borderRadius: 60,
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
        borderRadius: 60,
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

    successText: {
        color: '#14532d',
    },

    errorText: {
        color: '#b91c1c',
    },
});