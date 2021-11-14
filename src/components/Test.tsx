import './../style/App.css';

type testProp = {
    number : string
}
  
const Test: React.FunctionComponent<testProp> = (testProp : testProp) => {
    return (
      <div className={testProp.number}>
        <p>test1</p>
        <p>test2</p>
        <p>test3</p>
      </div>
    )
}

export default Test;

/*

Named exports - for example export function func() {} is a named export with the name of func. Named modules can be imported using import { exportName } from 'module';. In this case, the name of the import should be the same as the name of the export. To import the func in the example, you'll have to use import { func } from 'module';. There can be multiple named exports in one module.

Default export - is the value that will be imported from the module, if you use the simple import statement import X from 'module'. X is the name that will be given locally to the variable assigned to contain the value, and it doesn't have to be named like the origin export. There can be only one default export.
*/