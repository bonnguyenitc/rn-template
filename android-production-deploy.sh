#!/bin/bash

set -e

now=$(date +'%d/%m/%Y - %H:%M')

npx kill-port 8081
npx jetify
cd android
./gradlew clean
ENVFILE=.env.production ./gradlew assembleProductionRelease
dg deploy "app/build/outputs/apk/production/release/app-production-release.apk" --message "Android Production - $now"
