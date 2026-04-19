# Beginner TypeScript Project

This project is a simple place to learn TypeScript from the beginning.

## Files

- `lesson1.ts` is your first TypeScript lesson file.
- `lesson2.ts` teaches arrays and objects.
- `package.json` lists the project settings and run commands.
- `tsconfig.json` tells TypeScript how to compile your code.
- `.vscode/launch.json` lets VS Code run and debug your file.
- `.vscode/tasks.json` gives VS Code a build task.

## First Steps

Install Node.js first. After that, open a terminal in this folder and run:

```bash
npm install
```

This installs TypeScript and `ts-node`.

## Run The Lesson

```bash
npm run dev
```

That command currently runs `lesson1.ts`.
To run the second lesson, use:

```bash
npx ts-node lesson2.ts
```

## Build The Code

```bash
npm run build
```

The compiled JavaScript will go into the `dist` folder.

## Debug In VS Code

Open `lesson1.ts` or `lesson2.ts`, then press `F5`.
