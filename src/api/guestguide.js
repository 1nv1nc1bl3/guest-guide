export async function getAppData() {
    const API_BASE = 'https://api.mystayguide.app/wp-json';
    const token = localStorage.getItem('token');

    try {
        const res = await fetch(`${API_BASE}/guestguide/v1/app`, {
            headers: token
                ? {
                      Authorization: `Bearer ${token}`,
                  }
                : {},
        });

        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}
