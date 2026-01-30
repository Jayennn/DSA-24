# Algorithm Project

A TypeScript algorithm project with comprehensive testing and CI/CD pipeline.

## Project Structure

```
src/
├── index.ts
└── linked-list/
    ├── node.ts          # Node class for linked list
    ├── linked-list.ts   # LinkedList implementation
    └── node.test.ts     # Unit tests for Node class
```

## Testing

The project uses Bun's built-in test runner with comprehensive unit tests.

### Running Tests

```bash
bun test
```

### Test Coverage

- **Node Class Tests** (`src/linked-list/node.test.ts`):
  - Creating nodes with data
  - Initializing next pointer as null
  - Linking nodes together
  - Working with different data types (string, number, objects)
  - Creating chains of nodes

## Development

### Running the Project

```bash
bun run dev
```

### Installing Dependencies

```bash
bun install
```

## CI/CD Pipeline

The project uses **GitHub Actions** for continuous integration and deployment.

### Workflow File

Location: `.github/workflows/ci.yml`

### Pipeline Stages

1. **Test Stage**
   - Checks out code
   - Installs Bun runtime
   - Installs dependencies
   - Runs all tests with `bun test`
   - Attempts linting (if configured)

2. **Build Stage** (runs after tests pass)
   - Checks out code
   - Installs Bun runtime
   - Installs dependencies
   - Verifies build integrity

### Triggering the Pipeline

The pipeline automatically runs on:

- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

### Viewing Pipeline Results

Visit the **Actions** tab in your GitHub repository to view:

- Test results
- Build status
- Pipeline logs
- Failed runs details

## Configuration

### TypeScript Configuration

- Target: ESNext
- Strict mode: Enabled
- Module resolution: Bundler

### Package Manager

- **Bun** - Fast JavaScript runtime and package manager

## Next Steps

1. Push this project to GitHub
2. The CI/CD pipeline will automatically run on every push
3. View results in the Actions tab
4. Add more tests as you implement LinkedList class
5. Extend the pipeline with deployment stages if needed

## Status

All tests passing ✓
