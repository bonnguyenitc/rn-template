#!/bin/bash

set -e

now=$(date +'%d/%m/%Y - %H:%M')

npx kill-port 8081
npx jetify
cd android
./gradlew clean
ENVFILE=.env.development ./gradlew assembleDevelopmentRelease
dg deploy "app/build/outputs/apk/development/release/app-development-release.apk" --message "Android Development - $now"
