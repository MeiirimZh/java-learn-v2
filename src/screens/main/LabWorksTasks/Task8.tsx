import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function Task8() {
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        const ans = answer.trim();

        const correct =
            ans.includes('setOnClickPendingIntent') &&
            (
                ans.includes('R.id') ||
                ans.includes('widget')
            );

        if (correct) {
            setFeedback(
                '✅ Отлично! Виджет будет открывать сайт. Вы молодец!'
            );
            setIsCorrect(true);
        } else {
            setFeedback(
                '❌ Ошибка. Нужно: views.setOnClickPendingIntent(R.id.widget_layout, pending);'
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
                        🖼️ Лабораторная работа №8
                    </Text>

                    <Text style={styles.subtitle}>
                        Создание виджета | Преподаватель Абдрахманова С.В.
                    </Text>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptionText}>
                        💡 <Text style={styles.bold}>Задание:</Text> Установите
                        обработчик нажатия на виджет, чтобы открывался сайт
                        (используя PendingIntent).
                    </Text>
                </View>

                <View style={styles.contentArea}>
                    <View style={styles.codeBlock}>
                        <Text style={styles.code}>
{`RemoteViews views = new RemoteViews(
    context.getPackageName(),
    R.layout.widget_layout
);

Intent intent = new Intent(
    Intent.ACTION_VIEW,
    Uri.parse(url)
);

PendingIntent pending =
    PendingIntent.getActivity(
        context,
        0,
        intent,
        PendingIntent.FLAG_IMMUTABLE
    );

______________________ ;

// привязать клик к макету виджета

appWidgetManager.updateAppWidget(
    appWidgetId,
    views
);`}
                        </Text>
                    </View>

                    <TextInput
                        value={answer}
                        onChangeText={setAnswer}
                        placeholder="Вставьте код..."
                        multiline
                        style={styles.input}
                        textAlignVertical="top"
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={checkAnswer}
                    >
                        <Text style={styles.buttonText}>
                            🔍 Проверить
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

    contentArea: {
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
        borderColor: '#cccccc',
        borderRadius: 28,
        padding: 12,
        minHeight: 100,
        marginBottom: 14,
        fontSize: 14,
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