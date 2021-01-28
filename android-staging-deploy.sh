#!/bin/bash

set -e

now=$(date +'%d/%m/%Y - %H:%M')

npx kill-port 8081
npx jetify
cd android
./gradlew clean
ENVFILE=.env.staging ./gradlew assembleStagingRelease
dg deploy "app/build/outputs/apk/staging/release/app-staging-release.apk" --message "Android Staging - $now"
