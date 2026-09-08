import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pl.kartografia.zmyslow',
  appName: 'Kartografia Zmysłów',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#080707'
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
