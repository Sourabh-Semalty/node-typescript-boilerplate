# Step 1 — Initializing the Project

To get started, create a new folder named `node_project` and move into that directory:

```bash
mkdir node_project
cd node_project
```
Next, initialize it as an npm project:

```bash
npm init -y
```
The -y flag tells npm init to automatically say “yes” to the defaults. You can always update this information later in your package.json file.

# Step 2 — Configuring the TypeScript Compiler

Now that your npm project is initialized, you are ready to install and set up TypeScript.

Run the following command from inside your project directory to install TypeScript:

```bash
npm install --save-dev typescript
```

```bash
Output:

added 1 package, and audited 2 packages in 1s
found 0 vulnerabilities
```

TypeScript uses a file called tsconfig.json to configure the compiler options for a project. Create a tsconfig.json file in the root of the project directory:

```bash
nano tsconfig.json
```

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```
## JSON Configuration for Module Settings

Let's go over some of the keys in the JSON snippet above:

- **module:** Specifies the module code generation method. Node uses commonjs.

- **target:** Specifies the output language level.

- **moduleResolution:** This helps the compiler figure out what an import refers to. The value `node` mimics the Node module resolution mechanism.

- **outDir:** This is the location to output `.js` files after transpilation. In this tutorial, you will save it as `dist`.

