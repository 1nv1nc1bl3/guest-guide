export default function WifiPage({ data }) {
    return (
        <div>
            <h2>Wifi Name</h2>
            <p>{data.wifi_name}</p>

            <h2>Wifi Password</h2>
            <p>{data.wifi_password}</p>
        </div>
    );
}
