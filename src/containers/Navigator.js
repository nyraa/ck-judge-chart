import "./Navigator.css";

function Navigator({arg_lastUpdate}) {
    return (
        <nav className="nav-bar">
            <span>
                {arg_lastUpdate
                ? <>Last update: {arg_lastUpdate.toLocaleString()}</>
                : "Loading"}
            </span>
        </nav>
    );
}
export default Navigator;