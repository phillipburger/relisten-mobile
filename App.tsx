// https://github.com/uuidjs/uuid#react-native--expo
import 'react-native-get-random-values';
import 'uuid';

import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { RelistenApiProvider } from './relisten/api/context';
import { HomeScreen } from './relisten/screens/Home';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration'; // import plugin
import relativeTime from 'dayjs/plugin/relativeTime'; // import plugin
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RealmProvider } from './relisten/realm/schema';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Icon } from '@expo/vector-icons/build/createIconSet';

import { Image } from 'react-native';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const RelistenTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(0,157,193)',
    background: '#001d24',
    card: '#001114',
  },
};

function cacheImages(images: Array<string | number>) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts: Array<Icon<string, string>['font']>) {
  return fonts.map((font) => Font.loadAsync(font));
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // Load any resources or data that you need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync().then(() => {});

        const imageAssets = cacheImages([require('./assets/toolbar_relisten.png')]);

        const fontAssets = cacheFonts([MaterialIcons.font, MaterialCommunityIcons.font]);

        await Promise.all([...imageAssets, ...fontAssets]);
      } catch (e) {
        // You might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync().then(() => {});
      }
    }

    loadResourcesAndDataAsync().then(() => {});
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <RealmProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={RelistenTheme}>
          <RelistenApiProvider>
            <HomeScreen />
            <StatusBar style="light" />
          </RelistenApiProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </RealmProvider>
  );
}
