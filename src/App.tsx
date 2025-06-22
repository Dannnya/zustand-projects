import { OtherComponent } from './OtherComponent';
import { useCounter } from './store';

function App() {

  const { count } = useCounter();
  return (
    <div>
      <h4>Count: {count}</h4>
      <OtherComponent />
    </div>
  )
}

export default App;
