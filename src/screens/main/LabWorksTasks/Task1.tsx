import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function Task1() {
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        const userCode = answer.trim();

        const correct =
            userCode.includes('setContentView') &&
            (
                userCode.includes('R.layout.activity_main') ||
                userCode.includes('R.layout.')
            );

        if (correct) {
            setFeedback(
                '🎉 Отлично! Всё верно. Вы — красавчик, код установки разметки правильный!'
            );
            setIsCorrect(true);
        } else {
            setFeedback(
                '⚠️ Неверно. Нужно вызвать setContentView(R.layout.activity_main); чтобы связать интерфейс.'
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
                        📱 Лабораторная работа №1
                    </Text>

                    <Text style={styles.subtitle}>
                        Создание первого приложения · Преподаватель Абдрахманова С.В.
                    </Text>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptionText}>
                        💡 <Text style={styles.bold}>Задание:</Text> В методе onCreate
                        нужно установить разметку и вывести в TextView текст
                        «Иванов Иван, группа БПИ-231». Допишите недостающую строку.
                    </Text>
                </View>

                <View style={styles.editorArea}>
                    <View style={styles.codeBlock}>
                        <Text style={styles.code}>
                            {`public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        ______________________ ;  // установка макета

        TextView myText = findViewById(R.id.myTextView);
        myText.setText("Иванов Иван, группа БПИ-231");
    }
}`}
                        </Text>
                    </View>

                    <Text style={styles.label}>
                        ✏️ Вставьте пропущенный код:
                    </Text>

                    <TextInput
                        value={answer}
                        onChangeText={setAnswer}
                        placeholder="Пример: setContentView(R.layout.activity_main);"
                        multiline
                        style={styles.input}
                        textAlignVertical="top"
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={checkAnswer}
                    >
                        <Text style={styles.buttonText}>
                            ✅ Проверить
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
        paddingVertical: 20,
        paddingHorizontal: 24,
        backgroundColor: '#1e2a5e',
    },

    title: {
        color: '#ffffff',
        fontSize: 26,
        fontWeight: '700',
    },

    subtitle: {
        marginTop: 6,
        color: '#ffffff',
        opacity: 0.9,
        fontSize: 13,
    },

    description: {
        backgroundColor: '#fff6e0',
        borderLeftWidth: 6,
        borderLeftColor: '#ff9a3c',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },

    descriptionText: {
        fontSize: 15,
        color: '#4a3b1c',
        lineHeight: 22,
    },

    bold: {
        fontWeight: '700',
    },

    editorArea: {
        padding: 24,
    },

    codeBlock: {
        backgroundColor: '#1e293b',
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
    },

    code: {
        color: '#e2e8f0',
        fontFamily: 'monospace',
        fontSize: 14,
        lineHeight: 20,
    },

    label: {
        fontSize: 16,
        marginBottom: 8,
    },

    input: {
        backgroundColor: '#fef9ef',
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 20,
        padding: 12,
        minHeight: 80,
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
        fontWeight: '700',
        fontSize: 16,
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

    successText: {
        color: '#14532d',
    },

    errorText: {
        color: '#b91c1c',
    },
});