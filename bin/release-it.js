#!/usr/bin/env node

const updater = require('update-notifier');
const pkg = require('../package.json');
const parseArgs = require('yargs-parser');
const release = require('../lib');

const aliases = {
  c: 'config',
  d: 'dry-run',
  h: 'help',
  i: 'increment',
  n: 'non-interactive',
  v: 'version',
  V: 'verbose',
  s: 'non-https',
};

const parseCliArguments = args => {
  const options = parseArgs(args, {
    boolean: ['dry-run', 'non-interactive', 'verbose','non-https'],
    alias: aliases,
    default: {
      'dry-run': false,
      verbose: false,
      'non-https': false,
    },
    configuration: {
      'parse-numbers': false
    }
  });
  options.increment = options._[0] || options.i;
  return options;
};

const options = parseCliArguments([].slice.call(process.argv, 2));

updater({ pkg: pkg }).notify();
release(options).then(() => process.exit(0), () => process.exit(1));
