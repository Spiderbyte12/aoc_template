# Advent of Code runner

## Getting Started

Install node 20+

Enable corepack:
`corepack enable`

Optional Set package manager to Yarn (should be the default via corepack for this repo)

```
corepack install yarn@4.11
corepack use yarn@4.11
```

Install dependencies

```
yarn
```

Then you can run the project with `yarn day n` (eg `yarn day 1`)

You can run the tests in watch mode with `yarn test`

## Setting up a puzzle

Copy the input into res\input\dayn.txt (eg. `res\input\day1.txt`)

Create a folder under src dayn containing dayn.ts and dayn.test.ts

Update the entrypoint in index.ts to point to the entry function for you new file.
