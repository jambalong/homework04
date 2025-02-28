# ESLint Homework

This project is an ESLint configuration that fixes all the issues with the existing source that was provided.

## Criteria

- Uses a template as a starting point (ESLint Recommended)
- Add rules to override the template as desired
- Put a script in package.json to run eslint

## Instructions

1. Clone the repository

```bash
git clone https://github.com/jambalong/homework04
```

2. Install dependencies

```bash
npm install
```

3. Run ESLint script

```bash
npm run lint
```

or

```bash
npm run lint:fix
```

## Notes

For security updates, run:

```bash
npm audit fix
```

## Output

Running `npm run lint` will have passing results due to `npm run lint:fix` fixing any auto-fixable errors and other errors were manually fixed following the lint.
