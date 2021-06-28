<p align="center">
  <img src="../doc/src/images/lotus.png" />
</p>

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)
![Github Actions](https://github.com/gympass/yoga/workflows/Yoga%20-%20Gympass%20Design%20System/badge.svg)

Design system at Gympass, our main intent is to support our projects.
We have open-sourced our project for those who are interested in checkout how we do things and organize our code and documentation here.

### What does it mean?

> Yoga is a scientific system of practices made to help each one of us achieve our highest potential and experience.

## Getting started

Gympass design-system's follows design guidelines specification, we developed a React and React Native UI library that contains a set of high quality components that defines our interfaces.

### Installing

In order to install our design-system just run:

```sh
yarn add @gympass/yoga

// or

npm install @gympass/yoga
```

### Usage

An important point in using it is that your whole application must be wrapped in our `ThemeProvider` component:

```
import { ThemeProvider, Button } from '@gympass/yoga';

const App = () => (
  <ThemeProvider>
    <Button>Find an activity</Button>
  </ThemeProvider>
);
```
