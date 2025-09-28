###################################
# Basic configuration
###################################

# For windows compatibility
set windows-shell := ["C:\\Program Files\\Git\\bin\\sh.exe", "-c"]

# Ignore recipe lines beginning with #.
set ignore-comments := true

# Format justfile
just-fmt:
    just --fmt --unstable

###################################
# Update
###################################

# Update dependencies
update:
    bun upgrade
    bun update --latest

###################################
# Formatter and Linter
###################################

# Fmt
fmt:
    # TODO

# Lint
lint:
    # TODO

# Check svelte
check:
    bun run check

###################################
# Run
###################################

# Development server
dev:
    bun --bun vite

###################################
# Dependencies
###################################

# Add package to dependencies
# To remove a package, run `bun remove package`
add package:
    bun add {{ package }}

# Add package to dev dependencies
add-dev package:
    bun add {{ package }} --dev

# Check for outdated packages
outdated:
    bun outdated

# Clean all and reinstall dependencies
clean:
    bun update --latest
    rm -rf node_modules
    rm bun.lock
    bun pm cache rm
    bun i

# Detect unused dependencies
knip:
    bunx knip

###################################
# Build
###################################

# Build
build:
    bun --bun vite build

# Preview
preview:
    bun --bun vite preview
