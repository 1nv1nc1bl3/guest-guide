const API_BASE = 'http://guestguide-cms.local/wp-json';

export async function getAppData() {
    try {
        const res = await fetch(`${API_BASE}/guestguide/v1/app`);
        const data = await res.json();

        console.log('Main App Data:', data);
        return data;
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}
