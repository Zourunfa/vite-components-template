# eslint-plugin-aflint

test

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-aflint`:

```sh
npm install eslint-plugin-aflint --save-dev
```

## Usage

Add `aflint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "aflint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "aflint/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


