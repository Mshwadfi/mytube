
import './App.css'
import Header from './components/Header';
import Body from './components/Body';
import appStore from './redux/appStore';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WachPage from './components/WachPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children:[
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: '/watch',
        element: <WachPage />
      }
    ]
  }
])
function App() {
  return (
    <Provider store={appStore}>
      <div className="App w-[98%] overflow-y-hidden">
      <Header />
      <RouterProvider router={appRouter}/>

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
