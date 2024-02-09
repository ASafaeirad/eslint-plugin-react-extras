# eslint-plugin-react-extras

This ESLint plugin provides additional rules for projects using React and TypeScript, aiming to enhance code quality and maintainability by enforcing best practices and stylistic conventions.

## Description

`eslint-plugin-react-extras` introduces extra linting rules for React and TypeScript projects to catch common mistakes and enforce best practices. This package focuses on improving the developer experience by providing clear and concise feedback on potential issues in your React codebase.

## Installation

You'll need to have ESLint installed. If you haven't installed ESLint yet, you can do it by running:

```console
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-react-extras
```

## Usages

Add `eslint-plugin-react-extras` to the plugins section of your `.eslintrc` configuration file. Then, configure the rules you want to use under the rules section.

```json
{
  "plugins": ["react-extras"],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "react-extras/rule-name": "error"
  }
}
```

## Rules

`disallow-React-componentWithProps`

Examples
🚫 Example of incorrect code for this rule:

```ts
type MyComponentProps = React.PropsWithChildren<{}>;
```

✅ Example of correct code for this rule:

```ts
type MyComponentProps = {
  children: React.ReactNode
};

type MyComponentProps = React.PropsWithChildren;
```
