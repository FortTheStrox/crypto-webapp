import Coin from './Coin';
import './../style/App.css';

type coinObj = {
    number : string,
    coin1 : string,
    coin2 : string
}
  
  // parameters in react are props so thats why the parameter prop is considered an obj
const CoinTable: React.FunctionComponent<coinObj> = (prop : coinObj) => {
    return (
      <div className={prop.number}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <Coin name={prop.coin1} />
            <Coin name={prop.coin2} />
          </tbody>
        </table>
      </div>
    )
}

export default CoinTable;

/*
// Notice here we're using the function declaration with the interface Props
function Heading({ name, color }: Props): React.ReactNode {
  return <h1>My Website Heading</h1>
}

// Notice here we're using the function expression with the type OtherProps
const OtherHeading: React.FC<OtherProps> = ({ name, color }) =>
  <h1>My Website Heading</h1>
*/