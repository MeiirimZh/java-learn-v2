import { View, ActivityIndicator } from 'react-native';
import AppText from './AppText';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';
import { useEffect, useState } from 'react';

import { theme } from '../src/theme';

type Props = {
    path: number;
};

export default function PdfView({ path }: Props) {
    const [localUri, setLocalUri] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPdf = async () => {
            try {
                const asset = Asset.fromModule(path);
                await asset.downloadAsync();
                setLocalUri(asset.localUri!);
            } catch (error) {
                console.error("Error loading PDF:", error);
            } finally {
                setLoading(false);
            }
        };

        loadPdf();
    }, [path]);

    if (loading) {
        return (
            <ActivityIndicator size="large" color={theme.colors.primary} />
        );
    }

    if (!localUri) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AppText>Не удалось загрузить файл PDF</AppText>
            </View>
        );
    }

    // ⚠️ Важно: используем Google Docs Viewer
    const viewerUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(localUri)}`;

    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: viewerUrl }}
                style={{ flex: 1 }}
                startInLoadingState
                renderLoading={() => (
                    <ActivityIndicator size="large" color={theme.colors.primary} />
                )}
            />
        </View>
    );
}