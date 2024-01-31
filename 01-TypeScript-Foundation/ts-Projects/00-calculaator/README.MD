# PIAIC WMD BATCH 52

00-Project Calculator

## Commands to be run before calculator's coding

01. nodejs must be installed before run the following commands. Use node LTS version
02. npm init -y (It will create package.json file)
03. npm install @types/node
04. npm install typescript
05. tsc --init (It will create tsconfig.json file)
06. tsc -w (Starting compilation in watch mode...)
07. npm install inquirer (download and documentation link <https://www.npmjs.com/package/inquirer>)
08. npm install @types/inquirer OR npm install --save inquirer
09. npm install chalk (download link and documentation <https://www.npmjs.com/package/chalk>)
10. npm install ts-node

OR

npm install typescript inquirer chalk @types/inquirer @types/chalk ts-node

## tsconfig.json changes

"target": "ES2022",                     /*Set the JavaScript language version for emitted JavaScript and include compatible library declarations.*/
"module": "NodeNext",                   /*Specify what module code is generated.*/
"moduleResolution": "NodeNext",         /*Specify how TypeScript looks up a file from a given module specifier.*/

## Add in package.json

"type": "module",

## To solve the chalk problems

1. **Create a `decs.d.ts` file in the root of your project and declare the module**: This can help TypeScript recognize the module. You can do this by creating a new file named `decs.d.ts` in your project's root directory and adding the following line to it¹:

    ```typescript
    declare module 'chalk';
    ```

2. **Restart the TypeScript server**: If you're using an IDE like Visual Studio Code, you can try restarting the TypeScript server. This can often resolve issues where the IDE isn't correctly recognizing installed modules¹.

3. **Re-install your dependencies**: Sometimes, deleting the `node_modules` folder and re-installing all dependencies can help. You can do this by running the following commands in your terminal¹:

    ```bash
    rm -rf node_modules
    npm install
    ```
