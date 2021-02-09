# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.2.3](https://github.com/Gympass/yoga/compare/@gympass/yoga@5.2.2...@gympass/yoga@5.2.3) (2021-02-09)


### Bug Fixes

* **native:** remove inputValue from input component ([5348c16](https://github.com/Gympass/yoga/commit/5348c162304d766bb85b17235950e9936c808c9b))
* remove inputValue from input component ([c9890c3](https://github.com/Gympass/yoga/commit/c9890c314166e16c6d03317fd0720db6d3ccc3a0))





## [5.2.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@5.2.1...@gympass/yoga@5.2.2) (2020-12-16)


### Bug Fixes

* **yoga:** add box-sizing to input fieldset ([835e345](https://github.com/Gympass/yoga/commit/835e345662d5dbee807e50d34dd3200d9b5b4962))





## [5.2.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@5.2.0...@gympass/yoga@5.2.1) (2020-12-11)

**Note:** Version bump only for package @gympass/yoga





# [5.2.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@5.1.1...@gympass/yoga@5.2.0) (2020-12-10)


### Features

* **input:** add hiddenMaxLength props to not render Help component inside Input ([e78b627](https://github.com/Gympass/yoga/commit/e78b627c5daaf40bef2294840d86571ea9d0362e))
* **input:** create a description to hiddenMaxLength prop ([50c2c38](https://github.com/Gympass/yoga/commit/50c2c38f8c9108104e1627ce283aa7b5a44395db))
* **input:** rename prop to hideMaxLength and add snapshot to web component ([57ae3a0](https://github.com/Gympass/yoga/commit/57ae3a03279a00b715fbe4afab03eff5acee1884))





## [5.1.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@5.1.0...@gympass/yoga@5.1.1) (2020-11-26)


### Bug Fixes

* **input:** fix Input helper text color when affected by an error ([71a117f](https://github.com/Gympass/yoga/commit/71a117f7bb384728e0fd14e1fdcf1439c0066230))





# [5.1.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@5.0.1...@gympass/yoga@5.1.0) (2020-10-15)


### Bug Fixes

* **TextArea:** change fieldset import case ([05ea669](https://github.com/Gympass/yoga/commit/05ea6693ed32aff43f960d2206931aead6a5d3dc))
* fixing css in component input ([9b217c0](https://github.com/Gympass/yoga/commit/9b217c03d01f9e60d3ac1523bfaf9afbea68e900)), closes [#158](https://github.com/Gympass/yoga/issues/158)


### Features

* changing styles in component Input ([01eaf36](https://github.com/Gympass/yoga/commit/01eaf36d0836ab9495a532b856020d13b54af795))
* removing z-index in component Field and Input ([032b43d](https://github.com/Gympass/yoga/commit/032b43d989a08c725166e9fc33cacad7c9834d49)), closes [#158](https://github.com/Gympass/yoga/issues/158)





## [5.0.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@5.0.0...@gympass/yoga@5.0.1) (2020-10-02)


### Bug Fixes

* **plancard:** fix truncate text and subtitle prop from PlanCard.Content component ([79c42eb](https://github.com/Gympass/yoga/commit/79c42eb92393c8c8fc097344062c19f6fadb5a11))





# [5.0.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@4.1.2...@gympass/yoga@5.0.0) (2020-09-24)


### Features

* **plancard:** add ribbon support and destructuring theme properties on styles ([2672d08](https://github.com/Gympass/yoga/commit/2672d0832924321df229233230628f1176cd7de1))
* **plancard:** add variant support and fix some spacings ([0b1927d](https://github.com/Gympass/yoga/commit/0b1927dbd7e31a1ddfb581f983b2d043a12c6452))
* **plancard:** extract "ribbon" to a new "PlanCard.Tag" component ([3438ca9](https://github.com/Gympass/yoga/commit/3438ca9f9b925aa1247fc5397eea6802a2414386))
* **plancard:** implement de redesign from PlanCard ([f428347](https://github.com/Gympass/yoga/commit/f4283479b8f2a89a4c934d7116a1c11a4bc7d115))
* **plancard:** redesign of PlanCard on native platform ([9d3b6d8](https://github.com/Gympass/yoga/commit/9d3b6d86f06a919aeab9df7d02efbb01ff4d8f32))


### BREAKING CHANGES

* **plancard:** change PlanCard.Content props, now it accepts: title, subtitle(new), currency(new),
price(only the value, without currency), period, description(new)





## [4.1.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@4.1.1...@gympass/yoga@4.1.2) (2020-09-21)


### Bug Fixes

* **file name:** removing unnecessary unit tests ([356ab06](https://github.com/Gympass/yoga/commit/356ab06e1a0b0822b0241f87467bc7bc35740e15))





## [4.1.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@4.1.0...@gympass/yoga@4.1.1) (2020-09-10)


### Bug Fixes

* **font:** rename rubik italic file name ([2e3383a](https://github.com/Gympass/yoga/commit/2e3383a854e26ffb7fb9843dd6fa7cb57f0bbef4))





# [4.1.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@4.0.0...@gympass/yoga@4.1.0) (2020-09-03)


### Bug Fixes

* **dropdown:** adjust android option font styles and use Text component from yoga ([4f00cff](https://github.com/Gympass/yoga/commit/4f00cff21da435965f0871eb6bb885f27f4fc483))
* **font:** add textStyle.android to handle how font-familly is set when android ([587a721](https://github.com/Gympass/yoga/commit/587a721e8240075d7ba07dffcaa104fe60467d23))
* **text:** fix typo: Text.H5 displayName ([a3988dd](https://github.com/Gympass/yoga/commit/a3988ddaa45f7508608beab11e43d54b9a57cc79))


### Features

* **text:** update Text component to match our new tokens ([751886d](https://github.com/Gympass/yoga/commit/751886d9af1d59f993e0faf9762cd121631b590f))





# [4.0.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@3.1.0...@gympass/yoga@4.0.0) (2020-08-26)


### Features

* **button:** updated button tokens ([91b8e42](https://github.com/Gympass/yoga/commit/91b8e42ca257e0348b834ca2d3b384691f2a3760))
* **text:** update Text components to use new font-sizes,weights and heights tokens. Add new H5 ([b70861e](https://github.com/Gympass/yoga/commit/b70861e28b00d55cf19863d4f394bc51349008ef))


### BREAKING CHANGES

* **text:** Update Text Heading components font-sizes, weight, height values





# [3.1.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@3.0.0...@gympass/yoga@3.1.0) (2020-08-25)


### Features

* **theme:** added kids theme into yoga ([0e6305d](https://github.com/Gympass/yoga/commit/0e6305d899dff457cc988515b27b9f663f90178e))





# [3.0.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.5.5...@gympass/yoga@3.0.0) (2020-08-12)


### Features

* **rubik:** add and use Rubik font instead of open-sans ([12f0ff6](https://github.com/Gympass/yoga/commit/12f0ff62d8332ea8fcee55fb9f403bab7ff315bb))
* **yoga:** change baseFontFamily to  rubik ([a082683](https://github.com/Gympass/yoga/commit/a0826833616ad2d351ec44a7b4b8b3fe5f346ae5))


### BREAKING CHANGES

* **rubik:** remove fontWeights.semibold and add fontWeights.medium





## [2.5.5](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.5.4...@gympass/yoga@2.5.5) (2020-06-24)

**Note:** Version bump only for package @gympass/yoga





## [2.5.4](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.5.3...@gympass/yoga@2.5.4) (2020-06-23)

**Note:** Version bump only for package @gympass/yoga





## [2.5.3](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.5.2...@gympass/yoga@2.5.3) (2020-06-23)

**Note:** Version bump only for package @gympass/yoga





## [2.5.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.5.1...@gympass/yoga@2.5.2) (2020-06-18)


### Bug Fixes

* **radiobutton:** fix radio-button dot ([7e6dc39](https://github.com/Gympass/yoga/commit/7e6dc39e6b03bcc58bd968f6d7a58e9f4276720d))





## [2.5.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.5.0...@gympass/yoga@2.5.1) (2020-06-16)


### Bug Fixes

* **input:** fix control div to match input size ([f4eecf9](https://github.com/Gympass/yoga/commit/f4eecf9b9de84866aac37bec103f451696753966))
* **textarea:** add missing box-sizing ([33301c3](https://github.com/Gympass/yoga/commit/33301c3a1f61047012c938973fa70f4d76c005f4)), closes [#138](https://github.com/Gympass/yoga/issues/138)





# [2.5.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.4.1...@gympass/yoga@2.5.0) (2020-06-15)


### Features

* **gyms theme:** update Gyms theme colors ([0ea16fb](https://github.com/Gympass/yoga/commit/0ea16fbaa3f53366e112c0fe43c54b570d214e49))





## [2.4.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.4.0...@gympass/yoga@2.4.1) (2020-06-02)


### Bug Fixes

* **input:** new property box-sizing in input component ([1b2f2dc](https://github.com/Gympass/yoga/commit/1b2f2dc856246e4c40804bf738a003c62d946dfa))





# [2.4.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.3.0...@gympass/yoga@2.4.0) (2020-05-21)


### Features

* **corp theme:** change Corporate theme colors ([06510b2](https://github.com/Gympass/yoga/commit/06510b28fd6bc5069e0ea08f64f7827552106e89))





# [2.3.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.2.2...@gympass/yoga@2.3.0) (2020-05-11)


### Bug Fixes

* **themeReader:** add prototype validation ([c7adb13](https://github.com/Gympass/yoga/commit/c7adb13b27b44e486aed3221a1382fcc80d290aa))


### Features

* **themeReader:** add "cache" to the logic ([6c70367](https://github.com/Gympass/yoga/commit/6c70367c5a65a02dfb783c8d48dc6e92c1207427))
* create theme reader ([6d30739](https://github.com/Gympass/yoga/commit/6d307393b8603373a2ad8e8385d203127e438d1d))





## [2.2.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.2.1...@gympass/yoga@2.2.2) (2020-05-11)

**Note:** Version bump only for package @gympass/yoga





## [2.2.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.2.0...@gympass/yoga@2.2.1) (2020-05-08)


### Bug Fixes

* **card:** adjusting card shadow and event-card style ([8cc6083](https://github.com/Gympass/yoga/commit/8cc6083356d7bac48bb340216308a20fc8327e9a))
* **card:** fix card shadow on ios and android platforms ([4b57bee](https://github.com/Gympass/yoga/commit/4b57bee65c04f2e439c255afbc04a1644bde3435))
* **eventcard:** remove unnecessary border-radius ([6ce5919](https://github.com/Gympass/yoga/commit/6ce5919d104d0a3e4da9d6817ab1838724ded4b2))





# [2.2.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.1.3...@gympass/yoga@2.2.0) (2020-04-06)

### Features

- **theme:** add Wellness theme ([f6a040a](https://github.com/Gympass/yoga/commit/f6a040aa72a24cfec678a2b7905cd27c7084bede))

## [2.1.3](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.1.2...@gympass/yoga@2.1.3) (2020-04-02)

**Note:** Version bump only for package @gympass/yoga

## [2.1.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.1.1...@gympass/yoga@2.1.2) (2020-03-25)

### Bug Fixes

- **theme-provider:** removing Font Loader from Global Style ([5779a53](https://github.com/Gympass/yoga/commit/5779a53593f9fd9b1bec9aeaa2607f5b747a3af7))

## [2.1.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.1.0...@gympass/yoga@2.1.1) (2020-03-16)

### Bug Fixes

- **List:** add 'box-sizing border-box' to items ([bbb8c9b](https://github.com/Gympass/yoga/commit/bbb8c9be2fa1b962d3f221dca1121765175c78d7))

# [2.1.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.0.3...@gympass/yoga@2.1.0) (2020-03-16)

### Features

- **List.LinkItem:** create the component ([7b65392](https://github.com/Gympass/yoga/commit/7b653929e2be544e8f79068cd6ea8bb5e798bdee))

## [2.0.3](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.0.2...@gympass/yoga@2.0.3) (2020-03-16)

### Bug Fixes

- **dropdown:** adjusting dropdown box-sizing ([8c43d56](https://github.com/Gympass/yoga/commit/8c43d56b53bf91d820ff7032d39d4f4257428685))

## [2.0.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.0.1...@gympass/yoga@2.0.2) (2020-03-13)

### Bug Fixes

- **dropdown:** fix value propType for native Dropdown ([c3eb03f](https://github.com/Gympass/yoga/commit/c3eb03feecc348c469518354523e53374710e765))
- **dropdown:** fix value propType for web Dropdown ([e8c7591](https://github.com/Gympass/yoga/commit/e8c7591a5c5c1dc00c745ea0970309007d40f8e9))
- **input:** fix value propType for native Input ([b1a52ae](https://github.com/Gympass/yoga/commit/b1a52aec79cd4b3e5d0ecaebeaa543dcd05e5f34))
- **input:** fix value propType for web Input ([48e9d47](https://github.com/Gympass/yoga/commit/48e9d479c28ba2689b88d0f52e32aa9b53b2e02b))

## [2.0.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@2.0.0...@gympass/yoga@2.0.1) (2020-03-12)

### Bug Fixes

- **doc:** remove .md files from being parsed from gatsby-mdx ([e9b4159](https://github.com/Gympass/yoga/commit/e9b415907704350efb75977172fcfbbe1a15c9fa))
- **progress:** remove letter-spacing default style ([dc2546b](https://github.com/Gympass/yoga/commit/dc2546b98b835e52116cc4ebd9d88160c635aa31))

# [2.0.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.17.0...@gympass/yoga@2.0.0) (2020-03-12)

### Bug Fixes

- **checkbox:** fix checkbox opacity ([40febc3](https://github.com/Gympass/yoga/commit/40febc36cbcc4144eeb6ed314b76075aaeca3a2f))
- **input:** change input default width and change onClean callback behaviour ([24d27f1](https://github.com/Gympass/yoga/commit/24d27f187ad168209bc6d717698894474f6f2166))

### Code Refactoring

- **input:** changes due [@ggdaltoso](https://github.com/ggdaltoso) review ([3a9b7a1](https://github.com/Gympass/yoga/commit/3a9b7a1d06e641803e8f901b9368e8d865567be4))

### Features

- **autocomplete:** create web autocomplete component ([8d2d503](https://github.com/Gympass/yoga/commit/8d2d503198792b656afd6cc66b5cd9b2fe93f7c3))

### Performance Improvements

- **autocomplete:** handle keyDown when showOptions is false ([d9d27c9](https://github.com/Gympass/yoga/commit/d9d27c9d78e44a79a24d25f17bd19d37a9770edd))

### BREAKING CHANGES

- **input:** The Input component do not clean the value when clean icon is clicked, now you will
  need to pass the onClean prop and update your state to clean the field. ex: "<Input onClean={cleaned => setValue(cleaned)} />"

# [1.17.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.16.1...@gympass/yoga@1.17.0) (2020-03-12)

### Bug Fixes

- **checkbox:** hover and focus with the same shadow ([6563d01](https://github.com/Gympass/yoga/commit/6563d01f2674b63486ad5f8272eb56371078c144))
- **checkbox:** update shadow size on web ([ea78012](https://github.com/Gympass/yoga/commit/ea780122abbc72da629a78d735c76f2ce63235d3))
- **checkbox:** update shadow values ([cf2efbf](https://github.com/Gympass/yoga/commit/cf2efbf8e14d537a7e6aa9c8f7687d9be07d3400))

### Features

- **checkbox:** add variant prop to Checkbox component (native) ([cdcb1b7](https://github.com/Gympass/yoga/commit/cdcb1b7322f7857901a6210105fabf8ee01963e1))
- **checkbox:** add variant prop to Checkbox component (web) ([5abf243](https://github.com/Gympass/yoga/commit/5abf243bc5caa280fb089cd532e44e79809c7481))

## [1.16.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.16.0...@gympass/yoga@1.16.1) (2020-03-10)

**Note:** Version bump only for package @gympass/yoga

# [1.16.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.15.0...@gympass/yoga@1.16.0) (2020-03-09)

### Bug Fixes

- **radiogroup.radio:** fix reviews from [@victormath12](https://github.com/victormath12) [@alllyssonsantos](https://github.com/alllyssonsantos) [@alan-oliv](https://github.com/alan-oliv) ([c826da1](https://github.com/Gympass/yoga/commit/c826da118545df895717ac65804f9fc137bdd162))

### Features

- **radiobutton.radio:** new component: RadioGroup.Radio (native) ([1b972c2](https://github.com/Gympass/yoga/commit/1b972c249708c38c24b4fe9c5d971cfd98011e8f))
- **radiogroup.radio:** add a new theme for radiogroup.radio component and revisit the old button ([6bd09c8](https://github.com/Gympass/yoga/commit/6bd09c8251975ca427058dc97fa1f268aa6c504f))
- **radiogroup.radio:** add new RadioGroup.Radio component (web) ([df27bdf](https://github.com/Gympass/yoga/commit/df27bdfc259a36e1694b332dc7875b6ebd151625))

# [1.15.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.14.3...@gympass/yoga@1.15.0) (2020-03-09)

### Features

- **dropdown:** add dropdown component ([b4cac13](https://github.com/Gympass/yoga/commit/b4cac139b5ec85c174739cc569762642afc59c6b))
- **dropdown:** add dropdown component for native ([3d935f7](https://github.com/Gympass/yoga/commit/3d935f7a46c61b287abf4d57845b0f7ac617558e))
- **dropdown:** creating backdrop when press the dropdown in native ([83d7613](https://github.com/Gympass/yoga/commit/83d7613d65b39dc5740218f8f0f2d251635ec27e))

## [1.14.3](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.14.2...@gympass/yoga@1.14.3) (2020-02-28)

**Note:** Version bump only for package @gympass/yoga

## [1.14.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.14.1...@gympass/yoga@1.14.2) (2020-02-20)

### Bug Fixes

- **plancard:** fixing plancard behaviour inside grid cols ([731e77a](https://github.com/Gympass/yoga/commit/731e77a2f39924b5267ef266298bf23308be92e5))

## [1.14.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.14.0...@gympass/yoga@1.14.1) (2020-02-19)

### Bug Fixes

- **input/textarea:** now when prop value change the component is refreshed ([8131902](https://github.com/Gympass/yoga/commit/81319021a7c0e547572ab8ba8d40e01cd39cfa21))

# [1.14.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.13.1...@gympass/yoga@1.14.0) (2020-02-19)

### Features

- **progress:** add variant prop to control bar color ([7b9caec](https://github.com/Gympass/yoga/commit/7b9caec018e59f4c1d4ff332abc62a1e2f8891a1))
- **progress:** add variant prop to control bar color on native ([52eb4a1](https://github.com/Gympass/yoga/commit/52eb4a1f5e1649a5afcf268039e9742a4bd2db6e))

## [1.13.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.13.0...@gympass/yoga@1.13.1) (2020-02-18)

### Bug Fixes

- **rating:** add default icon to rating destructuring ([ebeeeec](https://github.com/Gympass/yoga/commit/ebeeeec7d1a1a2243bf4cb46d0a632a25be55e4b))

# [1.13.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.12.2...@gympass/yoga@1.13.0) (2020-02-18)

### Bug Fixes

- **rating:** revisit how padding is setted on rating ([b840abc](https://github.com/Gympass/yoga/commit/b840abce40dbba5f95ba5df44eba89028698ae1b))

### Features

- **rating:** add events on rating ([cd13223](https://github.com/Gympass/yoga/commit/cd132234977cf5010e4ad7ede096babd01fb1150))
- **rating:** add interaction on reating ([389947c](https://github.com/Gympass/yoga/commit/389947cc8d338403945aceee64a6313913d4063f))

## [1.12.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.12.1...@gympass/yoga@1.12.2) (2020-02-18)

### Bug Fixes

- **input:** fix input padding on password type ([6de8340](https://github.com/Gympass/yoga/commit/6de8340d4438447c8d72ac45944f6f9d5bc2bc50))
- **input/textarea:** fix disabled and full props ([1ac0e77](https://github.com/Gympass/yoga/commit/1ac0e77ddb01a59ae31e52e6e8dbbf8c69444c33))

## [1.12.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.12.0...@gympass/yoga@1.12.1) (2020-02-18)

### Bug Fixes

- **input:** fix field height on native ([c57747d](https://github.com/Gympass/yoga/commit/c57747d892366f7bafd7b88677d588420506443f))

# [1.12.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.11.2...@gympass/yoga@1.12.0) (2020-02-18)

### Bug Fixes

- **input:** fix icons padding ([e3970c1](https://github.com/Gympass/yoga/commit/e3970c1361ed235cc5b3f999e51a0a7b3cd98bb0))

### Features

- **textarea:** create textarea component to native platform ([7c09f12](https://github.com/Gympass/yoga/commit/7c09f121f596acb730ba532c90ac987356f943c2))
- **textarea:** create textarea component to web platform ([42c569c](https://github.com/Gympass/yoga/commit/42c569c61c772fb5d7c097c682fac458fa27e3ac))

## [1.11.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.11.1...@gympass/yoga@1.11.2) (2020-02-14)

### Bug Fixes

- **theme:** fixing font import on SSR ([9a32dc9](https://github.com/Gympass/yoga/commit/9a32dc928e86cf44d70bc2fd4336f4d9d99b9b05))

## [1.11.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.11.0...@gympass/yoga@1.11.1) (2020-02-12)

### Bug Fixes

- **theme:** adjusting font import in web global style ([e6d4309](https://github.com/Gympass/yoga/commit/e6d4309e0e6fdbd3e0da980c5d4fbfcf0959eb9b))

# [1.11.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.10.0...@gympass/yoga@1.11.0) (2020-02-12)

### Bug Fixes

- **input:** fix svg, label, and field disabled color ([afcd891](https://github.com/Gympass/yoga/commit/afcd89168b0f549011905f59bde8a82ad52695e7))

### Features

- **animation:** add fade and slide motion in native and web ([41bf6da](https://github.com/Gympass/yoga/commit/41bf6da65f8494eb5834d6aa39710d40725b1db7))
- **animation:** create new yoga package: animations ([de00e30](https://github.com/Gympass/yoga/commit/de00e30c6344e80866ccefbe53bdf81462386fca))
- **input:** create input component to native platform ([9e7f960](https://github.com/Gympass/yoga/commit/9e7f9603cf9e9427626caf4fde7f90fc1b69d147))
- **input:** create tel, number and email inputs on native ([6e39b31](https://github.com/Gympass/yoga/commit/6e39b31dfe5987ffb436990c15bd80bde5e21d74))
- **input:** input as compound ([9e56753](https://github.com/Gympass/yoga/commit/9e567538253fe6281f70dc9526f686dc41bbeebf))
- **input:** input component to native environment ([4441c13](https://github.com/Gympass/yoga/commit/4441c137a6fb1a3be8d3afced17e33b5c0bdbdc9))

# [1.10.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.9.1...@gympass/yoga@1.10.0) (2020-02-11)

### Bug Fixes

- **progress:** fix charLength import on native ([640ce4b](https://github.com/Gympass/yoga/commit/640ce4b0bc7873924d20f56db4199ffe24ba7fbd))
- **progress:** fix lint -.-" ([4c6db15](https://github.com/Gympass/yoga/commit/4c6db15f6dcc77a88d198c48f6b367224ada568e))

### Features

- **progress:** new component: Progress (native) ([2e4f664](https://github.com/Gympass/yoga/commit/2e4f664b92301fd2034a5d1c72471b7c565b9298))
- **progress:** new component: Progress (web) ([70d3ad1](https://github.com/Gympass/yoga/commit/70d3ad1059bb7c8add4db4bd321029d93d7b5530))

## [1.9.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.9.0...@gympass/yoga@1.9.1) (2020-02-05)

### Bug Fixes

- **button:** fix the button border on Android ([2850745](https://github.com/Gympass/yoga/commit/2850745677aaac97b1160d51a218d35f2b62ea31))

# [1.9.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.8.0...@gympass/yoga@1.9.0) (2020-01-21)

### Features

- **tag:** new component: Tag ([7bbb45c](https://github.com/Gympass/yoga/commit/7bbb45ce282e562d97f3a3134fa8db01b6600e8e))
- **tag:** new component: Tag (web and native) ([659af81](https://github.com/Gympass/yoga/commit/659af8155d60bec4f540a90b4bf7c9a76512fbee))

# [1.8.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.7.0...@gympass/yoga@1.8.0) (2020-01-20)

### Features

- **gymcard.checkin:** create new GymCard.CheckIn component ([c1d0d83](https://github.com/Gympass/yoga/commit/c1d0d83d55984d4fb99fdd8b9bc36df90bf31d54))

# [1.7.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.6.2...@gympass/yoga@1.7.0) (2020-01-20)

### Bug Fixes

- **card:** adjusting variant property on event card ([bfeedee](https://github.com/Gympass/yoga/commit/bfeedee863ca5f2bbc37ab2e6b1a0d4303bb7170))

### Features

- **card:** adding clock icon in the event card ([98dac45](https://github.com/Gympass/yoga/commit/98dac45988d05d70a789fe1afffee7598f2f6ebd))
- **card:** creating card event ([1a40aa1](https://github.com/Gympass/yoga/commit/1a40aa16357ff30d6133feaed4048c679f5682c6))
- **card:** creating event card for web ([ea9ed3c](https://github.com/Gympass/yoga/commit/ea9ed3cfe294f9b00b0c8204753651a265857c8b))

## [1.6.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.6.1...@gympass/yoga@1.6.2) (2020-01-16)

### Bug Fixes

- **checkbox:** remove isRequired from label prop ([3659ab0](https://github.com/Gympass/yoga/commit/3659ab0e6f5bd98a8444c04e20b9b9a3cc48c031))

## [1.6.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.6.0...@gympass/yoga@1.6.1) (2020-01-15)

### Bug Fixes

- **rating:** remove /native from styled-components import ([1cb9640](https://github.com/Gympass/yoga/commit/1cb96402e1b03ef45c7a79ea1744e536d251b807))

# [1.6.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.5.0...@gympass/yoga@1.6.0) (2020-01-15)

### Bug Fixes

- **rating:** remove rating token ([557cae2](https://github.com/Gympass/yoga/commit/557cae2c3fb08c663c1b6011e28b28964f054767))

### Features

- **rating:** add babel plugin to handle svg components ([e996c2b](https://github.com/Gympass/yoga/commit/e996c2b5b5911335f9c087dcd8fb91cb1be111de))
- **rating:** add rating config to baseTheme ([979eedd](https://github.com/Gympass/yoga/commit/979eedd477007859f7cf2f3f4627481156a1feb7))
- **rating:** new component: Rating :tada: ([6c78b13](https://github.com/Gympass/yoga/commit/6c78b1385b35c18e161e8f8d837f221242fcc059))
- **rating:** new component: Rating (native) ([2888d95](https://github.com/Gympass/yoga/commit/2888d95ed77e95db1d9acbede4599177491e5dee))
- **svg:** aDD SVG SUPPORT IN REACT NATIVE ([0c91573](https://github.com/Gympass/yoga/commit/0c915732d10449437f22badcea48628a0d174dd8))
- **svg:** trying to support svg at native development ([282c060](https://github.com/Gympass/yoga/commit/282c0601da219db534a165f6cca398f07b26adfe))

# [1.5.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.4.3...@gympass/yoga@1.5.0) (2020-01-10)

### Features

- **card:** add variantIntensity prop in Card and CardPlan ([a9af4a0](https://github.com/Gympass/yoga/commit/a9af4a0379552f696e4552de06de6c3d3313e9c8))

## [1.4.3](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.4.2...@gympass/yoga@1.4.3) (2020-01-08)

### Bug Fixes

- **button:** fix Button alignment on native ([6079666](https://github.com/Gympass/yoga/commit/607966680d8cc9ec23e2d7e90d4b6a516ce96585))

## [1.4.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.4.1...@gympass/yoga@1.4.2) (2020-01-06)

### Bug Fixes

- **plancard:** remove default props from ribbon in PlanCard ([313dcfc](https://github.com/Gympass/yoga/commit/313dcfcee4d00486d9112d7d9c7aca6f165ee8b5)), closes [#71](https://github.com/Gympass/yoga/issues/71)

## [1.4.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.4.0...@gympass/yoga@1.4.1) (2020-01-06)

### Bug Fixes

- **slider:** fix slider styles ([c5ad07d](https://github.com/Gympass/yoga/commit/c5ad07d73b85c49065aca579800bacb4951396fa))

# [1.4.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.3.0...@gympass/yoga@1.4.0) (2020-01-03)

### Features

- **fonts:** add open-sans fonts ([a0196b5](https://github.com/Gympass/yoga/commit/a0196b5230e34422f88d1ec8ad9921f1891731ee))
- **text:** text component for web ([98d2267](https://github.com/Gympass/yoga/commit/98d226715f234604e67dc4997a727d528089e952))
- **text:** text component for web and native ([6750d41](https://github.com/Gympass/yoga/commit/6750d417c360f73dbf40561b5f81640403e247fe))
- **theme-provider:** add global styles in the Theme Provider ([87c88ab](https://github.com/Gympass/yoga/commit/87c88ab0194c09ed080f62917f5841ab5f728aa9))

# [1.3.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.2.2...@gympass/yoga@1.3.0) (2019-12-27)

### Features

- **yoga/grid:** add Hide component ([beb8dda](https://github.com/Gympass/yoga/commit/beb8ddab619637f8f77e8f25754672108a099e1b))
- **yoga/grid:** add hide prop to Col component ([f549034](https://github.com/Gympass/yoga/commit/f54903479ed761f444e9ba48a25477e5bb787b3e))
- **yoga/grid:** add offset feature to cols ([f1cf1b2](https://github.com/Gympass/yoga/commit/f1cf1b2460b7616d24f587a27e5a246224a59f94))
- **yoga/grid:** create Container, Row and Col components ([cfd4475](https://github.com/Gympass/yoga/commit/cfd4475d8b55e241738d1d3db12fdef055d7fc67))
- **yoga/grid:** create media-query helper ([057a61a](https://github.com/Gympass/yoga/commit/057a61aa261ea0a36d8385a94a250495593f3063))
- **yoga/grid:** create media-query helper functions ([e4f4289](https://github.com/Gympass/yoga/commit/e4f428959419a99fa302859293407332bb66b084))

## [1.2.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.2.1...@gympass/yoga@1.2.2) (2019-12-17)

### Bug Fixes

- **plancard:** planCard.Content now render its children (Native) ([20c999e](https://github.com/Gympass/yoga/commit/20c999e7c47ddf0092a8985ba6efb0fd4e83f129))

## [1.2.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.2.0...@gympass/yoga@1.2.1) (2019-12-17)

### Bug Fixes

- **yoga/doc:** fix active links and Buttons definitions ([41ac4f5](https://github.com/Gympass/yoga/commit/41ac4f51e6f07adb3cddf44f0bdf565a4e2c9dda))

# [1.2.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.1.3...@gympass/yoga@1.2.0) (2019-12-17)

### Bug Fixes

- **plancard:** remove unused margin style ([866634f](https://github.com/Gympass/yoga/commit/866634fcc46b63603df75d7fe3726ea346c04038))
- **proptypes/typeof:** auto getting displayName and fix Button.Link ([2629a6d](https://github.com/Gympass/yoga/commit/2629a6d7971709a5f4077c5acd1ea0e0e6c6a554))

### Features

- **plancard:** new component: PlanCard ([8c41b1a](https://github.com/Gympass/yoga/commit/8c41b1add0ca853b9a7a414ba52a6af061cadc77))
- **plancard:** new component: PlanCard ([7100cce](https://github.com/Gympass/yoga/commit/7100ccebdb07383d7b52578bd70f0ee9f09dff14))
- **plancard:** new Component: PlanCard ([1f3fbce](https://github.com/Gympass/yoga/commit/1f3fbcebd27c0f70444aba513059e8f112e04810))
- **plancard:** new Component: PlanCard (Native) ([eb8578d](https://github.com/Gympass/yoga/commit/eb8578d403ade6ff4a7c53392c83f8a80e5d711d))

## [1.1.3](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.1.2...@gympass/yoga@1.1.3) (2019-12-16)

**Note:** Version bump only for package @gympass/yoga

## [1.1.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.1.1...@gympass/yoga@1.1.2) (2019-12-16)

**Note:** Version bump only for package @gympass/yoga

## [1.1.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.1.0...@gympass/yoga@1.1.1) (2019-12-16)

**Note:** Version bump only for package @gympass/yoga

# [1.1.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.0.3...@gympass/yoga@1.1.0) (2019-12-13)

### Features

- **button.link:** new Component: Button.Link ([b6e7a82](https://github.com/Gympass/yoga/commit/b6e7a82808910dff732e6c87b865486e3571af01))
- **themeprovider:** add tertiary color support to the ThemeProvider ([e37443d](https://github.com/Gympass/yoga/commit/e37443d15e50c1bce8f25cd80eb22989da8c79a3))
- **yoga/enduser:** add tertiary color to EndUser theme ([9c49556](https://github.com/Gympass/yoga/commit/9c49556246a814aa1b0a29f3529c6856f555533e))

## [1.0.3](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.0.2...@gympass/yoga@1.0.3) (2019-12-09)

**Note:** Version bump only for package @gympass/yoga

## [1.0.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.0.1...@gympass/yoga@1.0.2) (2019-12-02)

### Bug Fixes

- **checkbox:** removing accessibility role from checkbox ([9510f7c](https://github.com/Gympass/yoga/commit/9510f7cae1bf718cde55f116c09f049ce750d33e))

## [1.0.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@1.0.0...@gympass/yoga@1.0.1) (2019-11-27)

### Bug Fixes

- **yoga/slider:** fix native slider, add width to wrapper ([fe60afa](https://github.com/Gympass/yoga/commit/fe60afae31aa7d9aa4ff475c034842d969e38bb2))

# [1.0.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.5.1...@gympass/yoga@1.0.0) (2019-11-22)

### Code Refactoring

- **yoga/theme:** new file structure for theme provider. Add Yoga prefix ([747b2bf](https://github.com/Gympass/yoga/commit/747b2bf1a2436c9163ba0556934300c9f452eb28)), closes [#40](https://github.com/Gympass/yoga/issues/40)

### BREAKING CHANGES

- **yoga/theme:** Adding a new prefix to our theme results in something like this:

## [0.5.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.5.0...@gympass/yoga@0.5.1) (2019-11-22)

### Bug Fixes

- **yoga/checkbox:** add cursor pointer ([79793c1](https://github.com/Gympass/yoga/commit/79793c1383b1d2c32cd9ed8568f10d0a9cfc78be))

# [0.5.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.4.1...@gympass/yoga@0.5.0) (2019-11-22)

### Features

- **checkbox:** create checkbox component for web ([d338c1c](https://github.com/Gympass/yoga/commit/d338c1c212998e67b025df948e852fb374af3439))
- **checkbox:** creating checkbox component for native ([ba55f95](https://github.com/Gympass/yoga/commit/ba55f9519dbd88f94bcbac59e38904415d16fcb3))
- **checkbox:** creating checkbox component for native ([ea9b41d](https://github.com/Gympass/yoga/commit/ea9b41dc1fc4e700cb9ebffe47677a84126531cc))

## [0.4.1](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.4.0...@gympass/yoga@0.4.1) (2019-11-22)

**Note:** Version bump only for package @gympass/yoga

# [0.4.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.3.0...@gympass/yoga@0.4.0) (2019-11-21)

### Features

- **yoga/stepper:** stepper component for native platform ([adc4011](https://github.com/Gympass/yoga/commit/adc4011d8c4f1139f5855e83eec25c3f3567057b))
- **yoga/stepper:** stepper component for web environment ([320bb24](https://github.com/Gympass/yoga/commit/320bb241f817cbb968efb6d7fadf7dc9a58dca17))
- **yoga/stepper:** stepper component for web platform ([1f73872](https://github.com/Gympass/yoga/commit/1f73872b2eec67aa03ddfa8c04ac81c29fe55d47))

# [0.3.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.2.0...@gympass/yoga@0.3.0) (2019-11-13)

### Features

- **card:** creating Card Component for Native ([1a3df6f](https://github.com/Gympass/yoga/commit/1a3df6f4608fc87452a3fcf21dd59ed3394303dc))
- **card:** creating Card Component for web ([e48f2bc](https://github.com/Gympass/yoga/commit/e48f2bcf8753fda32516ba14ab2fca09d4bab40a))
- **card:** exporting Card Component in yoga package ([2fd9483](https://github.com/Gympass/yoga/commit/2fd94833417318e62217b5ea41c175d61ad28aff))

# [0.2.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.1.0...@gympass/yoga@0.2.0) (2019-11-08)

### Features

- **slider:** create new native component Slider ([88f65af](https://github.com/Gympass/yoga/commit/88f65afb4e8f78d66728ff8be07ced4491b65a98))
- **yoga/slider:** add pressed state to slider component ([63d9c28](https://github.com/Gympass/yoga/commit/63d9c28a4aa9f339bf2e1496770c8b4002c0615d))
- **yoga/slider:** add slider component to web platform ([68186b4](https://github.com/Gympass/yoga/commit/68186b43e2c4d1b467fdfd2fc3738e949811c903))
- **yoga/slider:** implement major functionalities of Slider component ([2ed0c05](https://github.com/Gympass/yoga/commit/2ed0c0574e256c8c3cf92e9bf598f5735571e2e9))

# [0.1.0](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.0.7...@gympass/yoga@0.1.0) (2019-11-07)

### Bug Fixes

- **radiogroup.button:** fix TouchableWithoutFeedback import ([2f19ba4](https://github.com/Gympass/yoga/commit/2f19ba4))

### Features

- **native/radiogroup.button:** create RadioGroup.Button ReactNative Component :tada: ([4046f91](https://github.com/Gympass/yoga/commit/4046f91))
- **radiogroup.button:** create RadioGroup.Button compound Component ([9cfc5d6](https://github.com/Gympass/yoga/commit/9cfc5d6))

## [0.0.7](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.0.6...@gympass/yoga@0.0.7) (2019-10-29)

### Bug Fixes

- **button:** change default text from Gympass to Button (native) ([aef0cbb](https://github.com/Gympass/yoga/commit/aef0cbb))

## [0.0.6](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.0.5...@gympass/yoga@0.0.6) (2019-10-29)

### Bug Fixes

- **button:** change default props from Gympass to Button ([8cd5b52](https://github.com/Gympass/yoga/commit/8cd5b52))

## [0.0.5](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.0.4...@gympass/yoga@0.0.5) (2019-10-29)

### Bug Fixes

- **switch:** remove accessibility role from native ([6bb5984](https://github.com/Gympass/yoga/commit/6bb5984))

## [0.0.4](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.0.3...@gympass/yoga@0.0.4) (2019-10-29)

**Note:** Version bump only for package @gympass/yoga

## [0.0.4](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.0.4...@gympass/yoga@0.0.4) (2019-10-29)

**Note:** Version bump only for package @gympass/yoga

## [0.0.3](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.0.2...@gympass/yoga@0.0.3) (2019-10-29)

**Note:** Version bump only for package @gympass/yoga

## [0.0.2](https://github.com/Gympass/yoga/compare/@gympass/yoga@0.0.1...@gympass/yoga@0.0.2) (2019-10-29)

### Bug Fixes

- **switch:** add thumb shadow on hover ([e8ed2db](https://github.com/Gympass/yoga/commit/e8ed2db))

## 0.0.1 (2019-10-28)

**Note:** Version bump only for package @gympass/yoga
