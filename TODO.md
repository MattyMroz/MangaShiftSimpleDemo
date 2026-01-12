Directory structure:
└── chintan9-plyr-react/
    ├── README.md
    ├── CHANGELOG.md
    ├── CODE_OF_CONDUCT.md
    ├── CONTRIBUTING.md
    ├── eslint.config.js
    ├── LICENSE
    ├── package.json
    ├── rolldown.config.ts
    ├── SECURITY.md
    ├── sonar-project.properties
    ├── sourcelevel.yml
    ├── tsconfig.json
    ├── .all-contributorsrc
    ├── .deepsource.toml
    ├── .editorconfig
    ├── .gitpod.yml
    ├── .lintstagedrc.json
    ├── .npmignore
    ├── .pre-commit-config.yaml
    ├── .prettierignore
    ├── .prettierrc
    ├── .remarkignore
    ├── .swcrc
    ├── .typo-ci.yml
    ├── example/
    │   └── plyr-example/
    │       ├── README.md
    │       ├── eslint.config.js
    │       ├── index.html
    │       ├── package.json
    │       ├── vite.config.js
    │       └── src/
    │           ├── App.css
    │           ├── App.jsx
    │           ├── index.css
    │           └── main.jsx
    ├── src/
    │   ├── index.tsx
    │   └── types.d.ts
    ├── tests/
    │   └── Plyr.test.tsx
    ├── .github/
    │   ├── dependabot.yml
    │   ├── release-drafter.yml
    │   ├── starrycake.yml
    │   ├── ISSUE_TEMPLATE/
    │   │   ├── bug_report.md
    │   │   └── feature_request.md
    │   └── workflows/
    │       ├── codesee-arch-diagram.yml
    │       ├── dependency-review.yml
    │       ├── nodejs.yml
    │       ├── release-drafter.yml
    │       └── scorecards.yml
    └── .husky/
        ├── pre-commit
        └── pre-push


================================================
FILE: README.md
================================================
<h1 align="center">Plyr React</h1>
<p align="center"><img src="https://user-images.githubusercontent.com/23579958/143738613-d374adcf-24b8-4f44-8e75-673d5681c1a5.png" title="plyr-react" alt="plyr-react logo" width="450"></p>

<p align="center">
A responsive media player that is simple, easy to use, and customizable for video, audio, YouTube, and Vimeo.
  <br>
  <img src="https://img.shields.io/badge/Tree%20Shakeable-d4e157" alt="tree-shakeable" />
  <img src="https://img.shields.io/badge/Side%20Effect%20Free-ffeb3b" alt="side-effect free" />
</p>

<p align="center">
  <a href="https://github.com/chintan9/plyr-react/blob/master/LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&colorA=000000&colorB=000000" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/plyr-react">
  <img src="https://img.shields.io/npm/v/plyr-react?style=flat&colorA=000000&colorB=000000" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/plyr-react">
  <img src="https://img.shields.io/npm/dt/plyr-react.svg?style=flat&colorA=000000&colorB=000000" alt="Downloads">
  </a>
</p>

