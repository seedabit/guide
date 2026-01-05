#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

const COMMIT_MSG_FILE = process.argv[2]
if (!COMMIT_MSG_FILE) {
    console.error("No commit message file supplied.")
    process.exit(1)
}

let commitMsg = ""
try {
    commitMsg = fs.readFileSync(COMMIT_MSG_FILE, "utf8").trim()
} catch (err) {
    console.error("Could not read commit message file:", err.message)
    process.exit(1)
}

const { execSync } = require("child_process")

try {
    execSync("npm run lint", { stdio: "inherit" })
} catch (err) {
    console.error("Lint failed. Commit aborted.")
    process.exit(1)
}

const regex =
    /^(feat|fix|docs|style|refactor|test|chore|build|ci|perf|revert)(\([a-zA-Z0-9._-]+\))?!?:\s.+$/

// Validate only the commit message title (first line) so release notes
// or longer commit bodies won't fail the Conventional Commits check.
const commitTitle = commitMsg.split('\n')[0].trim()

if (!regex.test(commitTitle)) {
    console.error(
        "ERROR: Commit message does not follow Conventional Commits format."
    )
    console.error()
    console.error("The correct format for the commit message is mandatory:")
    console.error("  <type>(<optional scope>)?: <description>")
    console.error()
    console.error("Valid types:")
    console.error("  feat:     new feature")
    console.error("  fix:      bug or code error fix")
    console.error("  docs:     documentation changes")
    console.error("  style:    code style changes (spaces, formatting, etc.)")
    console.error(
        "  refactor: code refactoring without adding new features or fixing bugs"
    )
    console.error("  test:     adding tests or updating existing tests")
    console.error("  chore:    build tools, libraries, etc. changes")
    console.error("  build:    changes in the build system or dependencies")
    console.error("  ci:       changes in the CI configuration or scripts")
    console.error("  perf:     performance improvements/changes")
    console.error("  revert:   reverts a previous commit")
    console.error()
    console.error("Exemplos:")
    console.error("  feat(auth): added login feature")
    console.error("  fix(api)!: solved timeout bug")
    console.error("  docs(readme): updated installation instructions")
    console.error()
    process.exit(1)
}

process.exit(0)
