# Getting Started
```
git clone https://github.com/setlife-network/setbounty.git
cd setbounty
yarn install
```

Make sure you have Docker installed to run the database locally.

# Project Architecture

There are three packages within this monorepo

1. **api** - All backend functionality
2. **chrome** - Chrome extension
3. **tools** - Developer tools which can be used by both `api` and `chrome`

# Usage

## Development

If this is your first time running the project, run the following commands to build a local version of the database.

```
cd api
docker-compuse up -d
```

To run the API
```
cd api
yarn dev
```

Rudimentary authentication process
1. Go to [this link](https://github.com/login/oauth/authorize?client_id=249f628624647c891f18&scope=repo%20read:user%20user:email&redirect_uri=http://localhost:4000/graphql)
2. Copy the code from the url `http://localhost:4000/graphql?code={YOUR_CODE}`
3. Run the following mutation in the GraphQLPlayground in your browser
```graphql
mutation {
    authenticate(code: $YOUR_CODE) {
        token
        user {
            id
            username
            name
        }
    }
}
```

<!-- Alternatively you can run `yarn build` or `yarn dev` at the root level -->

### Tooling

Lerna scripts will run an npm script in each package that contains that script ie. `lerna build` will run a build script for the api and chrome extension all at once.

Lerna can either be run globally `lerna <comand>` or locally `npx lerna <command>`

See [Lerna Docs](https://github.com/lerna/lerna/blob/master/README.md) for more info.

### Installing Dependencies

Dependencies should be installed at the package level only. Install devDependencies like webpack, babel, eslint, etc. to the `tools` package.

Use the following commands to easily install package-specific node modules without changing folders all the time
```
# Install module-1 to api
lerna add module-1 --scope=api

# Install module-1 to chrome in devDependencies
lerna add module-1 --scope=chrome --dev

# Make tools package a dependency of api
lerna add tools --scope=api

# Install babel-core in all modules
lerna add babel-core
```

## Production

Test edit delete later