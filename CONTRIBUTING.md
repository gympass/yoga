# Contributing Guide for Yoga Design System

This guide is to help developers contribute to the Yoga Design System efficiently. Our goal is to maintain smooth and organized collaboration, ensuring that all contributions are welcomed and properly integrated into the project.

Wellhub developers should also consult the Internal Guidelines.

## Code of Conduct

We adopted the [Contributor Covenant](https://www.contributor-covenant.org/), which is widely used in many projects and communities such Node.js and React. Please read the [full text](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) so that you can understand what actions will and will not be tolerated.

## General Principles

- **Communication:** Check if there is already an [issue](https://github.com/gympass/yoga/issues) open in our repository. If not, you can create a new one, [like this example](https://github.com/gympass/yoga/issues/785). Also, check the [discussion topics](https://github.com/gympass/yoga/discussions). Our team will analyze and prioritize within our initiatives. If you are interested and available, let us know and we will address you ASAP.

- **Transparency:** All discussions about development and contributions should be conducted transparently so that all collaborators can follow the progress and provide feedback.

- **Documentation:** Documentation is crucial. Document all changes made and add clear comments to the code.

- **Quality:** We prioritize the quality of code and implementations. Make sure to follow our coding standards and perform comprehensive tests.

## Setup for Web Development

#### Fork and Clone

First of all, fork and clone this repository.

```bash
$ git clone git@github.com:gympass/yoga.git
```

### [NVM](https://github.com/nvm-sh/nvm)

NVM is a version manager for NodeJS, designed to be installed per-user, and invoked per-shell.

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### [Node.js®](https://nodejs.org/en)

Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts. Attention: Make sure you are using node version 16.

```bash
$ nvm install 16
$ nvm use 16
$ node -v
```

#### [Yarn](https://yarnpkg.com/getting-started)

Yarn is an established open-source package manager used to manage dependencies in JavaScript projects. Start by enabling Corepack, if it isn't already.

```bash
$ corepack enable
```

Any time you'll want to update Yarn to the latest version, just run:

```bash
$ yarn
```

### Build

We use our doc environment to build the components. The documentation app will open in your browser after a few seconds.

```bash
$ yarn dev:web
```

## Setup for Native Development

You should check [the official documentation](https://reactnative.dev/docs/set-up-your-environment) for installation instructions. In this guide, you'll learn how to set up your environment to run projects with Android Studio or Xcode and develop with Android emulators and iOS simulators.

Yoga has an app for iOS and Android, named LabNative, which is used to develop the native version of our components.

### Build iOS

For the iOS development, type, and the simulator will open automagically.

```bash
$ yarn dev:native:ios
```

### Build Android

First, you'll need to open a virtual device manually and then:

```bash
$ yarn dev:native:android
```

### [React Native Doctor](https://www.npmjs.com/package/@react-native-community/cli-doctor)

It is part of the React Native CLI. It contains commands for diagnosing and fixing common Node.js, iOS, Android & React Native issues.

```bash
$ npx react-native doctor
```

## Development Process

### 1. Branch Pattern

If you have been assigned a collaboration task, we will inform you about the branch created in the relevant issue or discussion topic.

### 2. Development

- **New doc:** If you want to add a documentation that isn't of a component, like this one, you can create an .md file under ./docs/content/guidelines and it will be automagically added.

- **New icon:** Just add the .svg file under packages/icons/src/svg and modify the flags.ts or ui.ts to reflect your changes. Remember to test with the fill property and without fill, see this PR as an example. In some error cases, try exporting and importing the icon again, or removing the mask or rect.

- **New Component:** At Yoga, a Component isn't just one file. It has its own docs, tests, exports, native, web, and so on. To make it easy, there is a script at the root.

```bash
$ yarn new NewComponent
```

This will create/edit all files for the NewComponent in web and native versions:

```bash
packages
├─doc
│   └─content
│       └─components
│           └─components
│               └─newcomponent
│                   ├─index.mdx
│                   ├─newcomponent-native.mdx
│                   └─newcomponent-web.mdx
├─labnative
│   └─pages
│       ├─index.ts
│       └─NewComponent.tsx
└─yoga
    └─src
        ├─NewComponent
        │   ├─native
        │   │   ├─index.ts
        │   │   ├─NewComponent.tsx
        │   │   └─NewComponent.test.tsx
        │   ├─web
        │   │   ├─index.ts
        │   │   ├─NewComponent.tsx
        │   │   └─NewComponent.test.tsx
        │   ├─NewComponent.theme.ts
        │   ├─index.ts
        │   └─index.native.ts
        ├─index.ts
        └─index.native.ts
```

If you want to create a new component for only web or native version, you can add the respective flag:

```bash
$ yarn new NewComponent --web
```

or

```bash
$ yarn new NewComponent --native
```

- **New Theme:** Every component has its own `theme` file. You can find it in its own folder. When building a new component, make sure to add values like paddings, colors, margins, to the component theme file.

To create custom themes, Yoga exposes a `createTheme` function in order to generate new themes, you can refer to [Theme Generator](https://gympass.github.io/yoga/components/theming/themeGenerator) in order to see how to create custom themes.

### 3. Testing

Add tests to ensure that your changes work as expected. Make sure all existing tests still pass. Remember to test on the operating systems and browsers we support.

```bash
$ yarn test
```

or specifying the platform

```bash
$ yarn test:native
$ yarn test:web
```

All Yoga components have tests. To execute it for just one component, you can run:

```bash
$ yarn test /path/to/your/component
```

Or you can run it by a platform:

```bash
$ yarn test:web /path/to/your/component
$ yarn test:native /path/to/your/component
```

### 4. Commits

Make clear and descriptive commits. This project follows the conventional-commit pattern and, to help you with it, we use [commitizen](http://commitizen.github.io/cz-cli/). So, everytime you want to commit some change, please use:

```bash
$ yarn commit
```

Push your changes to your fork:

```bash
$ git push origin branch-name
```

Also, we have two hooks inside Yoga repo.

For run eslint:

```bash
$ pre-commit
```

For run test:

```bash
$ pre-push
```

### 5. Pull Requests

Open a Pull Request (PR) in the Yoga repository. Describe what was done, why it was done, and any other relevant details in the PR, following the template. Please always indicate in the PR when a design review is needed, along with images and videos.

### 6. Code Review Process

- **Internal Review:** Every change will be reviewed by at least two internal engineering and one design team members before being merged.
- **Request changes or comments:** Feedback will be provided directly in the PR. Please respond to suggestions and make the necessary changes.
- **Approval:** Once approved, the PR will be merged into the main branch by a Yoga team member.

### 7. Release Process

The deployment and release process begins after a Pull Request is merged into the repository. The content of each release can be viewed [here](https://github.com/gympass/yoga/releases). The published package on NPM can be found [here](https://www.npmjs.com/package/@gympass/yoga). Additionally, a notification is sent through internal communication channels to inform the team.
