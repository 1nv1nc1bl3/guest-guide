import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
    const token = localStorage.getItem('token');

    if (token) {
        return <Outlet />;
    } else {
        return <Navigate to='/login' />;
    }
}

/*

    const [highScore, setHighScore] = useState(() => {
        const saved = localStorage.getItem('high-score:v1');
        let initialValue;
        if (!saved) return [];
        try {
            initialValue = JSON.parse(saved);
        } catch (error) {
            console.error(error);
            return [];
        }
        return initialValue || [];
    });

*/
