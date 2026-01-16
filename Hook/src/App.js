import './App.css';
import React from 'react';
// import UseMemoExample from './component/useMemo';
// import UseCallback from './component/useCallback';
// import UseRefExample from './component/useRef';
import { Counter } from './componentredux/counter';




function App() {
  return (
    <div className="App">
      {/* Uncomment one at a time if needed */}
      {/* <UseMemoExample /> */}
      {/* <UseCallback /> */}
      {/* <UseRefExample /> */}

      <Counter></Counter>

    </div>
  );
}
export default App;

