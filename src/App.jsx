import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';

// layout
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			{/* <Route path='/' element={<Home />} /> */}
			<Route index element={<Home />} />
			<Route path='/about' element={<About />} />

		</Route>
	)
);

function App() {

	return (
		<>

			<RouterProvider router={router} />
		</>
	);
};

export default App;
