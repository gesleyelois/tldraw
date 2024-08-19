import { useState } from 'react'
import { Tldraw } from 'tldraw'
import { useSyncDemo } from '@tldraw/sync'
import './App.css'
import Auth from './Auth';

export default function App() {

	const store = useSyncDemo({ roomId: 'myapp-abc123' })

	const [isAuthenticated, setIsAuthenticated] = useState(false);

	if (!isAuthenticated) {
		return <Auth onAuthenticated={setIsAuthenticated} />;
	}

	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw store={store} />
		</div>
	)
}