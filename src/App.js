import './App.css';
// import 'dotenv/config';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Modifier from './containers/Modifier';
import Main from './containers/Main';

function App() {
  return (
    <div className="App">

			<BrowserRouter>

				<Routes>

					<Route path='/' element={<Main />} />
					<Route path='/modifier' element={<Modifier />} />

				</Routes>

			</BrowserRouter>


    </div>
  );
}

export default App;
