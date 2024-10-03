import './App.css'
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginPage from './GoogleLoginPage';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Dashboard from './Dashboard';
import { useState } from 'react';
import RefrshHandler from './RefreshHandler';
import NotFound from './NotFound';
function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

  // added as we were getting an error while adding googleauth in loginpage.jsx
  // make sure the funciton name starts with a capital letter while rendering react components
	const GoogleWrapper = ()=>(
		<GoogleOAuthProvider clientId={import.meta.env.VITE_KEY}>
			<GoogleLoginPage></GoogleLoginPage>
		</GoogleOAuthProvider>
	)
	const PrivateRoute = ({ element }) => {
		return isAuthenticated ? element : <Navigate to="/login" />
	}
	return (
		<BrowserRouter>
		    <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
			<Routes>
				<Route path="/login" element={<GoogleWrapper />} />
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path='/dashboard' element={<PrivateRoute element={<Dashboard/>}/>}/>
				<Route path="*" element={<NotFound/>} />
			</Routes>
	</BrowserRouter>
	);
}

export default App
