# Creating this template

```
git init
rush init
rm .travis.yml
```

Create the this README.md file

```
git add .
git commit -m "chore: initialize rush repo"
```

make your second level folders

```
mkdir tools
mkdir libs
mkdir apps
```

Create a workspace file

The file already has a folder set up for the example app we're going to create

```
{
  "folders": [
    {
      "name": "✨ root",
      "path": "./"
    },
    {
      "name": "🖥️ example app",
      "path": "./apps/example-app"
    }
  ],
  "settings": {
    "files.exclude": {
      "node_modules/": true,
      "libs/": true,
      "tools/": true,
      "apps/": true
    }
  }
}
```

Create a tsconfig.json

```
{
    "compilerOptions": {
        "module": "commonjs",
        "moduleResolution": "node",
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "strict":true,
        "declaration": true,
        "noImplicitAny": true,
        "noImplicitThis": true,
        "noImplicitReturns": true,
        "removeComments": true,
        "target": "es2018",
        "lib": ["es2018"],
        "sourceMap": true,
        "noFallthroughCasesInSwitch": true,
        "skipLibCheck": true
    }
}
```

Fix the rush.json file

change it to JSONC format on the bottom of vscode to allow comments

Enable strictPeerDependencies
Enable preventManualShrinkWrapChanges
Enable ensureConsistentVersions

If you want you can set your github url and defaultBranch

add the app to the projects section

```
    {
      "packageName": "example-app",
      "projectFolder": "apps/example-app",
      "reviewCategory": "apps"
    }
```

### Make a bulk test command for unit testing

`common/config/rush/command-line.json`

add

```
  "commands": [
    {
        "commandKind":"bulk",
        "name":"test",
        "summary":"runs unit tests in each project",
        "enableParallelism": false
    }
```
