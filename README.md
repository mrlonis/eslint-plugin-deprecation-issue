# eslint-plugin-deprecation Issue

## Prerequisites

- Node LTS v16.x.x

## Issue Replication

1. `npm install`
2. `npm run-script lint`
3. Notice Results:
   - The library project [ngx-shared](https://github.com/mrlonis/eslint-plugin-deprecation-issue/tree/master/projects/ngx-shared) linting failed as expected due to deprecated code usage in [ngx-shared.component.ts](https://github.com/mrlonis/eslint-plugin-deprecation-issue/blob/master/projects/ngx-shared/src/lib/ngx-shared.component.ts)
   - The [test-app](https://github.com/mrlonis/eslint-plugin-deprecation-issue/tree/master/projects/test-app) project did not, despite having the same deprecated code usage inside [app.component.ts](https://github.com/mrlonis/eslint-plugin-deprecation-issue/blob/master/projects/test-app/src/app/app.component.ts)
