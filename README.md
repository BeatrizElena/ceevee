# Ceevee

The JSON:API server powering Ceevee.

## Prerequisites

- [Node][node]
- [Docker][docker] (local)

## Docker Recommended

Local development using Docker is recommended.  When using Docker, attached
services (such as MongoDB) are managed automatically.  Although working directly
in Node is possible (e.g. in CI), this README assumes Docker.

NPM is used to issue commands to Docker.  In general, appending `container:`
to an NPM command executes it within Docker.

## Installation

To install all modules listed in `package.json`:

```
npm run container:install
```

To install and add packages to `dependencies`:

```
npm run container:install package-name
```

To install and add packages to `devDependencies`:

```
npm run container:install-dev package-name
```

## Linting

Lint ES source with:

```
npm run container:lint:es
```

Check that all dependencies have acceptable licenses:

```
npm run container:lint:licenses
```

Report on on licenses in use:

```
npm run container:lint:licenses:report
```

## Testing

All tests must pass and test coverage must be at least 100% for the test script
to succeed.  Run tests locally:

```
npm run container:test
```

## Contributing

Contributions consistent with the style and quality of existing code are
welcomed.  Be sure to follow the guidelines below.

Check the issues page of this repository for available work.

### Committing

This project follows [a successful git branching model][nvie-git-branching] and
uses [commitizen][commitizen] and
[cz-conventional-changelog][cz-conventional-changelog].  Commitizen helps to
ensure that commit messages remain well-formatted and consistent across
different contributors.

Before committing for the first time, install commitizen:

```
npm install -g commitizen
```

[Watch a helpful video about commitizen][commitizen-video], but follow the
directions here for actual usage within this project.

To start work on a new change, pull the latest `develop` and create
a new _topic branch_ (e.g. `feature-resume-model`, `chore-test-update`,
`bugfix-bad-bug`).  Work should be committed to
[topic branches][nvie-git-branching] only, never directly to mainline branches.
To begin a commit, stage changes as usual:

```
git add .
```

To commit, run the following command (instead of `git commit`) and follow the
directions:

```
npm run commit
```

When committing in this manner, _tests are executed automatically and all tests
must pass before the commit can be finalized_.  If tests fail, please address
the issue(s) and try the commit procedure again.

We recommend making incremental commits at logical stopping points whenever
possible, rather than large monolithic commits at the end of a feature.

### Pull Requests

When a topic branch is ready to merge, submit a pull request from the topic
branch into `develop` via GitHub.  Pull requests are automatically tested in CI
and may only be merged after all checks pass successfully.  At that time,
a core team member may merge the PR into `develop`.

### Issue References

Commit messages and pull requests should
[short link to GitHub issues][issue-autolinking] when referencing information in
the issue; though not every commit or PR related to an issue needs to
reference it.  Commits and PRs that fix or resolve an issue should
[close the issue in the message][issue-closing].


[nvie-git-branching]: http://nvie.com/posts/a-successful-git-branching-model/
[commitizen]: https://www.npmjs.com/package/commitizen
[cz-conventional-changelog]: https://www.npmjs.com/package/cz-conventional-changelog
[commitizen-video]: https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-committing-a-new-feature-with-commitizen
[issue-autolinking]: https://help.github.com/articles/autolinked-references-and-urls/
[issue-closing]: https://help.github.com/articles/closing-issues-using-keywords/
