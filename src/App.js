import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Portfolio from './portfolio/Portfolio';

function App() {
	return (
		<BrowserRouter>
			<Portfolio />
		</BrowserRouter>
	)
}

export default App;