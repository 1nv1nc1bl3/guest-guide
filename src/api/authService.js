import { useState, useEffect } from 'react';

export function authService() {
    const [login, setLogin] = useState(() => {
        const saved = localStorage.getItem('login:v1');
        let loginToken;
        if (!saved) return [];
        try {
            loginToken = JSON.parse(saved);
        } catch (error) {
            console.error(error);
            return [];
        }
        return loginToken || [];
    });

    useEffect(() => {
        localStorage.setItem('login:v1', JSON.stringify(login));
    }, [login]);

    return { username, password };
}
