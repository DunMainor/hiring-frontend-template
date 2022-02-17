# Setup
Run `yarn` or `npm i` command in the root directory of the project to install dependencies:

# How to run the project on Android
1. Connect an android device to your computer via USB cable with USB debugging enabled or setup an AVD/emulator
2. Open the `adb` terminal and run `adb devices` to see if your device is connected.
3. Run `yarn prepare:android` to start the METRO bundler in a clean state.
4. Run `npx react-native run-android` to start the app on your device/AVD/Emulator.
