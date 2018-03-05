# Stacklike frontend

[![CircleCI](https://circleci.com/gh/rybex/stacklike-frontend/tree/master.svg?style=svg)](https://circleci.com/gh/rybex/stacklike-frontend/tree/master)
## Development

Install the `npm` packages described in the `package.json`:

    npm install

Run `webpack` server:

    npm run dev

Application should work on http://localhost:8080/. It will try to connect to API
service at http://localhost:3000

## Testing

To run tests, execute:

    npm run test

## Heroku

The environments are accessible as:

- `PRODUCTION`: https://stacklike-frontend.herokuapp.com/
