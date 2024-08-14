<p align="center">
  <img height="250" src="packages/doc/src/images/yoga-logo-color.png" />
</p>

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-49-orange.svg?style=flat-square)](#contributors)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

![Github Actions](https://github.com/gympass/yoga/workflows/Yoga%20-%20Gympass%20Design%20System/badge.svg)

Design system at Wellhub, our main intent is to support our projects. We have open-sourced our project for those who are interested in checkout how we do things and organize our code and documentation here.

**What does it mean?**

Yoga is a scientific system of practices made to help each one of us achieve our highest potential and experience.

## Documentation

Yoga is documented at [http://gympass.github.io/yoga](https://gympass.github.io/yoga).

## Installing

In order to install our design-system just run:

```bash
$ yarn add @gympass/yoga
```

## Usage

An important point is that your whole application must be wrapped in our ThemeProvider component:

```bash
import { ThemeProvider, Button } from '@gympass/yoga';

const App = () => (
  <ThemeProvider>
    <Button>Find an activity</Button>
  </ThemeProvider>
);

```

## Architecture

The Yoga Design System codebase is structured as a monorepo, containing individually versioned libraries. Below is an overview of the main packages:

| Package                                                  | Version                                                                                                                           | Size                                                                                                                                                | Description                                                    |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`@gympass/yoga`](/packages/yoga)                        | [![npm version](https://badgen.net/npm/v/@gympass/yoga)](https://www.npmjs.com/package/@gympass/yoga)                             | [![Bundle size](https://badgen.net/bundlephobia/minzip/@gympass/yoga)](https://bundlephobia.com/result?p=@gympass/yoga)                             | Main package that brings together and exports all components   |
| [`@gympass/yoga-tokens`](/packages/tokens)               | [![npm version](https://badgen.net/npm/v/@gympass/yoga-tokens)](https://www.npmjs.com/package/@gympass/yoga-tokens)               | [![Bundle size](https://badgen.net/bundlephobia/minzip/@gympass/yoga-tokens)](https://bundlephobia.com/result?p=@gympass/yoga-tokens)               | Contains the design tokens used to maintain visual consistency |
| [`@gympass/yoga-common`](/packages/common)               | [![npm version](https://badgen.net/npm/v/@gympass/yoga-common)](https://www.npmjs.com/package/@gympass/yoga-common)               | [![Bundle size](https://badgen.net/bundlephobia/minzip/@gympass/yoga-common)](https://bundlephobia.com/result?p=@gympass/yoga-common)               | Contains some helper variables used in all packages            |
| [`@gympass/yoga-icons`](/packages/icons)                 | [![npm version](https://badgen.net/npm/v/@gympass/yoga-icons)](https://www.npmjs.com/package/@gympass/yoga-icons)                 | [![Bundle size](https://badgen.net/bundlephobia/minzip/@gympass/yoga-icons)](https://bundlephobia.com/result?p=@gympass/yoga-icons)                 | Library of icons used in components                            |
| [`@gympass/yoga-illustrations`](/packages/illustrations) | [![npm version](https://badgen.net/npm/v/@gympass/yoga-illustrations)](https://www.npmjs.com/package/@gympass/yoga-illustrations) | [![Bundle size](https://badgen.net/bundlephobia/minzip/@gympass/yoga-illustrations)](https://bundlephobia.com/result?p=@gympass/yoga-illustrations) | Library of illustrations used in components                    |
| [`@gympass/yoga-helpers`](/packages/helpers)             | [![npm version](https://badgen.net/npm/v/@gympass/yoga-helpers)](https://www.npmjs.com/package/@gympass/yoga-helpers)             | [![Bundle size](https://badgen.net/bundlephobia/minzip/@gympass/yoga-helpers)](https://bundlephobia.com/result?p=@gympass/yoga-helpers)             | Helper functions to make yoga components easier to use         |
| [`@gympass/yoga-system`](/packages/system)               | [![npm version](https://badgen.net/npm/v/@gympass/yoga-system)](https://www.npmjs.com/package/@gympass/yoga-system)               | [![Bundle size](https://badgen.net/bundlephobia/minzip/@gympass/yoga-system)](https://bundlephobia.com/result?p=@gympass/yoga-system)               | Tools to apply themes and styles based on design tokens        |

## Support

**Browser:** We support the 3 latest and stable releases of all major browsers and platforms

| Browser          | Version |
| ---------------- | ------- |
| Chrome           | >= 125  |
| Chrome (Android) | >= 125  |
| Safari (macOS)   | >= 15   |
| Safari (iOS)     | >= 15   |
| Edge             | >= 125  |
| Firefox          | >= 125  |

**Operational System:** Yoga provides support for iOS 14 and higher and Android 7 and higher.

| OS      | Version | Viewport Size                          |
| ------- | ------- | -------------------------------------- |
| Android | >= 7    | Android Large: 360 x 800 (Samsung S20) |
| iOS     | >= 14   | iPhone SE: 320 x 568                   |

**[React](https://react.dev/):** Build user interfaces out of individual pieces called components written in JavaScript. Yoga supports versions `>=16`.

**[React Native](https://reactnative.dev/):** Brings the React programming paradigm to platforms like Android and iOS. Yoga supports version `0.72.3`.

**[Picker](https://www.npmjs.com/package/react-native-picker-select):** A Picker component for React Native which emulates the native interfaces for iOS and Android. Yoga supports versions `^2.4.9`.

**[Styled Componentes](https://styled-components.com/):** This lets you write actual CSS in your JavaScript.Yoga supports versions `^4.4.0`.

## License

Yoga is an open-source collaborative project, in other words, its distribution grants the right to study, use, change and distribute it to anyone (MIT license).

## Report an issue

Check if there is already an [issue](https://github.com/gympass/yoga/issues) open in our repository. If not, you can create a new one. Also, check the [discussion topics](https://github.com/gympass/yoga/discussions). Our team will analyze and prioritize within our initiatives. If you are interested and available, let us know and we will address you ASAP. Wellhub developers should refer to the Internal Guidelines.

## Request a feature

If you believe it is necessary to develop a new feature, for example a new component, please contact our team. You can open a new discussion topic, explaining the need. Our team will analyze and prioritize within our initiatives, taking into account design and engineering principles, such as reusability. If you are interested and available, let us know and we will address you ASAP. Wellhub developers should refer to the Internal Guidelines.

### [Contributing Guide](CONTRIBUTING.md)

This repository should and will grow, its contents will be used for many people in our current and future projects. As such, we follow some practices to keep a common architecture in our changes. Read our [Contributing Guide](CONTRIBUTING.md) to learn about our code of conduct, environments setups and development process. Wellhub developers should also consult the Internal Guidelines.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/ggdaltoso"><img src="https://avatars0.githubusercontent.com/u/6536985?v=4?s=100" width="100px;" alt="Gabriel Daltoso"/><br /><sub><b>Gabriel Daltoso</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=ggdaltoso" title="Code">💻</a> <a href="#ideas-ggdaltoso" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/gympass/yoga/commits?author=ggdaltoso" title="Documentation">📖</a> <a href="https://github.com/gympass/yoga/pulls?q=is%3Apr+reviewed-by%3Aggdaltoso" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/_allyssonsantos"><img src="https://avatars1.githubusercontent.com/u/13424727?v=4?s=100" width="100px;" alt="Allysson dos Santos"/><br /><sub><b>Allysson dos Santos</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=allyssonsantos" title="Code">💻</a> <a href="#ideas-allyssonsantos" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/gympass/yoga/commits?author=allyssonsantos" title="Documentation">📖</a> <a href="https://github.com/gympass/yoga/pulls?q=is%3Apr+reviewed-by%3Aallyssonsantos" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://br.linkedin.com/in/victor-matheus-jesus-caetano-9633b5118"><img src="https://avatars0.githubusercontent.com/u/11219999?v=4?s=100" width="100px;" alt="Victor Caetano"/><br /><sub><b>Victor Caetano</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=victormath12" title="Code">💻</a> <a href="#ideas-victormath12" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/gympass/yoga/commits?author=victormath12" title="Documentation">📖</a> <a href="https://github.com/gympass/yoga/pulls?q=is%3Apr+reviewed-by%3Avictormath12" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/oalanoliv"><img src="https://avatars3.githubusercontent.com/u/4368481?v=4?s=100" width="100px;" alt="Alan Oliveira"/><br /><sub><b>Alan Oliveira</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=alan-oliv" title="Code">💻</a> <a href="#ideas-alan-oliv" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/gympass/yoga/commits?author=alan-oliv" title="Documentation">📖</a> <a href="https://github.com/gympass/yoga/pulls?q=is%3Apr+reviewed-by%3Aalan-oliv" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://linkedin.com/in/kaicbastidas"><img src="https://avatars2.githubusercontent.com/u/9873486?v=4?s=100" width="100px;" alt="Kaic Bastidas"/><br /><sub><b>Kaic Bastidas</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=tcK1" title="Code">💻</a> <a href="#ideas-tcK1" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/gympass/yoga/commits?author=tcK1" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/luispiresgympass"><img src="https://avatars0.githubusercontent.com/u/58981184?v=4?s=100" width="100px;" alt="Luis Pires"/><br /><sub><b>Luis Pires</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=luispiresgympass" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/invilliaanajacobsen"><img src="https://avatars2.githubusercontent.com/u/57181206?v=4?s=100" width="100px;" alt="invilliaanajacobsen"/><br /><sub><b>invilliaanajacobsen</b></sub></a><br /><a href="https://github.com/gympass/yoga/issues?q=author%3Ainvilliaanajacobsen" title="Bug reports">🐛</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/caioalexandrebr/"><img src="https://avatars1.githubusercontent.com/u/31045534?v=4?s=100" width="100px;" alt="Caio Alexandre"/><br /><sub><b>Caio Alexandre</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=caioalexandrebr" title="Documentation">📖</a> <a href="https://github.com/gympass/yoga/commits?author=caioalexandrebr" title="Code">💻</a> <a href="#ideas-caioalexandrebr" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/thayllachristine"><img src="https://avatars2.githubusercontent.com/u/38869416?v=4?s=100" width="100px;" alt="Thaylla Christine"/><br /><sub><b>Thaylla Christine</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=thayllachristine" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/evilamaior"><img src="https://avatars.githubusercontent.com/u/46816386?v=4?s=100" width="100px;" alt="Esthéfanie Vila Maior"/><br /><sub><b>Esthéfanie Vila Maior</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=evilamaior" title="Documentation">📖</a> <a href="https://github.com/gympass/yoga/commits?author=evilamaior" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://geovanasilva.dev/"><img src="https://avatars.githubusercontent.com/u/13040713?v=4?s=100" width="100px;" alt="Geovana Silva"/><br /><sub><b>Geovana Silva</b></sub></a><br /><a href="https://github.com/gympass/yoga/issues?q=author%3Ageovanasilva" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://lucascoelho.dev/"><img src="https://avatars.githubusercontent.com/u/28108272?v=4?s=100" width="100px;" alt="Lucas Coelho"/><br /><sub><b>Lucas Coelho</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=coelhucas" title="Code">💻</a> <a href="#ideas-coelhucas" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/gympass/yoga/commits?author=coelhucas" title="Documentation">📖</a> <a href="https://github.com/gympass/yoga/pulls?q=is%3Apr+reviewed-by%3Acoelhucas" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/andrerocha22"><img src="https://avatars.githubusercontent.com/u/39251409?v=4?s=100" width="100px;" alt="André Rocha"/><br /><sub><b>André Rocha</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=andrerocha22" title="Documentation">📖</a> <a href="https://github.com/gympass/yoga/commits?author=andrerocha22" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://medium.com/@katharinep"><img src="https://avatars.githubusercontent.com/u/14188981?v=4?s=100" width="100px;" alt="Katharine Padilha"/><br /><sub><b>Katharine Padilha</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=katharinepadilha" title="Code">💻</a> <a href="#ideas-katharinepadilha" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tjamancio"><img src="https://avatars.githubusercontent.com/u/43884476?v=4?s=100" width="100px;" alt="Thiago Amâncio"/><br /><sub><b>Thiago Amâncio</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=tjamancio" title="Code">💻</a> <a href="#design-tjamancio" title="Design">🎨</a> <a href="https://github.com/gympass/yoga/issues?q=author%3Atjamancio" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/alycecristines/"><img src="https://avatars.githubusercontent.com/u/44280864?v=4?s=100" width="100px;" alt="Alyce Cristine"/><br /><sub><b>Alyce Cristine</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=alycecristines" title="Code">💻</a> <a href="https://github.com/gympass/yoga/commits?author=alycecristines" title="Documentation">📖</a> <a href="https://github.com/gympass/yoga/issues?q=author%3Aalycecristines" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nypacheco"><img src="https://avatars.githubusercontent.com/u/12848917?v=4?s=100" width="100px;" alt="Nathália Pacheco"/><br /><sub><b>Nathália Pacheco</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=nypacheco" title="Code">💻</a> <a href="https://github.com/gympass/yoga/commits?author=nypacheco" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/matheushdsbr"><img src="https://avatars.githubusercontent.com/u/32910717?v=4?s=100" width="100px;" alt="Matheus Henrique"/><br /><sub><b>Matheus Henrique</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=matheushdsbr" title="Documentation">📖</a> <a href="https://github.com/gympass/yoga/commits?author=matheushdsbr" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.linkedin.com/in/dariofelipe"><img src="https://avatars.githubusercontent.com/u/59899974?v=4?s=100" width="100px;" alt="Dário Felipe"/><br /><sub><b>Dário Felipe</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=Dario-Felipe" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://joaovicdsantos.github.io/"><img src="https://avatars.githubusercontent.com/u/24553367?v=4?s=100" width="100px;" alt="João Victor"/><br /><sub><b>João Victor</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=joaovicdsantos" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://wendler.dev"><img src="https://avatars.githubusercontent.com/u/6570553?v=4?s=100" width="100px;" alt="Wendler Eis"/><br /><sub><b>Wendler Eis</b></sub></a><br /><a href="https://github.com/gympass/yoga/issues?q=author%3AWendlereis" title="Bug reports">🐛</a> <a href="https://github.com/gympass/yoga/commits?author=Wendlereis" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dehmirandac2"><img src="https://avatars.githubusercontent.com/u/8313529?v=4?s=100" width="100px;" alt="Deborah Miranda"/><br /><sub><b>Deborah Miranda</b></sub></a><br /><a href="https://github.com/gympass/yoga/issues?q=author%3Adehmirandac2" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://mmartins.vercel.app/"><img src="https://avatars.githubusercontent.com/u/46993493?v=4?s=100" width="100px;" alt="Matheus Martins"/><br /><sub><b>Matheus Martins</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=mmartinsoliv" title="Code">💻</a> <a href="#ideas-mmartinsoliv" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/gympass/yoga/commits?author=mmartinsoliv" title="Documentation">📖</a> <a href="https://github.com/gympass/yoga/pulls?q=is%3Apr+reviewed-by%3Ammartinsoliv" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/leticiasoaresfrontenddeveloper/"><img src="https://avatars.githubusercontent.com/u/11762938?v=4?s=100" width="100px;" alt="Leticia Soares "/><br /><sub><b>Leticia Soares </b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=LeticiaSoares" title="Code">💻</a> <a href="https://github.com/gympass/yoga/commits?author=LeticiaSoares" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/marcosricardo0101/"><img src="https://avatars.githubusercontent.com/u/27781419?v=4?s=100" width="100px;" alt="Marcos Ricardo"/><br /><sub><b>Marcos Ricardo</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=marcosricardo" title="Documentation">📖</a> <a href="https://github.com/gympass/yoga/commits?author=marcosricardo" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Falkaniere"><img src="https://avatars.githubusercontent.com/u/39073602?v=4?s=100" width="100px;" alt="Jonatas Falkaniere"/><br /><sub><b>Jonatas Falkaniere</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=Falkaniere" title="Code">💻</a> <a href="#ideas-Falkaniere" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://davimdantas.github.io/"><img src="https://avatars.githubusercontent.com/u/38892983?v=4?s=100" width="100px;" alt="Davi Marins Dantas"/><br /><sub><b>Davi Marins Dantas</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=davimdantas" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/naabraz"><img src="https://avatars.githubusercontent.com/u/18318587?v=4?s=100" width="100px;" alt="Natalia Braz"/><br /><sub><b>Natalia Braz</b></sub></a><br /><a href="https://github.com/gympass/yoga/issues?q=author%3Anaabraz" title="Bug reports">🐛</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://ericcleao"><img src="https://avatars.githubusercontent.com/u/5889973?v=4?s=100" width="100px;" alt="Eric Cerqueira Leão"/><br /><sub><b>Eric Cerqueira Leão</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=ericcleao" title="Code">💻</a> <a href="https://github.com/gympass/yoga/commits?author=ericcleao" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alinerigoni"><img src="https://avatars.githubusercontent.com/u/31771420?v=4?s=100" width="100px;" alt="Aline Rigoni"/><br /><sub><b>Aline Rigoni</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=alinerigoni" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lucasfernandesbr"><img src="https://avatars.githubusercontent.com/u/54141141?v=4?s=100" width="100px;" alt="Lucas Fernandes Souza"/><br /><sub><b>Lucas Fernandes Souza</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=lucasfernandesbr" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hesugiyama"><img src="https://avatars.githubusercontent.com/u/14081572?v=4?s=100" width="100px;" alt="Henrique Sugiyama"/><br /><sub><b>Henrique Sugiyama</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=hesugiyama" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/frgiovanna"><img src="https://avatars.githubusercontent.com/u/54802614?v=4?s=100" width="100px;" alt="Giovanna Freitas"/><br /><sub><b>Giovanna Freitas</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=frgiovanna" title="Code">💻</a> <a href="https://github.com/gympass/yoga/commits?author=frgiovanna" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/salomaoluiz"><img src="https://avatars.githubusercontent.com/u/35156345?v=4?s=100" width="100px;" alt="Salomão Luiz de Araújo Neto"/><br /><sub><b>Salomão Luiz de Araújo Neto</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=salomaoluiz" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://caiotracera.dev/"><img src="https://avatars.githubusercontent.com/u/25802240?v=4?s=100" width="100px;" alt="Caio Tracera"/><br /><sub><b>Caio Tracera</b></sub></a><br /><a href="https://github.com/gympass/yoga/issues?q=author%3Acaiotracera" title="Bug reports">🐛</a> <a href="https://github.com/gympass/yoga/commits?author=caiotracera" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/leonardo-gomes-7187a919b/"><img src="https://avatars.githubusercontent.com/u/61520601?v=4?s=100" width="100px;" alt="Leonardo Gomes"/><br /><sub><b>Leonardo Gomes</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=LeoSilvaGomes" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rafaelcoletagympass"><img src="https://avatars.githubusercontent.com/u/100871379?v=4?s=100" width="100px;" alt="Rafael Pizzaia Coleta"/><br /><sub><b>Rafael Pizzaia Coleta</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=rafaelcoletagympass" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/diegomarcuz"><img src="https://avatars.githubusercontent.com/u/37422384?v=4?s=100" width="100px;" alt="Diego Marcuz"/><br /><sub><b>Diego Marcuz</b></sub></a><br /><a href="https://github.com/gympass/yoga/issues?q=author%3Adiegomarcuz" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://guilhermecardoso.dev.br"><img src="https://avatars.githubusercontent.com/u/15979107?v=4?s=100" width="100px;" alt="Luis Guilherme Cardoso Rosa"/><br /><sub><b>Luis Guilherme Cardoso Rosa</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=lguilhermecardoso" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/RuanRamalho"><img src="https://avatars.githubusercontent.com/u/58890915?v=4?s=100" width="100px;" alt="Ruan Ramalho"/><br /><sub><b>Ruan Ramalho</b></sub></a><br /><a href="https://github.com/gympass/yoga/issues?q=author%3ARuanRamalho" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/CaioAugustoR"><img src="https://avatars.githubusercontent.com/u/120468000?v=4?s=100" width="100px;" alt="Caio Augusto"/><br /><sub><b>Caio Augusto</b></sub></a><br /><a href="https://github.com/gympass/yoga/issues?q=author%3ACaioAugustoR" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/juliaoharabr/"><img src="https://avatars.githubusercontent.com/u/93061504?v=4?s=100" width="100px;" alt="Júlia Ohara"/><br /><sub><b>Júlia Ohara</b></sub></a><br /><a href="https://github.com/gympass/yoga/issues?q=author%3Aoharaju" title="Bug reports">🐛</a> <a href="https://github.com/gympass/yoga/commits?author=oharaju" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MicaelRodrigues"><img src="https://avatars.githubusercontent.com/u/796443?v=4?s=100" width="100px;" alt="Micael Rodrigues"/><br /><sub><b>Micael Rodrigues</b></sub></a><br /><a href="https://github.com/gympass/yoga/issues?q=author%3AMicaelRodrigues" title="Bug reports">🐛</a> <a href="https://github.com/gympass/yoga/commits?author=MicaelRodrigues" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/marinamsou"><img src="https://avatars.githubusercontent.com/u/26771441?v=4?s=100" width="100px;" alt="Marina Souza"/><br /><sub><b>Marina Souza</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=marinamsou" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/luanlorenzo"><img src="https://avatars.githubusercontent.com/u/18699514?v=4?s=100" width="100px;" alt="Luan Lorenzo"/><br /><sub><b>Luan Lorenzo</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=luanlorenzo" title="Code">💻</a> <a href="https://github.com/gympass/yoga/commits?author=luanlorenzo" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://tomaskeong.vercel.app/"><img src="https://avatars.githubusercontent.com/u/47691990?v=4?s=100" width="100px;" alt="Tomás Keong"/><br /><sub><b>Tomás Keong</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=tomaskeong" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/leonardokl"><img src="https://avatars.githubusercontent.com/u/7108030?v=4?s=100" width="100px;" alt="Leonardo Luiz"/><br /><sub><b>Leonardo Luiz</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=leonardokl" title="Code">💻</a> <a href="https://github.com/gympass/yoga/commits?author=leonardokl" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/marcos-creuz"><img src="https://avatars.githubusercontent.com/u/10004004?v=4?s=100" width="100px;" alt="Marcos Creuz Filho"/><br /><sub><b>Marcos Creuz Filho</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=marcos-creuz" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gympassjagnezi"><img src="https://avatars.githubusercontent.com/u/127952311?v=4?s=100" width="100px;" alt="Jonas"/><br /><sub><b>Jonas</b></sub></a><br /><a href="https://github.com/gympass/yoga/commits?author=gympassjagnezi" title="Documentation">📖</a> <a href="https://github.com/gympass/yoga/commits?author=gympassjagnezi" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
