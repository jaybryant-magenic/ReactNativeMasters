# ReactNativeMasters
This repository contains assignments for **Magenic Masters React Native class**

## Instructions on bulding the ReactApp project
- After forking this repo, open ReactApp project directory on command prompt/terminal.
- Run **npm install** (this will download all the necessary library to the project's *node_modules* directory)

## Fixing Android dependencies' conflicts
Kindly modify the following libraries *build.gradle* files using the snippets below:

- **react-native-sqlite-storage's build.gradle**
```
def safeExtGet(prop, fallback) {
    rootProject.ext.has(prop) ? rootProject.ext.get(prop) : fallback
}

buildscript {
    repositories {
        jcenter()
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:2.2.0'
    }
}

apply plugin: 'com.android.library'

android {
    compileSdkVersion safeExtGet('compileSdkVersion', 26)
    buildToolsVersion safeExtGet('buildToolsVersion', '26.0.2')

    defaultConfig {
        minSdkVersion safeExtGet('minSdkVersion', 16)
        targetSdkVersion safeExtGet('targetSdkVersion', 26)
        versionCode 1
        versionName "1.0"
    }
    lintOptions {
        abortOnError false
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation 'com.facebook.react:react-native:0.14.+'
}
```

- **react-native-camera's build.gradle**
```
def safeExtGet(prop, fallback) {
    rootProject.ext.has(prop) ? rootProject.ext.get(prop) : fallback
}

buildscript {
  repositories {
    jcenter()
    google()
    maven {
      url 'https://maven.google.com'
    }
  }

  dependencies {
    classpath 'com.android.tools.build:gradle:3.0.0'
  }
}

apply plugin: 'com.android.library'

android {
  compileSdkVersion safeExtGet('compileSdkVersion', 26)
  buildToolsVersion safeExtGet('buildToolsVersion', '26.0.2')

  defaultConfig {
    minSdkVersion safeExtGet('minSdkVersion', 16)
    targetSdkVersion safeExtGet('targetSdkVersion', 26)
  }
  lintOptions {
    abortOnError false
    warning 'InvalidPackage'
  }
}

repositories {
  mavenCentral()
  maven {
   url 'https://maven.google.com'
  }
  maven { url "https://jitpack.io" }
  maven {
    // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
    url "$rootDir/../node_modules/react-native/android"
  }
}

dependencies {
  compileOnly 'com.facebook.react:react-native:+'
  compileOnly 'com.facebook.infer.annotation:infer-annotation:+'
  implementation "com.google.zxing:core:3.3.0"
  implementation "com.drewnoakes:metadata-extractor:2.9.1"
  implementation "com.google.android.gms:play-services-vision:${safeExtGet('googlePlayServicesVersion', '12.0.1')}"
  implementation "com.android.support:exifinterface:${safeExtGet('supportLibVersion', '27.1.0')}"
  implementation "com.android.support:support-annotations:${safeExtGet('supportLibVersion', '27.1.0')}"
  implementation "com.android.support:support-v4:${safeExtGet('supportLibVersion', '27.1.0')}"
}
```

- **react-native-push-notification's build.gradle**
```
buildscript {
    repositories {
        jcenter()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:2.1.3'
    }
}

allprojects {
    repositories {
        jcenter()
        google()
    }
}

apply plugin: 'com.android.library'

def DEFAULT_COMPILE_SDK_VERSION = 23
def DEFAULT_BUILD_TOOLS_VERSION = "23.0.1"
def DEFAULT_TARGET_SDK_VERSION = 23
def DEFAULT_SUPPORT_LIB_VERSION = "23.1.1"
def DEFAULT_GOOGLE_PLAY_SERVICES_VERSION = "+"
def DEFAULT_FIREBASE_MESSAGING_VERSION = "+"

android {
    compileSdkVersion project.hasProperty('compileSdkVersion') ? project.compileSdkVersion : DEFAULT_COMPILE_SDK_VERSION
    buildToolsVersion project.hasProperty('buildToolsVersion') ? project.buildToolsVersion : DEFAULT_BUILD_TOOLS_VERSION

    defaultConfig {
        minSdkVersion 16
        targetSdkVersion project.hasProperty('targetSdkVersion') ? project.targetSdkVersion : DEFAULT_TARGET_SDK_VERSION
        versionCode 1
        versionName "1.0"
        ndk {
            abiFilters "armeabi-v7a", "x86"
        }
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    def supportLibVersion = project.hasProperty('supportLibVersion') ? project.supportLibVersion : DEFAULT_SUPPORT_LIB_VERSION
    def googlePlayServicesVersion = project.hasProperty('googlePlayServicesVersion') ? project.googlePlayServicesVersion : DEFAULT_GOOGLE_PLAY_SERVICES_VERSION
    def firebaseVersion = project.hasProperty('firebaseVersion') ? project.firebaseVersion : DEFAULT_FIREBASE_MESSAGING_VERSION

    implementation fileTree(dir: 'libs', include: ['*.jar'])
    testImplementation 'junit:junit:4.12'
    implementation "com.android.support:appcompat-v7:$supportLibVersion"
    implementation 'com.facebook.react:react-native:+'
    implementation "com.google.android.gms:play-services-gcm:$googlePlayServicesVersion"
    implementation 'me.leolin:ShortcutBadger:1.1.8@aar'
    implementation "com.google.firebase:firebase-messaging:$firebaseVersion"
}
```
- **react-native-image-picker's build.gradle**
```
def safeExtGet(prop, fallback) {
    rootProject.ext.has(prop) ? rootProject.ext.get(prop) : fallback
}

import groovy.json.JsonSlurper

def computeVersionName() {
    // dynamically retrieve version from package.json
    def slurper = new JsonSlurper()
    def json = slurper.parse(file('../package.json'), "utf-8")
    return json.version
}

buildscript {
    repositories {
        jcenter()
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:2.2.+'
    }
}

apply plugin: 'com.android.library'

android {
    compileSdkVersion safeExtGet('compileSdkVersion', 26)
    buildToolsVersion safeExtGet('buildToolsVersion', '26.0.2')

    defaultConfig {
        minSdkVersion safeExtGet('minSdkVersion', 16)
        targetSdkVersion safeExtGet('targetSdkVersion', 26)
        versionCode 1
        versionName computeVersionName()
    }
    lintOptions {
        abortOnError false
    }
}

repositories {
    mavenCentral()
    maven {
        url "$projectDir/../Example/node_modules/react-native/android"
    }
    maven {
        url "$projectDir/../../react-native/android"
    }
}

dependencies {
    implementation "com.facebook.react:react-native:+"  // From node_modules
    
    testImplementation "junit:junit:4.10"
    testImplementation "org.assertj:assertj-core:1.7.0"
    testImplementation "org.robolectric:robolectric:3.3.2"

    testImplementation "org.easytesting:fest-assert-core:${FEST_ASSERT_CORE_VERSION}"
    testImplementation "org.powermock:powermock-api-mockito:${POWERMOCK_VERSION}"
    testImplementation "org.powermock:powermock-module-junit4-rule:${POWERMOCK_VERSION}"
    testImplementation "org.powermock:powermock-classloading-xstream:${POWERMOCK_VERSION}"
    testImplementation "org.mockito:mockito-core:${MOCKITO_CORE_VERSION}"
}
```

## Links/References
- [React Native Docs](https://facebook.github.io/react-native/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [Sqlite Storage](https://www.npmjs.com/package/react-native-sqlite-storage)
- [RNCamera](https://www.npmjs.com/package/react-native-camera)
- [Push Notification](https://www.npmjs.com/package/react-native-push-notification)
- [Image Picker](https://www.npmjs.com/package/react-native-image-picker)



# :fire: **Happy forking!**  :facepunch::heart:
