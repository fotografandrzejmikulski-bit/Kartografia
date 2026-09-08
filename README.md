# Kartografia Zmysłów — Android / React

Mobile-first React + Vite game foundation with PWA support and Capacitor Android configuration.

## Included

- six gameplay phases
- consent pause / emergency stop
- body-map state with six zones
- bag-building and push-your-luck
- tension track and control threshold
- market and engine progression
- 99-card library model
- final scenarios
- achievements, statistics and local persistence
- offline service worker / installable PWA
- premium visual system: black leather, 24k gold, snow white and pink
- Capacitor Android configuration (`pl.kartografia.zmyslow`)
- GitHub Actions build validation

## Run locally

```bash
npm install
npm run dev
npm run build
```

## Android preparation

```bash
npm install
npm run android:add
npm run android:sync
npm run android:open
```

For a debug APK:

```bash
npm run android:build
```

The repository does not claim a release-signed APK/AAB until an Android build environment has successfully produced and validated that artifact.
