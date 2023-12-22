# Starter Kit for [Building Application in React and Redux](https://github.com/salmen123/courses-app-ReactJS) on GitHub

## Get Started

1. **Install [Node](https://nodejs.org)**.
2. **Navigate to this project's root directory on the command line.**
3. **Install Node Packages.** - `npm install`
4. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies

| **Dependency**              | **Use**                                                                                                                                                 |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| @testing-library/jest-dom   | Custom jest matchers to test the state of the DOM                                                                                                       |
| @testing-library/react      | Simple and complete React DOM testing utilities that encourage good testing practices                                                                   |
| @testing-library/user-event | Fire events the same way the user does                                                                                                                  |
| react                       | React is a JavaScript library for creating user interfaces                                                                                              |
| react-dom                   | This package serves as the entry point to the DOM and server renderers for React                                                                        |
| react-scripts               | This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app)                                |
| web-vitals                  | The web-vitals library is a tiny (~1K), modular library for measuring all the [Web Vitals](https://web.dev/articles/vitals?hl=fr) metrics on real users |
