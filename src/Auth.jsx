import { useState, useEffect } from 'react'
import './Auth.css';

export default function Auth({ onAuthenticated }) {
	const [codeInput, setCodeInput] = useState('');

	const authCode = import.meta.env.VITE_AUTH_CODE;

	useEffect(() => {
		const savedAuth = sessionStorage.getItem('isAuthenticated');
		if (savedAuth === 'true') {
			onAuthenticated(true);
		}
	}, [onAuthenticated]);

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			if (codeInput === authCode) {
				sessionStorage.setItem('isAuthenticated', 'true');
				onAuthenticated(true);
			} else {
				alert('Oops, wrong code!');
			}
		}
	};

	return (
		<div className="auth-container">
			<div>
				<h2>&lt;Tldraw /&gt;</h2>
				<input
					type="password"
					placeholder="enter the code"
					value={codeInput}
					onChange={(e) => setCodeInput(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
			</div>
		</div>
	);
}