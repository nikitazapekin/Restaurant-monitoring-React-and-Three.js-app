import React from 'react';
import { ReactNode } from 'react';

import { Link } from 'react-router-dom';

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: false,
		};
	}

	static getDerivedStateFromError() {
		return { error: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error);
		console.log(errorInfo.componentStack);
	}

	render() {
		if (this.state.error) {
			return (
				 <>
					<h1>Произошла ошибка</h1>
					<Link to="/"> На главную</Link>
				 </>
			 
			);
		}

		return this.props.children;
	}
}