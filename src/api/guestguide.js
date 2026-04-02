export async function getAppData() {
    const API_BASE = 'https://api.mystayguide.app/wp-json';

    try {
        const res = await fetch(`${API_BASE}/guestguide/v1/app`);
        const data = await res.json();

        console.log('Main App Data:', data);
        return data;
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}
