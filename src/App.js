import Account from './Pages/Account';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';


function App() {
  return (
    <>

      <BrowserRouter>
  
        <Routes>
          <Route path='/*' element={<Home />}>  </Route>
          <Route path='/account' element={<Account />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
