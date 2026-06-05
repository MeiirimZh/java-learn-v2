import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function Task5() {
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        const code = answer.trim();

        const correct =
            code.includes('tv.setText') &&
            (
                code.includes('items[position]') ||
                code.includes('getItem(position)')
            );

        if (correct) {
            setFeedback(
                '🎉 Идеально! Адаптер заполняет строки правильно. Вы справились!'
            );
            setIsCorrect(true);
        } else {
            setFeedback(
                '⚠️ Неверно. Правильно: tv.setText(items[position]);'
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
                        📋 Лабораторная №5: Кастомный список
                    </Text>

                    <Text style={styles.subtitle}>
                        Абдрахманова С.В. | Java Android
                    </Text>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptionText}>
                        💡 Задание: В методе getView адаптера нужно установить
                        текст в TextView для каждой строки.
                    </Text>
                </View>

                <View style={styles.mainPane}>
                    <View style={styles.codeBlock}>
                        <Text style={styles.code}>
{`@Override
public View getView(int position, View convertView, ViewGroup parent) {

    View row = inflater.inflate(
        R.layout.list_item,
        null
    );

    TextView tv = row.findViewById(R.id.textView);

    ________________________; // установить текст из массива

    return row;
}`}
                        </Text>
                    </View>

                    <TextInput
                        value={answer}
                        onChangeText={setAnswer}
                        placeholder="Например: tv.setText(items[position]);"
                        multiline
                        style={styles.input}
                        textAlignVertical="top"
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={checkAnswer}
                    >
                        <Text style={styles.buttonText}>
                            🧪 Проверить
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
        backgroundColor: '#f2f5fc',
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
        fontSize: 13,
        opacity: 0.9,
        marginTop: 6,
    },

    description: {
        backgroundColor: '#fff2e0',
        borderLeftWidth: 6,
        borderLeftColor: '#f97316',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },

    descriptionText: {
        fontSize: 15,
        color: '#4a3b1c',
        lineHeight: 22,
    },

    mainPane: {
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
        backgroundColor: '#fef7e6',
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 28,
        padding: 12,
        minHeight: 90,
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