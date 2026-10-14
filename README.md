# Flora

UI prototype of a plant-care mobile app, built with Expo and React Native. The screens were generated with [Locofy](https://www.locofy.ai/) from a design. They cover onboarding, plant details and care guides, a "snap tip" camera flow, and watering and fertilizing reminders.

The app is static UI only. It has no data layer, no backend calls and no state management. Each screen renders hardcoded content, such as a sample "Wild mint" plant.

## Screens

The `screens/` folder has 28 screens, including:

- Onboarding: `WelcomeScreen`, `OnboardingScreen`, `OnboardingScreen1`, `OnboardingScreen2`
- Plants: `ExplorePlants`, `PlantDetails`, `CareGuide`, `TaskWildmintInfo`, `TaskWildmintCare`
- Snap tip / camera: `Snaptip`, `Snaptip1`, `Snaptip2`, `Camera`
- Reminders: `MyPlantsaddReminder`, `MyPlantsaddedReminder*`, `ReminderTask*`, `ReminderAddplant`, `ReminderChanfeSchedule*`, `ChangeSchedule*`
- `Notification1`

`App.tsx` registers 12 of these screens in a native stack navigator, starting at `Notification1`. The other screens exist but are not wired into navigation.

## Tech stack

- [Expo](https://expo.dev/) SDK 50, React Native 0.73, TypeScript
- React Navigation 6 (native stack)
- `expo-font` (Inter and Roboto, bundled in `assets/fonts`), `expo-image`, `expo-linear-gradient`

## Project structure

```
App.tsx           # Font loading and stack navigator
GlobalStyles.ts   # Shared colors, font families, sizes
screens/          # One file per generated screen
assets/           # Images, icons, fonts
app.json          # Expo config
```

## Getting started

Requirements: the [Expo environment](https://docs.expo.dev/get-started/installation/).

```bash
npm install
npm start          # or: npm run ios / npm run android / npm run web
```

No environment variables are needed.
