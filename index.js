
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { ThemeProvider } from 'react-native-magnus';
import { SafeAreaProvider } from "react-native-safe-area-context";

import App from './App';

export default function Main() {
    return (
        <ThemeProvider>
            <SafeAreaProvider>
                <App />
            </SafeAreaProvider>
        </ThemeProvider>
    );
}

AppRegistry.registerComponent('main', () => Main);