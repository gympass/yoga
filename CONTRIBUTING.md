# Contributing

First of all, make sure you have all settings up for Yoga to run it locally:

1. Fork and clone this repo
2. Install dependencies using:

```
$ yarn
```

In collaborations made by **Gympassers**, we recommend that you create a task on your team's board using the epic `Yoga Contribution`. Use this task for the branch name like: `DS-001`.

In **open-source collaboration** cases, we usually follow the `{feat|fix|doc|ci}/{what-am-i-doing}` for branch names.

This project follows the
[conventional-commit](https://www.conventionalcommits.org/en/v1.0.0/) pattern
and, to help you with it, we use
[commitizen](http://commitizen.github.io/cz-cli/). So, everytime you want to
commit some change, please use:

```
$ yarn commit
```

## Bug fixes and issues

If you believe that you have found any inconsistencies in the documentation, unexpected behavior in the components, or a token misused please let us know.

**For Gympassers:**
Send us a message on `Yoga Community Chat` to see if other users are experiencing the same issue. If it is a priority for your team and you are available, please create a task to collaborate with Yoga.

**For open-source collaboration:**
Check if there is already an [issue](https://github.com/gympass/yoga/issues) open in our repository. If not, you can create a new one. Our team will analyze and prioritize within our initiatives. If you are interested and available, you can also open a PR following our standards suggesting a solution.

## New Component

At Yoga, a Component isn't just one file. It has its own docs, tests, exports,
native, web, and so on. To make it easy, there is a script at the root:

```
$ yarn new NewComponent
```

This will create/edit all files for the NewComponent in web and native versions:

```
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
│       ├─index.js
│       └─NewComponent.jsx
└─yoga
    └─src
        ├─NewComponent
        │   ├─native
        │   │   ├─index.js
        │   │   ├─NewComponent.jsx
        │   │   └─NewComponent.test.jsx
        │   ├─web
        │   │   ├─index.js
        │   │   ├─NewComponent.jsx
        │   │   └─NewComponent.test.jsx
        │   ├─NewComponent.theme.js
        │   ├─index.js
        │   └─index.native.js
        ├─index.js
        └─index.native.js
```

If you want to create a new component for only web or native version, you can add the respective flag:

```
$ yarn new NewComponent --web
```

```
$ yarn new NewComponent --native
```

### Theming

Every component has its own `theme` file. You can find it in its own folder.

When building a new component, make sure to add values like paddings, colors,
margins, to the component theme file.

To create custom themes, Yoga exposes a `createTheme` function in order to generate new themes, you can refer to [Theme Generator](https://gympass.github.io/yoga/components/theming/themeGenerator) in order to see how to create custom themes.

### Web

We use our doc environment to build our components. To develop your component,
you can just type.

```
$ yarn dev:web
```

and the documentation app will open in your browser after few seconds.

### Native

For native development, certify you have all requirements as listed
[here](https://reactnative.dev/docs/environment-setup).

Yoga has an app, for iOS and Android, named as LabNative used to develop the
native version of our components.

#### iOS (Mac only)

For the iOS development, type, and the simulator will open automagically.

```
$ yarn dev:native:ios
```

### Android

First, you'll need to open a virtual device manually and then:

```
$ yarn dev:native:android
```

#### Documentation

Each component has a specific documentation for each platform.

#### Test

All Yoga components have tests. To execute it for just one component, you
can run:

```
$ yarn test /path/to/your/component
```

Or you can run it by a platform:

```
$ yarn test:web /path/to/your/component
$ yarn test:native /path/to/your/component
```

When you finish the development of your component, don't forget to add its
tests!

Before pushing your changes, certify all tests are passing, running:

```
$ yarn test

// or specifying the platform
$ yarn test:native
$ yarn test:web
```

## New Doc

If you want to add a documentation that isn't of a component, like
[this one](https://gympass.github.io/yoga/guidelines/tokens), you can
create an `.md` file under `./docs/content/guidelines` and it will be automagically added.

## New Icon

Just add the `.svg` file under `packages/icons/src/svg` and modify the
`index.js` and `index.native.js` to reflect your changes.

## Git Hooks

We have two hooks inside Yoga repo:

1. `pre-commit`: run eslint on all repo
2. `pre-push`: run `yarn test`
