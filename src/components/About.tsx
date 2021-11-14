import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { RootState } from '../state/reducers';

import { CONSTANTS } from '../constants';
import './../style/App.css';
import './../style/Navigation.css';
import { incrementNumber } from '../state/action-creators';

function App() {
  // pass func of changeTab to search and pass value to coin table
  const state = useSelector((state: RootState) => state.increment)
  const dispatch = useDispatch();

  const { incrementNumber } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="box">
      <body>
        <div className="content grid">
          {CONSTANTS.TEST_WORD}
          <p>State: {state}</p>
          <button onClick={() => incrementNumber()}>Increment</button>
        </div>
      </body>
    </div>
  );
}

export default App;
