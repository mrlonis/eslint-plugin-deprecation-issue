# eslint-plugin-deprecation Issue

## Prerequisites

- Node LTS v16.x.x

## Issue Replication

1. `npm install`
2. `npm run-script lint`
3. Notice the library project `ngx-shared` linting failed as expected but the `test-app` project did not, despite having the same deprecated code usage