You can see a live demo [here](https://githubbox.com/chintan9/plyr-react/tree/master/example/react).

> Make sure to select the version for the plyr-react in the dependencies.

### Plyr-React: The Complete Guide to a Customizable React Media Player

**Plyr-React** is a responsive, accessible, and highly customizable media player component for React. It wraps the popular [Plyr](https://github.com/sampotts/plyr) media player, providing a simple and powerful way to integrate video, audio, YouTube, and Vimeo content into your React applications.

The library is designed for modern development, featuring a tree-shakeable and side-effect-free build, ensuring optimal performance. It offers both a simple component for quick setup and an advanced hook for complex, custom integrations.

#### Key Features

- **Broad Media Support:** Natively supports HTML5 `<video>` and `<audio>`, as well as embedded players from YouTube and Vimeo.
- **Deep Customization:** A rich set of options allows you to control every aspect of the player's UI and behavior, including controls, settings menus, and event listeners.
- **Accessibility Focused:** Built on the accessible foundation of the underlying Plyr player.
- **Modern React API:** Offers a simple `<Plyr />` component for easy use and a powerful `usePlyr` hook for full control and custom logic.
- **Full Programmatic Access:** Provides direct access to the Plyr instance via React refs, allowing you to control playback, volume, fullscreen, and more from your application code.
- **TypeScript Support:** Fully typed for a superior developer experience, with exported types for props, options, and the player instance.
- **Streaming Support:** Can be integrated with streaming libraries like HLS.js for adaptive bitrate streaming.

---

### Installation

You can install `plyr-react` using NPM, Yarn, or PNPM.

```bash
# NPM
npm install plyr-react

# Yarn
yarn add plyr-react

# PNPM
pnpm add plyr-react
```

---

### Peer Dependencies

For `plyr-react` to function correctly, it requires you to install some packages in your project yourself. These are known as peer dependencies. The `package.json` file specifies the following:

- **`react`**: Version `16.8` or newer.
- **`plyr`**: Version `3.7.7` or a compatible version.

You must ensure these are listed in your project's `package.json`. Most package managers will warn you if these are missing.

**To install peer dependencies:**

```bash
# NPM
npm install react react-dom plyr

# Yarn
yarn add react react-dom plyr

# PNPM
pnpm add react react-dom plyr
```

---

### System Requirements

- **Node.js:** Version `16` or higher.
- **React:** Version `16.8` or higher.

---

### Usage Guide

#### 1. Basic Usage: The `<Plyr />` Component

For most use cases, the `<Plyr />` component is the simplest way to get started. Remember to import the stylesheet to apply the default player theme.

```tsx
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

// Player source configuration
const plyrProps = {
  source: {
    type: "video",
    sources: [
      {
        src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
        type: "video/mp4",
        size: 720,
      },
    ],
    poster:
      "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
  },
  options: {
    // Full list of options: https://github.com/sampotts/plyr#options
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "mute",
      "volume",
      "captions",
      "settings",
      "pip",
      "airplay",
      "fullscreen",
    ],
  },
}

function MyPlayer() {
  return <Plyr {...plyrProps} />
}
```

> **Important CSS Path Change:**
> As of **v5.0.0**, the CSS import path is `plyr-react/plyr.css`. For older versions (v4), you must use `plyr-react/dist/plyr.css`.

#### 2. Advanced Usage: The `usePlyr` Hook

For full control over the player's lifecycle and integration, the `usePlyr` hook is the recommended approach. It allows you to build a completely custom component wrapper.

```jsx
import React from "react"
import { usePlyr } from "plyr-react"
import "plyr-react/plyr.css"

// This example re-creates the <Plyr /> component using the hook
const CustomPlyr = React.forwardRef((props, ref) => {
  const { source, options = null, ...rest } = props

  // usePlyr returns a ref that you can attach to a <video> or <div> element.
  const raptorRef = usePlyr(ref, {
    source,
    options,
  })

  return <video ref={raptorRef} className="plyr-react plyr" {...rest} />
})
```

#### 3. Accessing the Player API via Refs

You can control the player instance programmatically by using a ref. The ref gives you access to the full Plyr API. The ref's `current` object will contain a `plyr` property, which is the player instance.

```tsx
import React, { useRef, useEffect } from "react"
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

const PlayerController = () => {
  const ref = useRef(null)

  const playVideo = () => {
    // ref.current.plyr is the Plyr instance
    if (ref.current && ref.current.plyr) {
      ref.current.plyr.play()
    }
  }

  const enterFullscreen = () => {
    if (ref.current && ref.current.plyr) {
      ref.current.plyr.fullscreen.enter()
    }
  }

  return (
    <div>
      <Plyr
        ref={ref}
        source={{
          type: "video",
          sources: [{ src: "/path/to/video.mp4", type: "video/mp4" }],
        }}
      />
      <button onClick={playVideo}>Play</button>
      <button onClick={enterFullscreen}>Go Fullscreen</button>
    </div>
  )
}
```

## Example

> You can fork these examples

**Javascript
example:** <a href="https://stackblitz.com/edit/react-fpmwns?file=src/App.js" title="stackblitz example (js)">
<img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="stackblitz example (js)" width="185">
</a>

**Typescript
example:** <a href="https://codesandbox.io/s/plyr-react-new-api-forked-cg08k?file=/src/App.tsx" title="codesandbox example (ts)">
<img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="codesandbox example (ts)" width="185">
</a>

**Basic HLS
integration** <a href="https://codesandbox.io/s/hidden-frost-mpdjj?file=/src/HLS.tsx" title="codesandbox example (ts)">
Codesandbox
</a>

> Check out the examples directory for the useHls integration guide.

```jsx
<video
  ref={usePlyr(ref, {
    ...useHls(hlsSource, options),
    source,
  })}
  className="plyr-react plyr"
/>
```

**Demo:** https://react-fpmwns.stackblitz.io

## Nightly version of plyr-react:

<a href="https://github.com/chintan9/plyr-react/tree/tsdown/" title="Early access for nightly version">
 <img src="https://user-images.githubusercontent.com/23579958/150494317-912b4ce3-8d22-4c05-aec5-a28934d2f2e7.png">
</a>

## Contribute

We are open to all new contribution, feel free to
read [CONTRIBUTING](https://github.com/chintan9/plyr-react/blob/master/CONTRIBUTING.md)
and [CODE OF CONDUCT](https://github.com/chintan9/plyr-react/blob/master/CODE_OF_CONDUCT.md) section, make new issue to
discuss about the problem
[![Gitter](https://badges.gitter.im/plyr-react/community.svg)](https://gitter.im/plyr-react/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge), and improve/fix/enhance the source code with your PRs. There is a ready to code Gitpod, you
can jump into it
from <a href="https://gitpod.io/#https://github.com/chintan9/plyr-react" title="Gitpod plyr-react"><img src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod" alt="Gitpod Ready-to-Code"><a/>

## Support

If you like the project and want to support my work, give star ⭐ or fork it.

## Showcase

Is your company using plyr-react in production? We'd love to feature you!
Create PR and to submit your site or logo here.

## Acknowledgments and Key Contributors

The development and maintenance of this project have been supported by several key contributors:

- **@realamirhe (Amir.H Ebrahimi):** Assisted with infrastructure, documentation, tooling, maintenance, and testing, including the integration with `react-aptor`.
- **@iwatakeshi (Takeshi):** Led the conversion of the project to TypeScript and contributed ideas, translations, user testing, and examples.
- **@mnervik:** Provided valuable support through testing and user feedback.

#### Structure

![d2](https://github.com/user-attachments/assets/21812834-874f-4797-98cb-42b57ae29486)



================================================
FILE: CHANGELOG.md
================================================
# Changelog

## [v.5.0.2](https://github.com/chintan9/plyr-react/tree/v5.0.2) (2022-05-25)

- Fix build issues.

## [v.5.0.0](https://github.com/chintan9/plyr-react/tree/v5.0.0) (2022-05-25)

- Add UMD and SystemJS builds for CDN.
  > So you can use it in single spa for example.

```html
<script type="systemjs-importmap">
  {
    "imports": {
      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
      "react": "https://unpkg.com/browse/react@17.0.2/umd/react.production.min.js",
      "react-dom": "https://unpkg.com/browse/react-dom@17.0.2/umd/react-dom.production.min.js",
      "plyr-react": "https://unpkg.com/plyr-react@5.0.0/umd/index.production.js"
    }
  }
</script>
```

- The path for an import of css styles has been changed.

```diff
- import "plyr-react/dist/plyr.css"
+ import "plyr-react/plyr.css"
```

- Optimize the core buld process and reduced the build time up to 10 seconds
- Remove redundant stuff from the released plyr-react's package.json so there will be no underised side efffect

## [v4.0.0](https://github.com/chintan9/plyr-react/tree/v4.0.0) (2022-05-02)

- Implement `usePlyr` Hook and make the customization more easier
- Integrate custom `useHLS` Hook make the seamless HLS integration possible.

## [v3.0.5](https://github.com/chintan9/plyr-react/tree/v3.0.5) (2020-10-07)

[Full Changelog](https://github.com/chintan9/plyr-react/compare/v3.0.4...v3.0.5)

**Closed issues:**

- Using ref-property [\#339](https://github.com/chintan9/plyr-react/issues/339)

**Merged pull requests:**

- Update release-drafter.yml [\#374](https://github.com/chintan9/plyr-react/pull/374) ([chintan9](https://github.com/chintan9))
- Add changelog [\#373](https://github.com/chintan9/plyr-react/pull/373) ([chintan9](https://github.com/chintan9))
- Update release-drafter.yml [\#372](https://github.com/chintan9/plyr-react/pull/372) ([chintan9](https://github.com/chintan9))
- Create Build.yml [\#371](https://github.com/chintan9/plyr-react/pull/371) ([chintan9](https://github.com/chintan9))
- Fix forward ref again [\#370](https://github.com/chintan9/plyr-react/pull/370) ([iwatakeshi](https://github.com/iwatakeshi))
- Replace memo with forwardRef [\#355](https://github.com/chintan9/plyr-react/pull/355) ([iwatakeshi](https://github.com/iwatakeshi))

## [v3.0.4](https://github.com/chintan9/plyr-react/tree/v3.0.4) (2020-10-05)

[Full Changelog](https://github.com/chintan9/plyr-react/compare/v3.0.3...v3.0.4)

**Merged pull requests:**

- Bump jest from 26.1.0 to 26.4.2 [\#365](https://github.com/chintan9/plyr-react/pull/365) ([dependabot[bot]](https://github.com/apps/dependabot))

## [v3.0.3](https://github.com/chintan9/plyr-react/tree/v3.0.3) (2020-10-02)

[Full Changelog](https://github.com/chintan9/plyr-react/compare/v3.0.2...v3.0.3)

## [v3.0.2](https://github.com/chintan9/plyr-react/tree/v3.0.2) (2020-10-01)

[Full Changelog](https://github.com/chintan9/plyr-react/compare/v3.0.1...v3.0.2)

**Merged pull requests:**

- docs: add iamshouvikmitra as a contributor [\#351](https://github.com/chintan9/plyr-react/pull/351) ([allcontributors[bot]](https://github.com/apps/allcontributors))
- docs: add mnervik as a contributor [\#350](https://github.com/chintan9/plyr-react/pull/350) ([allcontributors[bot]](https://github.com/apps/allcontributors))
- docs: add iwatakeshi as a contributor [\#343](https://github.com/chintan9/plyr-react/pull/343) ([allcontributors[bot]](https://github.com/apps/allcontributors))
- docs: add iamshouvikmitra as a contributor [\#341](https://github.com/chintan9/plyr-react/pull/341) ([allcontributors[bot]](https://github.com/apps/allcontributors))
- add all-contributors [\#340](https://github.com/chintan9/plyr-react/pull/340) ([chintan9](https://github.com/chintan9))
- Create stale.yml [\#338](https://github.com/chintan9/plyr-react/pull/338) ([chintan9](https://github.com/chintan9))
- Create greetings.yml [\#337](https://github.com/chintan9/plyr-react/pull/337) ([chintan9](https://github.com/chintan9))

## [v3.0.1](https://github.com/chintan9/plyr-react/tree/v3.0.1) (2020-09-30)

[Full Changelog](https://github.com/chintan9/plyr-react/compare/v3.0.0...v3.0.1)

**Closed issues:**

- Convert to Typescript to aid intellisence and provide type support [\#308](https://github.com/chintan9/plyr-react/issues/308)
- Convert project to TypeScript [\#261](https://github.com/chintan9/plyr-react/issues/261)
- Typescript support [\#201](https://github.com/chintan9/plyr-react/issues/201)

**Merged pull requests:**

- add typings [\#334](https://github.com/chintan9/plyr-react/pull/334) ([chintan9](https://github.com/chintan9))

## [v3.0.0](https://github.com/chintan9/plyr-react/tree/v3.0.0) (2020-09-25)

[Full Changelog](https://github.com/chintan9/plyr-react/compare/v2.2.0...v3.0.0)

**Security fixes:**

- \[Security\] Bump http-proxy from 1.18.0 to 1.18.1 [\#305](https://github.com/chintan9/plyr-react/pull/305) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- \[Security\] Bump markdown-to-jsx from 6.11.0 to 6.11.4 [\#304](https://github.com/chintan9/plyr-react/pull/304) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- \[Security\] Bump elliptic from 6.5.2 to 6.5.3 [\#276](https://github.com/chintan9/plyr-react/pull/276) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- \[Security\] Bump lodash from 4.17.15 to 4.17.19 [\#268](https://github.com/chintan9/plyr-react/pull/268) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- \[Security\] Bump websocket-extensions from 0.1.3 to 0.1.4 [\#236](https://github.com/chintan9/plyr-react/pull/236) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- \[Security\] Bump acorn from 6.4.0 to 6.4.1 [\#166](https://github.com/chintan9/plyr-react/pull/166) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))

**Closed issues:**

- Could you add API to re-render the component if passing new props like `sources` to component? [\#215](https://github.com/chintan9/plyr-react/issues/215)
- React Player Project [\#212](https://github.com/chintan9/plyr-react/issues/212)
- Unsafe attempt to load URLDomains, protocols and ports must match. [\#183](https://github.com/chintan9/plyr-react/issues/183)
- Add npm package install instructions on README [\#136](https://github.com/chintan9/plyr-react/issues/136)
- How to run the methods like play, pause, etc.? [\#128](https://github.com/chintan9/plyr-react/issues/128)

**Merged pull requests:**

- Bump eslint-plugin-react-hooks from 4.0.8 to 4.1.2 [\#332](https://github.com/chintan9/plyr-react/pull/332) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump @babel/plugin-proposal-object-rest-spread from 7.10.4 to 7.11.0 [\#322](https://github.com/chintan9/plyr-react/pull/322) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump babel-jest from 26.1.0 to 26.3.0 [\#320](https://github.com/chintan9/plyr-react/pull/320) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump lodash from 4.17.19 to 4.17.20 [\#319](https://github.com/chintan9/plyr-react/pull/319) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Create Dependabot config file [\#318](https://github.com/chintan9/plyr-react/pull/318) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump jest-watch-typeahead from 0.6.0 to 0.6.1 [\#316](https://github.com/chintan9/plyr-react/pull/316) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Ready for V3 [\#314](https://github.com/chintan9/plyr-react/pull/314) ([chintan9](https://github.com/chintan9))
- Bump @babel/plugin-proposal-optional-chaining from 7.8.3 to 7.11.0 [\#283](https://github.com/chintan9/plyr-react/pull/283) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Changes to Plyr and the Build Pipeline [\#281](https://github.com/chintan9/plyr-react/pull/281) ([iwatakeshi](https://github.com/iwatakeshi))
- V3 ts [\#267](https://github.com/chintan9/plyr-react/pull/267) ([chintan9](https://github.com/chintan9))
- V3 master to v3-ts [\#264](https://github.com/chintan9/plyr-react/pull/264) ([chintan9](https://github.com/chintan9))
- V3 ts [\#263](https://github.com/chintan9/plyr-react/pull/263) ([chintan9](https://github.com/chintan9))
- \[PR\] Convert project to TypeScript [\#262](https://github.com/chintan9/plyr-react/pull/262) ([iwatakeshi](https://github.com/iwatakeshi))
- Try to move TS by iwatakeshi \#258 [\#260](https://github.com/chintan9/plyr-react/pull/260) ([chintan9](https://github.com/chintan9))
- Bump @babel/plugin-proposal-object-rest-spread from 7.8.3 to 7.10.4 [\#252](https://github.com/chintan9/plyr-react/pull/252) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump react-dom from 16.13.0 to 16.13.1 [\#209](https://github.com/chintan9/plyr-react/pull/209) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump eslint-config-airbnb from 18.0.1 to 18.1.0 [\#206](https://github.com/chintan9/plyr-react/pull/206) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump @testing-library/jest-dom from 5.1.1 to 5.5.0 [\#205](https://github.com/chintan9/plyr-react/pull/205) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump style-loader from 1.1.3 to 1.2.1 [\#204](https://github.com/chintan9/plyr-react/pull/204) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump babel-loader from 8.0.6 to 8.1.0 [\#203](https://github.com/chintan9/plyr-react/pull/203) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump eslint-plugin-react-hooks from 2.5.0 to 3.0.0 [\#182](https://github.com/chintan9/plyr-react/pull/182) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump babel-preset-react-app from 9.1.1 to 9.1.2 [\#178](https://github.com/chintan9/plyr-react/pull/178) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump react from 16.13.0 to 16.13.1 [\#174](https://github.com/chintan9/plyr-react/pull/174) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- add youtube example [\#169](https://github.com/chintan9/plyr-react/pull/169) ([chintan9](https://github.com/chintan9))
- Bump @testing-library/dom from 6.15.0 to 7.0.4 [\#168](https://github.com/chintan9/plyr-react/pull/168) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump qawolf from 0.9.3 to 0.12.0 [\#163](https://github.com/chintan9/plyr-react/pull/163) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump rollup-plugin-terser from 5.2.0 to 5.3.0 [\#159](https://github.com/chintan9/plyr-react/pull/159) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump eslint-plugin-react from 7.18.3 to 7.19.0 [\#158](https://github.com/chintan9/plyr-react/pull/158) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump rollup from 1.32.0 to 1.32.1 [\#156](https://github.com/chintan9/plyr-react/pull/156) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump rollup-plugin-babel from 4.3.3 to 4.4.0 [\#155](https://github.com/chintan9/plyr-react/pull/155) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump cross-env from 7.0.1 to 7.0.2 [\#153](https://github.com/chintan9/plyr-react/pull/153) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump eslint-plugin-jest from 23.8.1 to 23.8.2 [\#152](https://github.com/chintan9/plyr-react/pull/152) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump @babel/core from 7.8.4 to 7.8.7 [\#151](https://github.com/chintan9/plyr-react/pull/151) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump @testing-library/dom from 6.12.2 to 6.15.0 [\#150](https://github.com/chintan9/plyr-react/pull/150) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump @testing-library/react from 9.4.1 to 9.5.0 [\#149](https://github.com/chintan9/plyr-react/pull/149) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump cross-env from 7.0.0 to 7.0.1 [\#148](https://github.com/chintan9/plyr-react/pull/148) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump rollup-plugin-postcss from 2.1.1 to 2.2.0 [\#147](https://github.com/chintan9/plyr-react/pull/147) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump eslint-plugin-jest from 23.8.0 to 23.8.1 [\#146](https://github.com/chintan9/plyr-react/pull/146) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump webpack from 4.41.6 to 4.42.0 [\#145](https://github.com/chintan9/plyr-react/pull/145) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump typescript from 3.8.2 to 3.8.3 [\#144](https://github.com/chintan9/plyr-react/pull/144) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump rollup from 1.31.1 to 1.32.0 [\#143](https://github.com/chintan9/plyr-react/pull/143) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump react-test-renderer from 16.12.0 to 16.13.0 [\#141](https://github.com/chintan9/plyr-react/pull/141) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump eslint-plugin-react-hooks from 2.4.0 to 2.5.0 [\#140](https://github.com/chintan9/plyr-react/pull/140) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump react-dom from 16.12.0 to 16.13.0 [\#139](https://github.com/chintan9/plyr-react/pull/139) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump react from 16.12.0 to 16.13.0 [\#138](https://github.com/chintan9/plyr-react/pull/138) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump babel-eslint from 10.0.3 to 10.1.0 [\#137](https://github.com/chintan9/plyr-react/pull/137) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump qawolf from 0.9.2 to 0.9.3 [\#135](https://github.com/chintan9/plyr-react/pull/135) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump @svgr/rollup from 5.1.0 to 5.2.0 [\#134](https://github.com/chintan9/plyr-react/pull/134) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump rollup-plugin-postcss from 2.0.6 to 2.1.1 [\#133](https://github.com/chintan9/plyr-react/pull/133) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump @testing-library/react from 9.4.0 to 9.4.1 [\#132](https://github.com/chintan9/plyr-react/pull/132) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump eslint-plugin-jest from 23.7.0 to 23.8.0 [\#131](https://github.com/chintan9/plyr-react/pull/131) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Add cross env and fix test [\#129](https://github.com/chintan9/plyr-react/pull/129) ([chintan9](https://github.com/chintan9))

## [v2.2.0](https://github.com/chintan9/plyr-react/tree/v2.2.0) (2020-01-18)

[Full Changelog](https://github.com/chintan9/plyr-react/compare/v2.0.1...v2.2.0)

**Closed issues:**

- Update Docs [\#65](https://github.com/chintan9/plyr-react/issues/65)
- Dependabot couldn't find a package.json for this project [\#56](https://github.com/chintan9/plyr-react/issues/56)

**Merged pull requests:**

- Restyle Add Gitpod config [\#72](https://github.com/chintan9/plyr-react/pull/72) ([restyled-io[bot]](https://github.com/apps/restyled-io))
- Add Gitpod config [\#71](https://github.com/chintan9/plyr-react/pull/71) ([chintan9](https://github.com/chintan9))
- Restyle Update README.md [\#70](https://github.com/chintan9/plyr-react/pull/70) ([restyled-io[bot]](https://github.com/apps/restyled-io))
- Update README.md [\#69](https://github.com/chintan9/plyr-react/pull/69) ([chintan9](https://github.com/chintan9))
- Docs [\#67](https://github.com/chintan9/plyr-react/pull/67) ([chintan9](https://github.com/chintan9))
- Docs [\#66](https://github.com/chintan9/plyr-react/pull/66) ([chintan9](https://github.com/chintan9))
- Restyle Docs [\#64](https://github.com/chintan9/plyr-react/pull/64) ([restyled-io[bot]](https://github.com/apps/restyled-io))
- Docs [\#63](https://github.com/chintan9/plyr-react/pull/63) ([chintan9](https://github.com/chintan9))
- Bump @testing-library/user-event from 7.2.1 to 8.0.3 [\#62](https://github.com/chintan9/plyr-react/pull/62) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump @rollup/plugin-node-resolve from 6.1.0 to 7.0.0 [\#61](https://github.com/chintan9/plyr-react/pull/61) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump @testing-library/jest-dom from 4.2.4 to 5.0.0 [\#60](https://github.com/chintan9/plyr-react/pull/60) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Bump @svgr/rollup from 4.3.3 to 5.0.1 [\#59](https://github.com/chintan9/plyr-react/pull/59) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- Rollup [\#58](https://github.com/chintan9/plyr-react/pull/58) ([chintan9](https://github.com/chintan9))

## [v2.0.1](https://github.com/chintan9/plyr-react/tree/v2.0.1) (2020-01-17)

[Full Changelog](https://github.com/chintan9/plyr-react/compare/v2.0.0...v2.0.1)

## [v2.0.0](https://github.com/chintan9/plyr-react/tree/v2.0.0) (2020-01-16)

[Full Changelog](https://github.com/chintan9/plyr-react/compare/e15ea3f2b31dfbb052f625527243bb5975431d00...v2.0.0)

**Merged pull requests:**

- Bundle with webpack [\#55](https://github.com/chintan9/plyr-react/pull/55) ([chintan9](https://github.com/chintan9))
- make thing nice [\#53](https://github.com/chintan9/plyr-react/pull/53) ([chintan9](https://github.com/chintan9))
- update [\#51](https://github.com/chintan9/plyr-react/pull/51) ([chintan9](https://github.com/chintan9))
- Add Gitpod config [\#47](https://github.com/chintan9/plyr-react/pull/47) ([chintan9](https://github.com/chintan9))
- Rewrite [\#23](https://github.com/chintan9/plyr-react/pull/23) ([chintan9](https://github.com/chintan9))
- Rewrite [\#21](https://github.com/chintan9/plyr-react/pull/21) ([chintan9](https://github.com/chintan9))
- Update dependency rollup to v1.27.10 [\#20](https://github.com/chintan9/plyr-react/pull/20) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency rollup-plugin-postcss to v2 [\#18](https://github.com/chintan9/plyr-react/pull/18) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency rollup to v1 [\#14](https://github.com/chintan9/plyr-react/pull/14) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency gh-pages to v2 [\#12](https://github.com/chintan9/plyr-react/pull/12) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency eslint-plugin-standard to v4 [\#11](https://github.com/chintan9/plyr-react/pull/11) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency eslint-plugin-node to v10 [\#10](https://github.com/chintan9/plyr-react/pull/10) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency eslint-config-standard-react to v9 [\#9](https://github.com/chintan9/plyr-react/pull/9) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency eslint-config-standard to v14 [\#8](https://github.com/chintan9/plyr-react/pull/8) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency eslint to v6 [\#7](https://github.com/chintan9/plyr-react/pull/7) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency cross-env to v6 [\#6](https://github.com/chintan9/plyr-react/pull/6) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency babel-eslint to v10 [\#5](https://github.com/chintan9/plyr-react/pull/5) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency @svgr/rollup to v4 [\#4](https://github.com/chintan9/plyr-react/pull/4) ([renovate[bot]](https://github.com/apps/renovate))
- Update dependency rollup to v0.68.2 [\#3](https://github.com/chintan9/plyr-react/pull/3) ([renovate[bot]](https://github.com/apps/renovate))
- Pin dependencies [\#2](https://github.com/chintan9/plyr-react/pull/2) ([renovate[bot]](https://github.com/apps/renovate))
- Configure Renovate [\#1](https://github.com/chintan9/plyr-react/pull/1) ([renovate[bot]](https://github.com/apps/renovate))

\* _This Changelog was automatically generated by [github_changelog_generator](https://github.com/github-changelog-generator/github-changelog-generator)_



================================================
FILE: CODE_OF_CONDUCT.md
================================================
# Contributor Covenant Code of Conduct

## Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, sex characteristics, gender identity and
expression, level of experience, education, socio-economic status, nationality,
personal appearance, race, religion, or sexual identity and orientation.

## Our Standards

Examples of behavior that contributes to creating a positive environment
include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or
  advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic
  address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, or to ban temporarily or permanently any
contributor for other behaviors that they deem inappropriate, threatening,
offensive, or harmful.

## Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at chintan9@aol.in. All complaints will
be reviewed and investigated and will result in a response that is deemed
necessary and appropriate to the circumstances. The project team is obligated to
maintain confidentiality with regard to the reporter of an incident. Further
details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 1.4, available at
https://www.contributor-covenant.org/version/1/4/code-of-conduct.html

[homepage]: https://www.contributor-covenant.org

For answers to common questions about this code of conduct, see
https://www.contributor-covenant.org/faq



================================================
FILE: CONTRIBUTING.md
================================================
# Contributing

When contributing to this repository, please first discuss the change you wish
to make via issue, email, or any other method with the owners of this repository
before making a change.

Please note we have a code of conduct, please follow it in all your interactions
with the project.

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the
   layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes
   new environment variables, exposed ports, useful file locations and container
   parameters.
3. Increase the version numbers in any examples files and the README.md to the
   new version that this Pull Request would represent. The versioning scheme we
   use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other
   developers, or if you do not have permission to do that, you may request the
   second reviewer to merge it for you.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of
experience, nationality, personal appearance, race, religion, or sexual identity
and orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or
  advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic
  address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, or to ban temporarily or permanently any
contributor for other behaviors that they deem inappropriate, threatening,
offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at [INSERT EMAIL ADDRESS]. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an
incident. Further details of specific enforcement policies may be posted
separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 1.4, available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/



================================================
FILE: eslint.config.js
================================================
import globals from "globals";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  // Global ignores
  {
    ignores: ["dist/", "node_modules/", "coverage/"],
  },

  // Base configurations
  ...tseslint.configs.recommended,

  // Main configuration for all TS/JS files
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", // Not needed with TypeScript
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },

  // Jest/test specific configuration
  {
    files: ["tests/**/*.{ts,tsx}"],
    ...jestPlugin.configs["flat/recommended"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },

  // Prettier configuration (must be last)
  prettierConfig
);



================================================
FILE: LICENSE
================================================
MIT License

Copyright (c) 2020 Chintan Prajapati

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



================================================
FILE: package.json
================================================
{
  "name": "plyr-react",
  "version": "6.0.0",
  "description": "A simple HTML5, YouTube and Vimeo player for react using plyr",
  "keywords": [
    "react",
    "plyr",
    "video",
    "player",
    "media"
  ],
  "homepage": "https://github.com/chintan9/plyr-react",
  "repository": {
    "type": "git",
    "url": "git@github.com:chintan9/plyr-react.git"
  },
  "license": "MIT",
  "author": "Chintan Prajapati",
  "sideEffects": false,
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    "./package.json": "./package.json",
    "./plyr.css": "./dist/plyr.css",
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    }
  },
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "tsdown --config rolldown.config.ts --minify",
    "dev": "tsdown --config rolldown.config.ts --watch",
    "lint": "eslint --fix '{src,tests}/**/*.{ts,tsx}'",
    "test": "jest",
    "prepare": "husky install",
    "release": "npm publish"
  },
  "dependencies": {
    "react-aptor": "^2.0.0"
  },
  "devDependencies": {
    "@swc/core": "^1.3.42",
    "@swc/jest": "^0.2.24",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^12.1.5",
    "@types/jest": "^27.5.2",
    "@types/react": "^18.0.28",
    "@typescript-eslint/eslint-plugin": "latest",
    "@typescript-eslint/parser": "latest",
    "eslint": "latest",
    "eslint-config-prettier": "latest",
    "eslint-import-resolver-typescript": "^4.4.4",
    "eslint-plugin-import": "latest",
    "eslint-plugin-jest": "latest",
    "eslint-plugin-prettier": "latest",
    "eslint-plugin-react": "latest",
    "eslint-plugin-react-hooks": "latest",
    "husky": "^8.0.3",
    "jest": "^27.5.1",
    "jest-environment-jsdom": "^27.5.1",
    "lint-staged": "^12.5.0",
    "plyr": "^3.7.7",
    "prettier": "latest",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "tsdown": "^0.2.0",
    "typescript": "^5.0.4",
    "typescript-eslint": "^8.41.0"
  },
  "peerDependencies": {
    "plyr": "^3.7.7",
    "react": ">=16.8"
  },
  "engines": {
    "node": ">=16"
  },
  "publishConfig": {
    "access": "public"
  },
  "jest": {
    "rootDir": ".",
    "testEnvironment": "jsdom",
    "transform": {
      "^.+\\.(t|j)sx?$": [
        "@swc/jest"
      ]
    },
    "modulePathIgnorePatterns": [
      "dist"
    ],
    "testRegex": "test.(ts|tsx)$",
    "coverageDirectory": "./coverage/",
    "collectCoverage": true,
    "coverageReporters": [
      "json",
      "html",
      "text",
      "text-summary"
    ],
    "collectCoverageFrom": [
      "src/**/*.{ts,tsx}",
      "tests/**/*.{ts,tsx}"
    ],
    "globals": {
      "__DEV__": true
    }
  }
}



================================================
FILE: rolldown.config.ts
================================================
import { defineConfig } from "tsdown";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This is our custom plugin object
const copyCssPlugin = {
  name: "copy-css",

  // This function runs after the bundle is written to the dist folder
  writeBundle() {
    const source = path.resolve(__dirname, "node_modules/plyr/dist/plyr.css");
    const destinationDir = path.resolve(__dirname, "dist");
    const destinationFile = path.join(destinationDir, "plyr.css");

    // Ensure the 'dist' directory exists. The recursive option prevents errors if it already exists.
    fs.mkdirSync(destinationDir, { recursive: true });

    // Copy the file
    fs.copyFileSync(source, destinationFile);

    console.log("✅ Copied plyr.css to dist/plyr.css");
  },
};

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  // Use our custom plugin
  plugins: [copyCssPlugin],
});



================================================
FILE: SECURITY.md
================================================
# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 6.0.x   | :white_check_mark: |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :x:                |
| < 4.0   | :x:                |

## Reporting a Vulnerability

Use this section to tell people how to report a vulnerability.

Tell them where to go, how often they can expect to get an update on a
reported vulnerability, what to expect if the vulnerability is accepted or
declined, etc.



================================================
FILE: sonar-project.properties
================================================
sonar.projectKey=chintan9_plyr-react
sonar.organization=chintan9

# This is the name and version displayed in the SonarCloud UI.
#sonar.projectName=plyr-react
#sonar.projectVersion=1.0

# Path is relative to the sonar-project.properties file. Replace "\" by "/" on Windows.
#sonar.sources=.

# Encoding of the source code. Default is default system encoding
#sonar.sourceEncoding=UTF-8



================================================
FILE: sourcelevel.yml
================================================
# This configuration was used SourceLevel to review the chintan9/plyr-react repository
# on d58f0fdc7fcb4061a1350f614711b9384076c605.
# You can make this the default configuration for future reviews by moving this
# file to your repository as `.sourcelevel.yml` and pushing it to GitHub, and tweak
# it as you wish - To know more on how to change this file to better review your
# repository you can go to https://docs.sourcelevel.io/configuration and see the configuration
# details.
---
styleguide: sourcelevel/linters
engines:
  fixme:
    enabled: true
  eslint:
    enabled: true
  csslint:
    enabled: true
  remark-lint:
    enabled: true
exclude_paths:
  - config
  - test
  - dist



================================================
FILE: tsconfig.json
================================================
{
  "compilerOptions": {
    "baseUrl": ".",
    "declaration": true,
    "esModuleInterop": true,
    "exactOptionalPropertyTypes": true,
    "importHelpers": true,
    "jsx": "react-jsx",
    "lib": ["es2018", "dom", "scripthost", "es2015.proxy"],
    "moduleResolution": "bundler",
    "noFallthroughCasesInSwitch": true,
    "noImplicitAny": false,
    "noImplicitReturns": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "pretty": true,
    "sourceMap": false,
    "strict": true,
    "target": "esnext",
    "allowJs": true,
    "outDir": "dist",
    "rootDir": ".",
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src", "tests"],
  "exclude": ["node_modules"]
}



================================================
FILE: .all-contributorsrc
================================================
{
  "projectName": "plyr-react",
  "projectOwner": "chintan9",
  "repoType": "github",
  "repoHost": "https://github.com",
  "files": [
    "README.md"
  ],
  "imageSize": 100,
  "commit": true,
  "commitConvention": "none",
  "contributors": [
    {
      "login": "iwatakeshi",
      "name": "Takeshi",
      "avatar_url": "https://avatars3.githubusercontent.com/u/1505448?v=4",
      "profile": "http://www.iwatakeshi.com",
      "contributions": [
        "ideas",
        "question",
        "translation",
        "userTesting",
        "example"
      ]
    },
    {
      "login": "mnervik",
      "name": "mnervik",
      "avatar_url": "https://avatars1.githubusercontent.com/u/15329600?v=4",
      "profile": "https://github.com/mnervik",
      "contributions": [
        "test",
        "userTesting"
      ]
    },
    {
      "login": "amirHossein-Ebrahimi",
      "name": "Amir.H Ebrahimi",
      "avatar_url": "https://avatars0.githubusercontent.com/u/23579958?v=4&s=100",
      "profile": "https://ahimico.github.io/",
      "contributions": [
        "infra",
        "doc",
        "tool",
        "maintenance",
        "review",
        "question",
        "code",
        "test"
      ]
    }
  ],
  "contributorsPerLine": 7,
  "skipCi": true
}



================================================
FILE: .deepsource.toml
================================================
version = 1

test_patterns = ["*/test/**"]

exclude_patterns = [".*/**"]

[[analyzers]]
name = "javascript"
enabled = true

  [analyzers.meta]
  environment = [
    "nodejs",
    "jest"
  ]
  plugins = ["react"]
  style_guide = "airbnb"
  dialect = "typescript"

[[transformers]]
name = "prettier"
enabled = true



================================================
FILE: .editorconfig
================================================
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false


================================================
FILE: .gitpod.yml
================================================
tasks:
  - init: npm install && npm run build
    command: npm run start



================================================
FILE: .lintstagedrc.json
================================================
{
  "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
  "*.{json,md,css}": "prettier --write"
}



================================================
FILE: .npmignore
================================================
.*.swp
._*
.DS_Store
.git
.gitlab-ci*
.hg
.npmrc
.lock-wscript
.svn
.wafpickle-*
.travis.yml
.editorconfig
.eslint*
.yarnrc

config.gypi
CVS
npm-debug.log

yarn-debug.log*
yarn-error.log*
default.config
rollup.config.js


docker*
Docker*

coverage
config
demo
public
src
scripts
styleguide*






================================================
FILE: .pre-commit-config.yaml
================================================
repos:
- repo: https://github.com/gitleaks/gitleaks
  rev: v8.16.3
  hooks:
  - id: gitleaks
- repo: https://github.com/jumanjihouse/pre-commit-hooks
  rev: 3.0.0
  hooks:
  - id: shellcheck
- repo: https://github.com/pre-commit/mirrors-eslint
  rev: v8.38.0
  hooks:
  - id: eslint
- repo: https://github.com/pre-commit/pre-commit-hooks
  rev: v4.4.0
  hooks:
  - id: end-of-file-fixer
  - id: trailing-whitespace



================================================
FILE: .prettierignore
================================================
**/.git
**/.svn
**/.hg
**/node_modules
**/dist


================================================
FILE: .prettierrc
================================================
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "bracketSpacing": true,
  "bracketSameLine": true,
  "arrowParens": "always",
  "endOfLine": "lf",
  "overrides": [
    {
      "files": "README.md",
      "options": {
        "semi": false
      }
    }
  ]
}



================================================
FILE: .remarkignore
================================================
.github
.CHANGELOG.md


================================================
FILE: .swcrc
================================================
{
  "jsc": {
    "target": "es5",
    "parser": {
      "syntax": "typescript",
      "tsx": true
    },
    "transform": {
      "react": {
        "runtime": "automatic",
        "pragma": "React.createElement",
        "pragmaFrag": "React.Fragment",
        "throwIfNamespace": true,
        "useBuiltins": true
      }
    }
  },
  "sourceMaps": true
}



================================================
FILE: .typo-ci.yml
================================================
dictionaries:
  - en
  - en_GB

# Any files/folders we should ignore?
excluded_files:
  - "vendor/**/*"
  - "node_modules/**/*"
  - "*.key"
  - "*.enc"
  - "*.min.css"
  - "*.css.map"
  - "*.min.js"
  - "*.js.map"
  - "*.mk"
  - "package-lock.json"
  - "yarn.lock"
  - "Gemfile.lock"
  - ".typo-ci.yml"
  - "/docz"

# Any typos we should ignore?
excluded_words:
  - typoci
  - Plyr
  - npmrc
  - plyr
  - esw
  - seektime
  - iwatakeshi
  - svgr
  - plugin-proposal-nullish-coalescing-operator



================================================
FILE: example/plyr-example/README.md
================================================
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



================================================
FILE: example/plyr-example/eslint.config.js
================================================
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
]);



================================================
FILE: example/plyr-example/index.html
================================================
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>



================================================
FILE: example/plyr-example/package.json
================================================
{
  "name": "plyr-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "plyr": "^3.8.3",
    "plyr-react": "next",
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.33.0",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^5.0.0",
    "eslint": "^9.33.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0",
    "vite": "^7.3.0"
  }
}



================================================
FILE: example/plyr-example/vite.config.js
================================================
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This allows Vite to be accessed from the Gitpod preview URL
    hmr: {
      clientPort: 443,
    },
    // Respond to all hosts, which is needed for Gitpod
    allowedHosts: [".gitpod.io"],
  },
});



================================================
FILE: example/plyr-example/src/App.css
================================================
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}



================================================
FILE: example/plyr-example/src/App.jsx
================================================
// src/App.jsx

import { useRef } from "react";
import { Plyr } from "plyr-react";

// The source config for a YouTube video
const youtubeVideoSrc = {
  type: "video",
  sources: [
    {
      src: "aqz-KE-bpKQ", // YouTube video ID or URL
      provider: "youtube",
    },
  ],
};

/**
 * Root React component that renders a heading and a Plyr video player configured with `youtubeVideoSrc`.
 *
 * @returns {JSX.Element} The app UI containing a header and the Plyr player.
 */
function App() {
  const ref = useRef(null);

  return (
    <div className="App">
      <h1>Plyr React in GitHub Codespaces</h1>
      <Plyr ref={ref} source={youtubeVideoSrc} />
    </div>
  );
}

export default App;



================================================
FILE: example/plyr-example/src/index.css
================================================
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

/* src/index.css */
body {
  font-family: system-ui, sans-serif;
  background-color: #1a1a1a;
  color: white;
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.App {
  max-width: 800px;
  width: 100%;
  text-align: center;
}



================================================
FILE: example/plyr-example/src/main.jsx
================================================
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "plyr-react/plyr.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);



================================================
FILE: src/index.tsx
================================================
import * as React from "react";
import type {
  DependencyList,
  DetailedHTMLProps,
  MutableRefObject,
  Ref,
  RefAttributes, // Import RefAttributes
  VideoHTMLAttributes,
} from "react";
// This is the critical change for the import
import * as Plyr from "plyr";
import useAptor, { Destroy, GetAPI, Instantiate } from "react-aptor";

// And this is the critical change for usage
const PlyrJS = Plyr.default;

export type PlyrInstance = Plyr.default;
export type PlyrOptions = Plyr.Options;
export type PlyrSource = Plyr.SourceInfo;

type PlyrConfigurationProps = {
  source: PlyrSource | null;
  options?: PlyrOptions | null;
};

type ReactVideoProps = DetailedHTMLProps<
  VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>;
export type PlyrProps = Omit<ReactVideoProps, "ref"> & PlyrConfigurationProps;

export interface APITypes {
  plyr: PlyrInstance;
}

const instantiate: Instantiate<
  PlyrInstance,
  HTMLVideoElement,
  PlyrConfigurationProps
> = (_, params) => {
  const plyr = new PlyrJS(".plyr-react", params?.options ?? {});
  if (params?.source) plyr.source = params?.source;
  return plyr;
};

const destroy: Destroy<PlyrInstance, PlyrConfigurationProps> = (
  plyr: PlyrInstance | null
) => {
  if (plyr) plyr.destroy();
};

const noop = () => {};

const getAPI: GetAPI<PlyrInstance, PlyrConfigurationProps> = (
  plyr: PlyrInstance | null
) => {
  if (!plyr) {
    return () =>
      new Proxy({ plyr: { source: null } } as unknown as APITypes, {
        get: (target, prop) => {
          if (prop === "plyr") {
            return target[prop];
          }
          return noop;
        },
      });
  }

  return () => ({
    plyr,
  });
};

/**
 * Connects a video element ref to a Plyr instance and exposes a forwarded API ref.
 *
 * Initializes and manages the Plyr lifecycle using the provided `params`. The returned ref
 * should be attached to the underlying <video> element; the forwarded `ref` receives an
 * API object (shape: { plyr: PlyrInstance }) that is safe to use from parent components.
 *
 * @param params - Configuration for the Plyr instance: `source` (media source or null) and
 *   `options` (Plyr options or null). Changes to these values will reconfigure the player.
 * @param deps - Optional dependency list controlling when the underlying aptor logic runs.
 *   If `null`, defaults to [params.options, params.source].
 * @returns A ref to attach to the <video> element that Plyr will control.
 */
export function usePlyr(
  ref: Ref<APITypes>,
  params: PlyrConfigurationProps,
  deps: DependencyList | null = null
): React.Ref<HTMLVideoElement> {
  return useAptor<PlyrInstance, HTMLVideoElement, PlyrConfigurationProps>(
    ref,
    {
      instantiate,
      getAPI,
      destroy,
      params,
    },
    deps ?? [params.options, params.source]
  );
}

const PlyrComponent: React.ForwardRefExoticComponent<
  PlyrProps & RefAttributes<APITypes>
> = React.forwardRef<APITypes, PlyrProps>((props, ref) => {
  const { source, options = null, ...rest } = props;
  const raptorRef = usePlyr(ref, {
    source,
    options,
  }) as MutableRefObject<HTMLVideoElement>;
  return <video ref={raptorRef} className="plyr-react plyr" {...rest} />;
});

PlyrComponent.displayName = "Plyr";

export { PlyrComponent as Plyr };



================================================
FILE: src/types.d.ts
================================================
// This file can be empty or you can add other global types.
// For now, it is intentionally left empty as __DEV__ is no longer used.



================================================
FILE: tests/Plyr.test.tsx
================================================
import * as React from "react";
import { render } from "@testing-library/react";
import { Plyr, PlyrInstance } from "../src/index";

// https://github.com/jsdom/jsdom/issues/2541#issuecomment-788761237
jest.mock("plyr");
jest.mock("plyr", () => {
  return jest
    .fn()
    .mockImplementation(() => ({ destroy: jest.fn(), playing: false }));
});

const SOURCE = null;
describe("<Plyr />", () => {
  it("should render", () => {
    const { container } = render(<Plyr source={SOURCE} />);
    expect(container.querySelector("video")).toBeDefined();
  });

  it("should render and set a forward ref", () => {
    const setRef = jest.fn();
    const { container } = render(<Plyr ref={setRef} source={SOURCE} />);

    expect(container.querySelector("video")).toBeDefined();
    expect(setRef).toHaveBeenCalled();
  });

  it("should render and have a plyr instance in ref.current", () => {
    const ref = React.createRef<{ plyr: PlyrInstance }>();
    const { container } = render(<Plyr ref={ref} source={SOURCE} />);

    expect(container.querySelector("video")).toBeDefined();
    expect(ref.current).toBeDefined();
    expect(ref.current?.plyr).toBeDefined();
  });

  it("should render and have a plyr instance in ref.current when using a ref callback", () => {
    const ref = React.createRef<{ plyr: PlyrInstance }>();
    const { container } = render(
      <Plyr
        ref={(player) => {
          // @ts-expect-error [Note: Current type is readonly]
          ref.current = player;
        }}
        source={SOURCE}
      />
    );

    expect(container.querySelector("video")).toBeDefined();
    expect(ref.current).toBeDefined();
    expect(ref.current?.plyr).toBeDefined();
  });

  it("should render and keep a plyr instance after a rerender", () => {
    const ref = React.createRef<{ plyr: PlyrInstance }>();
    const { container, rerender } = render(<Plyr ref={ref} source={SOURCE} />);

    expect(container.querySelector("video")).toBeDefined();
    expect(ref.current).toBeDefined();
    expect(ref.current?.plyr).toBeDefined();

    rerender(<Plyr ref={ref} source={SOURCE} />);
    expect(container.querySelector("video")).toBeDefined();
    expect(ref.current).toBeDefined();
    expect(ref.current?.plyr).toBeDefined();
    expect((ref.current?.plyr as PlyrInstance).playing).toBe(false);
  });
});



================================================
FILE: .github/dependabot.yml
================================================
version: 2
updates:
  - package-ecosystem: npm
    directory: "/"
    schedule:
      interval: weekly
      time: "09:00"
    open-pull-requests-limit: 10

  - package-ecosystem: github-actions
    directory: /
    schedule:
      interval: daily

  - package-ecosystem: npm
    directory: /dist
    schedule:
      interval: daily

  - package-ecosystem: npm
    directory: /example/nextjs
    schedule:
      interval: daily

  - package-ecosystem: npm
    directory: /example/react
    schedule:
      interval: daily



================================================
FILE: .github/release-drafter.yml
================================================
template: |
  ## What’s Changed

  $CHANGES



================================================
FILE: .github/starrycake.yml
================================================
## MASTER APPLICATION CONFIG
starrycake:
  # if false, application's every feature won't work
  moduleSwitch: true

## ASSIGNER
assigner:
  # if false, ASSIGNER module won't work
  moduleSwitch: true
  # assign on new issue?
  assignOnNewIssue: true
  # assign on new pull request?
  assignOnNewPullRequest: true
  # review on new pull request?
  reviewOnNewPullRequest: true

## DELETE-MERGED-BRANCH
deletebranch:
  # if false, DELETE-MERGED-BRANCH module won't work
  moduleSwitch: true
  # list of branches that should not be automatically deleted after a merge. Wildcards supported.
  exclude:
    - dev-*
  # whether or not a branch should be deleted if PR is closed without merging
  delete_closed_pr: true

## REMINDER
reminder:
  # if false, REMINDER module won't work
  moduleSwitch: true

## RESPONDER
responder:
  # if false, RESPONDER module won't work
  moduleSwitch: true
  # respond on new issue?
  respondOnNewIssue: true
  # respond on new pull request?
  respondOnNewPullRequest: true
  # respond on my new issue?
  respondOnMyIssue: false
  # respond on my new pull request?
  respondOnMyPullRequest: false
  # issue respond message string
  issueRespond: Thanks for opening this issue!
  # pull request respond message string
  pullRequestRespond: Thanks for opening this pull request!

## STALE
stale:
  # if false, STALE module won't work
  moduleSwitch: true
  # Number of days of inactivity before an Issue or Pull Request becomes stale
  daysUntilStale: 60
  # Number of days of inactivity before a stale Issue or Pull Request is closed. If disabled, issues still need to be closed manually, but will remain marked as stale.
  daysUntilClose: 7
  # Issues or Pull Requests with these labels will never be considered stale. Set to `[]` to disable
  exemptLabels:
    - pinned
    - security
  # Label to use when marking as stale
  staleLabel: wontfix
  # Comment to post when marking as stale. Set to `false` to disable
  markComment: >
    This issue has been marked as stale. It will be closed if no further activity occurs.
  # Comment to post when closing a stale Issue or Pull Request. Set to `false` to disable
  closeComment: false

## TO-DO
todo:
  # if false, TO-DO module won't work
  moduleSwitch: true
  # If `true`, it'll assign whoever pushed the code. If a string, it'll assign that user by username. `false` to not assign anyone.
  autoAssign: true
  # The keyword(s) to use to generate issue titles
  keyword: ["@todo", "TODO"]
  # If this is in the line right after the main keyword, it will become the generated issue body.
  bodyKeyword: ["@body", "BODY"]
  # The number of lines of code to show, starting from the keyword.
  blobLines: 5
  # Should the keyword be case sensitive?
  caseSensitive: false
  # If true, add the `todo` label. If false, don't add any label.You can also give it a label name or an array of label names.
  label: true
  # If an issue already exists and is closed, reopen it. If set to false, no new issue will be created.
  reopenClosed: true
  # Exclude certain files and/or directories. Should be a valid regular expression.
  exclude: null

## TRIAGE-NEW-ISSUES
triage:
  # if false, TRIAGE-NEW-ISSUES module won't work
  moduleSwitch: true
  # the label name triage module uses
  triageLabel: triage

## UNFURL
unfurl:
  # if false, UNFURL module won't work
  moduleSwitch: true



================================================
FILE: .github/ISSUE_TEMPLATE/bug_report.md
================================================
---
name: Bug report
about: Create a report to help us improve
title: ""
labels: ""
assignees: ""
---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**

- OS: [e.g. iOS]
- Browser [e.g. chrome, safari]
- Version [e.g. 22]

**Smartphone (please complete the following information):**

- Device: [e.g. iPhone6]
- OS: [e.g. iOS8.1]
- Browser [e.g. stock browser, safari]
- Version [e.g. 22]

**Additional context**
Add any other context about the problem here.



================================================
FILE: .github/ISSUE_TEMPLATE/feature_request.md
================================================
---
name: Feature request
about: Suggest an idea for this project
title: ""
labels: ""
assignees: ""
---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.



================================================
FILE: .github/workflows/codesee-arch-diagram.yml
================================================
# This workflow was added by CodeSee. Learn more at https://codesee.io/
# This is v2.0 of this workflow file
on:
  push:
    branches:
      - master
  pull_request_target:
    types: [opened, synchronize, reopened]

name: CodeSee

permissions: read-all

jobs:
  codesee:
    runs-on: ubuntu-latest
    continue-on-error: true
    name: Analyze the repo with CodeSee
    steps:
      - name: Harden the runner (Audit all outbound calls)
        uses: step-security/harden-runner@f4a75cfd619ee5ce8d5b864b0d183aff3c69b55a # v2.13.1
        with:
          egress-policy: audit

      - uses: Codesee-io/codesee-action@db076ce4b205a08da4d95bbefb3e278a958a4799 # v2
        with:
          codesee-token: ${{ secrets.CODESEE_ARCH_DIAG_API_TOKEN }}



================================================
FILE: .github/workflows/dependency-review.yml
================================================
# Dependency Review Action
#
# This Action will scan dependency manifest files that change as part of a Pull Request,
# surfacing known-vulnerable versions of the packages declared or updated in the PR.
# Once installed, if the workflow run is marked as required,
# PRs introducing known-vulnerable packages will be blocked from merging.
#
# Source repository: https://github.com/actions/dependency-review-action
name: 'Dependency Review'
on: [pull_request]

permissions:
  contents: read

jobs:
  dependency-review:
    runs-on: ubuntu-latest
    steps:
      - name: Harden the runner (Audit all outbound calls)
        uses: step-security/harden-runner@f4a75cfd619ee5ce8d5b864b0d183aff3c69b55a # v2.13.1
        with:
          egress-policy: audit

      - name: 'Checkout Repository'
        uses: actions/checkout@08eba0b27e820071cde6df949e0beb9ba4906955 # v4.3.0
      - name: 'Dependency Review'
        uses: actions/dependency-review-action@595b5aeba73380359d98a5e087f648dbb0edce1b # v4.7.3



================================================
FILE: .github/workflows/nodejs.yml
================================================
name: Node CI

on: [push]

permissions:
  contents: read

jobs:
  build:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest, windows-latest]
        node-version: [20.x, 22.x, 24.x]

    steps:
      - name: Harden the runner (Audit all outbound calls)
        uses: step-security/harden-runner@f4a75cfd619ee5ce8d5b864b0d183aff3c69b55a # v2.13.1
        with:
          egress-policy: audit

      - uses: actions/checkout@f43a0e5ff2bd294095638e18286ca9a3d1956744 # v3.6.0
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@3235b876344d2a9aa001b8d1453c930bba69e610 # v3.9.1
        with:
          node-version: ${{ matrix.node-version }}
      - name: npm install, build, and test
        run: |
          npm install -g npm@11
          npm ci
          npm run build --if-present
          npm run test
        env:
          CI: true



================================================
FILE: .github/workflows/release-drafter.yml
================================================
name: Release Drafter

on:
  push:
    # branches to consider in the event; optional, defaults to all
    branches:
      - master
    tags:
      - "*"

jobs:
  update_release_draft:
    runs-on: ubuntu-latest
    steps:
      # Drafts your next Release notes as Pull Requests are merged into "master"
      - name: Harden the runner (Audit all outbound calls)
        uses: step-security/harden-runner@f4a75cfd619ee5ce8d5b864b0d183aff3c69b55a # v2.13.1
        with:
          egress-policy: audit

      - name: Release Drafter
        uses: release-drafter/release-drafter@742103fb215cffdf7e75a201365b1d0e3e16a959 # v5.6.1

        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: ChangeCast
        uses: palmerhq/changecast@5b4ddcc141104f8d8382cb63cdbedda46b09b88c # v1.0.0

      - name: Changelog Generator
        uses: heinrichreimer/github-changelog-generator-action@04f64206d10b4f9c882da8157ffc3dfa6ce66b3e # v2.1.1
        with:
          token: ${{ secrets.GITHUB_TOKEN }}



================================================
FILE: .github/workflows/scorecards.yml
================================================
# This workflow uses actions that are not certified by GitHub. They are provided
# by a third-party and are governed by separate terms of service, privacy
# policy, and support documentation.

name: Scorecard supply-chain security
on:
  # For Branch-Protection check. Only the default branch is supported. See
  # https://github.com/ossf/scorecard/blob/main/docs/checks.md#branch-protection
  branch_protection_rule:
  # To guarantee Maintained check is occasionally updated. See
  # https://github.com/ossf/scorecard/blob/main/docs/checks.md#maintained
  schedule:
    - cron: '20 7 * * 2'
  push:
    branches: ["master"]

# Declare default permissions as read only.
permissions: read-all

jobs:
  analysis:
    name: Scorecard analysis
    runs-on: ubuntu-latest
    permissions:
      # Needed to upload the results to code-scanning dashboard.
      security-events: write
      # Needed to publish results and get a badge (see publish_results below).
      id-token: write
      contents: read
      actions: read
      # To allow GraphQL ListCommits to work
      issues: read
      pull-requests: read
      # To detect SAST tools
      checks: read

    steps:
      - name: Harden the runner (Audit all outbound calls)
        uses: step-security/harden-runner@f4a75cfd619ee5ce8d5b864b0d183aff3c69b55a # v2.13.1
        with:
          egress-policy: audit

      - name: "Checkout code"
        uses: actions/checkout@08eba0b27e820071cde6df949e0beb9ba4906955 # v4.3.0
        with:
          persist-credentials: false

      - name: "Run analysis"
        uses: ossf/scorecard-action@62b2cac7ed8198b15735ed49ab1e5cf35480ba46 # v2.4.0
        with:
          results_file: results.sarif
          results_format: sarif
          # (Optional) "write" PAT token. Uncomment the `repo_token` line below if:
          # - you want to enable the Branch-Protection check on a *public* repository, or
          # - you are installing Scorecards on a *private* repository
          # To create the PAT, follow the steps in https://github.com/ossf/scorecard-action#authentication-with-pat.
          # repo_token: ${{ secrets.SCORECARD_TOKEN }}

          # Public repositories:
          #   - Publish results to OpenSSF REST API for easy access by consumers
          #   - Allows the repository to include the Scorecard badge.
          #   - See https://github.com/ossf/scorecard-action#publishing-results.
          # For private repositories:
          #   - `publish_results` will always be set to `false`, regardless
          #     of the value entered here.
          publish_results: true

      # Upload the results as artifacts (optional). Commenting out will disable uploads of run results in SARIF
      # format to the repository Actions tab.
      - name: "Upload artifact"
        uses: actions/upload-artifact@ea165f8d65b6e75b540449e92b4886f43607fa02 # v4.6.2
        with:
          name: SARIF file
          path: results.sarif
          retention-days: 5

      # Upload the results to GitHub's code scanning dashboard.
      - name: "Upload to code-scanning"
        uses: github/codeql-action/upload-sarif@5d4e8d1aca955e8d8589aabd499c5cae939e33c7 # v4.31.9
        with:
          sarif_file: results.sarif



================================================
FILE: .husky/pre-commit
================================================
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged



================================================
FILE: .husky/pre-push
================================================
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint && npm run build && npm test


