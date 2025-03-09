# Blog App (Vuetify + Dexie)

This is a custom-built blog application leveraging Vuetify and Dexie, designed to provide a seamless experience for creating, editing, and viewing blog posts. It offers a pre-configured template with a modern UI, local storage via IndexedDB, and Markdown support

## ❗️ Important Links

- 📄 [Vuetify Docs](https://vuetifyjs.com/)
- 📦 [Dexie Docs](https://dexie.org/docs/)
- 📝 [Marked Docs](https://marked.js.org/)
- 💬 [Vue Community](https://vuejs.org/community/)

## 💿 Install

Set up your project using your preferred package manager. Use the corresponding command to install the dependencies:

| Package Manager                                           | Command        |
| --------------------------------------------------------- | -------------- |
| [yarn](https://yarnpkg.com/getting-started)               | `yarn install` |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install) | `npm install`  |
| [pnpm](https://pnpm.io/installation)                      | `pnpm install` |
| [bun](https://bun.sh/#getting-started)                    | `bun install`  |

After installation, your environment is ready to start building your blog with Vuetify and Dexie.

## ✨ Features

- 🖼️ **Modern UI with Vuetify**: Built with [Vuetify 3](https://vuetifyjs.com/en/) for a responsive, Material Design-inspired interface, enhanced with utility classes for flexible styling.
- 📝 **Markdown Support**: Integrated with [Marked](https://marked.js.org/) to render rich blog content, including headings, lists, code blocks, and more, with real-time previews.
- 🗃️ **Local Storage with Dexie**: Uses [Dexie](https://dexie.org/), a minimalistic IndexedDB wrapper, for fast, offline-capable post storage and retrieval.
- 🖼️ **Optimized Front-End Stack**: Leverage the latest Vue 3 and Vuetify 3 for a modern, reactive UI development experience. [Vue 3](https://v3.vuejs.org/) | [Vuetify 3](https://vuetifyjs.com/en/)
- 🗃️ **State Management**: Integrated with [Pinia](https://pinia.vuejs.org/), the intuitive, modular state management solution for Vue.
- 🚦 **Routing and Layouts**: Utilizes Vue Router for SPA navigation and vite-plugin-vue-layouts for organizing Vue file layouts. [Vue Router](https://router.vuejs.org/) | [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- 💻 **Enhanced Development Experience**: Benefit from TypeScript's static type checking and the ESLint plugin suite for Vue, ensuring code quality and consistency. [TypeScript](https://www.typescriptlang.org/) | [ESLint Plugin Vue](https://eslint.vuejs.org/)
- ⚡ **Next-Gen Tooling**: Powered by Vite, experience fast cold starts and instant HMR (Hot Module Replacement). [Vite](https://vitejs.dev/)
- 🧩 **Automated Component Importing**: Streamline your workflow with unplugin-vue-components, automatically importing components as you use them. [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- 🛠️ **Strongly-Typed Vue**: Use vue-tsc for type-checking your Vue components, and enjoy a robust development experience. [vue-tsc](https://github.com/johnsoncodehk/volar/tree/master/packages/vue-tsc)

These features are curated to provide a seamless development experience from setup to deployment, ensuring that your Vuetify application is both powerful and maintainable.

## 💡 Usage

This section explains how to start the development server and build your blog for production.

### Starting the Development Server

To launch the development server with hot-reload, run the following command. The server will be available at [http://localhost:8080](http://localhost:8080):

```bash
pnpm dev
```
