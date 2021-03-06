# Changelog

This document lists breaking changes for each major release.

See the GitHub Releases page for detailed changelogs:
[https://github.com/webpro/release-it/releases](https://github.com/webpro/release-it/releases)

## v10

- Dropped support for Node v6
- Deprecated options from v9 are removed, the `dist.repo` config in particular (also see
  [distribution repository](https://github.com/webpro/release-it#distribution-repository) for alternatives).
- Drop the `--debug` flag. `DEBUG=release-it:* ...` still works.

## v9

There should be no breaking changes, but there have been major internal refactorings and an improved UI. A bunch of new
features and bug fixes have been implemented. Last but not least, the configuration structure is changed significantly.
For this (backwards compatible) change, deprecation warnings are shown, and configurations must be migrated with the
next major release (v10). See [deprecated.json](./conf/deprecated.json) for the changes, mainly:

- All "command hooks" have been moved to `scripts.*`, and some have been renamed.
- All `src.*` options have been moved to `git.*` (and `scripts.*`)
- The `dist.repo` has been removed in v9.8.0

## v8

- Drop the `--force` flag. It's only use was to move a Git tag.

## v7

- No longer adds untracked files to release commit. (#230)

## v6

- Default value for `requireCleanWorkingDir` is now `true` (previously: `false`). (#173)
- Skip prompt (interactive) if corresponding task (non-interactive) is disabled. E.g. `npm.publish: false` will also not
  show "publish" prompt.

## v5

- Drop support for Node v4.

[Release notes for v5](https://github.com/webpro/release-it/releases/tag/5.0.0-beta.0)

## v4

- Use `shell.exec` for build commands by default (previously this required a `!` prefix).

[Release notes for v4](https://github.com/webpro/release-it/releases/tag/4.0.0-rc.0)

## v3

- Configuration filename must be `.release-it.json` (previously `.release.json`).
- Refactored configuration structure in this file (and the CLI arguments with it).

[Release notes for v3](https://github.com/webpro/release-it/releases/tag/3.0.0)

## v2

- Build command is executed before git commit/push.
- Configuration options are better organized. Most of them are backwards compatible with a deprecation notice.

[Release notes for v2](https://github.com/webpro/release-it/releases/tag/2.0.0)

## v1

Initial major release.

[Release notes for v1](https://github.com/webpro/release-it/releases/tag/1.0.0)
