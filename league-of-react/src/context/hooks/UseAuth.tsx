import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

export function UseAuth() {
	const context = useContext(AuthContext);
	return context;
}
