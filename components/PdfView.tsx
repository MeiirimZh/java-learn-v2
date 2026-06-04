// Отображает PDF-файл из Google Drive во встроенном WebView с индикатором загрузки
import { View, ActivityIndicator } from 'react-native';
import AppText from './AppText';
import { WebView } from 'react-native-webview';

import { theme } from '../src/theme';

type Props = {
    fileId: string;
};

export default function PdfView({ fileId }: Props) {

    if (!fileId) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AppText>Не указан файл PDF</AppText>
            </View>
        );
    }

    const pdfUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const viewerUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(pdfUrl)}`;

    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: viewerUrl }}
                style={{ flex: 1 }}
                startInLoadingState
                javaScriptEnabled
                domStorageEnabled
                renderLoading={() => (
                    <ActivityIndicator size="large" color={theme.colors.primary} />
                )}
                onError={(e) => {
                    console.error('WebView error:', e.nativeEvent);
                }}
            />
        </View>
    );
}