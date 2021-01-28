#!/bin/bash

set -e

if [[ -f .env ]]; then
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

now=$(date +'%d/%m/%Y - %H:%M')

npx kill-port 8081
cd ios
pod install
xcrun agvtool next-version -all
xcodebuild -workspace tms.xcworkspace -scheme "staging" -sdk iphoneos -configuration Release clean
xcodebuild -workspace tms.xcworkspace -scheme "staging" -sdk iphoneos -configuration Release archive -archivePath "$PWD"/build/tms.xcarchive
xcodebuild -exportArchive -archivePath $PWD/build/tms.xcarchive -exportOptionsPlist StagingExportOptions.plist -exportPath "$PWD"/build
dg deploy "build/staging.ipa" --message "IOS Staging - $now"
