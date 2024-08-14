import { Tldraw } from 'tldraw'
import { useSyncDemo } from '@tldraw/sync'
import './App.css'

export default function App() {
  const store = useSyncDemo({ roomId: 'myapp-abc123' })

	return (
		<div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw store={store} />
		</div>
	)
}