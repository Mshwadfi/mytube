
import './App.css'
import Header from './components/Header';
import Body from './components/Body';
import appStore from './redux/appStore';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
      <Header />
      <Body />

      {
      /*
      -head
      -body
       -sidebar
        -menuItems
       -mainContainer
        -customButtons
        -videoContainer
          -videoCard 
       */
    }
    </div>
    </Provider>
   
  );
}

export default App;
