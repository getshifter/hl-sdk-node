# Shifter Headless API SDK (beta)

```bash
npm install --save @shifter/headless-sdk
```

## Usage

### Directory set authorization token

If you integrated by OAuth2, we can use the authorization token.

#### TypeScript

```typescript
import {Shifter} from '@shifter/headless-sdk'
const shifter = new Shifter({
   token: "SHIFTER_AUTH_TOKEN"
})
shifter.sites.lists()
 .then(data => console.log(data))
```

#### JavaScript

```javascript
const {Shifter} = require('@shifter/headless-sdk')

const shifter = new Shifter({
   token: "SHIFTER_AUTH_TOKEN"
})
shifter.sites.lists()
 .then(data => console.log(data))
```

### Setup with username/password auth

We can directory setup the client with username and password.

#### TypeScript

```typescript
import {Shifter} from '@shifter/headless-sdk'
const shifter = await Shifter.setupWithLogin('USERNAME', 'PASSWORD')

shifter.sites.lists()
 .then(data => console.log(data))
```

#### JavaScript

```javascript
const {Shifter} = require('@shifter/headless-sdk')

Shifter.setupWithLogin('USERNAME', 'PASSWORD')
.then(shifter => {
    shifter.sites.list()
        .then(data => {
            console.log(data)
        }).catch(e => {
            console.log(e)
        })
})
```

## Development

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

### Local Development

Below is a list of commands you will probably find useful.

#### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

#### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

#### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
