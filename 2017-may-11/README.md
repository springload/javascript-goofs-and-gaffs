# Minimal examples converting almost every type of React PropTypes to FlowType

## Usage

    yarn install
    yarn build

Then open `./index.html` in your browser.

Next try these 4 scenarios by modifying `./src/index.js`.

### Scenario 1: React PropTypes with valid proptypes (default)

Open up `./src/index.js` and ensure,

1. ...that `import TypedComponent from './component.proptypes';` isn't commented out
2. ...that `// import TypedComponent from './component.flowtype';` is commented out.
3. `<TypedComponent` is passed `{...validProps}`.

Run `yarn build`

Look at the console in your browser and see how there are no errors.

### Scenario 2: PropTypes with invalid proptypes

Open up `./src/index.js` and ensure,

1. ...that `import TypedComponent from './component.proptypes';` isn't commented out
2. ...that `// import TypedComponent from './component.flowtype';` is commented out.
3. `<TypedComponent` is passed `{...invalidProps}`.

Run `yarn build`

Look at the console in your browser and see how there are build errors.

### Scenario 3: FlowType with valid proptypes

Open up `./src/index.js` and ensure,

1. ...that `// import TypedComponent from './component.proptypes';` is commented out
2. ...that `import TypedComponent from './component.flowtype';` isn't commented out.
3. `<TypedComponent` is passed `{...validProps}`.

Run `yarn build`

From the terminal you can see that it is valid, *no need to check your browser!*

### Scenario 4: FlowType with invalid proptypes

Open up `./src/index.js` and ensure,

1. ...that `// import TypedComponent from './component.proptypes';` is commented out
2. ...that `import TypedComponent from './component.flowtype';` isn't commented out.
3. `<TypedComponent` is passed `{...invalidProps}`.

Run `yarn build`

From the terminal you can see that it is invalid, *no need to check your browser!*

## What's the point?

There are two approaches to typing being demonstrated here: runtime type-checking (in browser displayed in the console) and build-time type-checking (at build time displayed in your terminal).

As applications get larger it becomes harder to invoke every possible state of an animation so runtime type-checking can't possibly invoke every possible state of your application.

Having build-time type-checking can alert you to errors earlier.

Further, it seems that React PropTypes are (unofficially for now) being replaced by build-time type-checkers such as FlowType and TypeScript.

## Further reading

Well read the code for starters (`index.js`, `component.proptypes.js`, and `component.flowtype.js`). Note there there are some types that can't be converted.

I like Flow but TypeScript is good too and is far more popular.

* [FlowType](flowtype.org)
* [React Flow](https://flow.org/en/docs/frameworks/react/) other ways of using Flow within React (not just checking props)
* [react-flow-types](https://www.npmjs.com/package/react-flow-types)
* [TypeScript](https://www.typescriptlang.org/)