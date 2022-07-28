# Welcome to LumApps extension code sample library contributing guide <!-- omit in toc -->

Thank you for investing your time in contributing to our project!

## Philosophy

The philosophy of this repo is to provide code samples for LumApps extensions to share some best practices to fulfill different use cases.

# Table of contents

Here are the guidelines we'd like you to follow.

-   [Code of Conduct](#code-of-conduct)
-   [Found an issue?](#found-an-issue-)
-   [Submission guidelines](#submission-guidelines)
-   [Coding rules](#coding-rules)
-   [Git commit guidelines](#git-commit-guidelines)

## <a name="code-of-conduct"></a> Code of Conduct

As heavy users [React](https://github.com/facebook/react/), we encourage you to read and follow the [React Code of Conduct](https://github.com/facebook/react/blob/master/CODE_OF_CONDUCT.md).

## <a name="found-an-issue-"></a> Found an issue?

If you find a bug in the source code or a mistake in the documentation, you can help us by submitting an issue to our [GitHub Repository](https://github.com/lumapps/lumapps-extension-code-sample/issues). Even better you can submit a Pull Request with a fix.

If you are feeling it, you can even fix the issue yourself and submit a Pull Request.
Before opening a Pull Request, please see the Submission Guidelines below.

## <a name="submission-guidelines"></a> Submission guidelines

### Submitting an issue

Before you submit your issue search the archive, maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue. Help us to maximize the effort by not reporting duplicate issues. Providing the following information will increase the chances of your issue being dealt with quickly:

-   **Motivation for or Use Case** - explain why this is a bug for you
-   **Reproduce the Error** - provide a live example (using [Plunker](http://plnkr.co/edit) or [JSFiddle](http://jsfiddle.net/)) or a unambiguous set of steps.

### Submitting a pull request

Before you submit your pull request consider the following guidelines:

-   Search [GitHub](https://github.com/lumapps/lumapps-extension-code-sample/pulls) for an open or closed Pull Request that relates to your submission. You don't want to duplicate effort.
-   Make your changes in a new git branch

```bash
git fetch && git checkout -b <feat|fix|...>/<descriptive branch name> origin/master
```

-   Create your patch.
-   Follow the [Coding Rules](#rules).
-   Commit your changes using a descriptive commit message that follows the [commit message conventions](#commit-message-format).
-   Check and test your changes locally.

*   Push your branch to GitHub:

```bash
git push origin <full branch name>
```

If we suggest changes to your Pull Request, then:

-   Make the required updates.
-   Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

```bash
git fetch && git rebase origin/master && git push --force-with-lease
```

That's it! Thank you for your contribution!

#### Extension check list

If you are developing in React please make sure to follow this check list:

-   [ ] Create a specific folder for each sample in the corresponding extension category (widget, share-to, ...)
-   [ ] Provide a `README.md` file that explain the purpose of your sample at root level
-   [ ] Provide screenshots if your sample render UI components


#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

-   Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

```bash
git push origin --delete <full branch name>
```

-   Check out the `master` branch:

```bash
git checkout master -f
```

-   Delete the local branch:

```bash
git branch -D <full branch name>
```

-   Update your `master` branch with the latest upstream version:

```bash
git pull --ff-only upstream master
```

## <a name="coding-rules"></a> Coding rules

We're using ES6 JavaScript, TypeScript and [SCSS](http://sass-lang.com/) to develop LumApps extension.

The coding convention is the following:

-   4 spaces for indentation, for JavaScript, TypeScript and SCSS.
-   Wrap all codes at 120 characters.

For JavaScript and TypeScript:

-   Use camel-case.
-   Use the [Allman style](http://en.wikipedia.org/wiki/Indent_style#Allman_style).

All submitted JavaScript code must be properly documented. You _must_ at least document all your functions, methods and members using the JSDoc format.

For SCSS:

-   Except for the line wrap, please refer to [the Harry Roberts css guidelines](http://cssguidelin.es/).
-   For the CSS properties, we follow the [concentric order](http://rhodesmill.org/brandon/2011/concentric-css/)

For the ease of use and contributing, most of the coding styles are enforced with ESLint, TSLint, Prettier and StyleLint. So as long as the pre-commit script let you commit, you should be good.
