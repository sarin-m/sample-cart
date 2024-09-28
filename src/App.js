
import './App.css';
import Items from './Items';
import store from './store';
import Cart from './Cart';

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='Header'style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <h2 style={{ margin: '0' }}>Shopping Cart</h2>
          <div style={{ position: 'absolute', right: '0' }}>
            <Cart/>
          </div>
        </div>
        <Items/>
      </div>
    </Provider>
  );
}

export default App;
