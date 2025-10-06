export default function LoadingSpinner({
    size = "medium",
    className = "",
    color = "currentColor"
}) {
    return (
        <div
            className={`spinner ${size} ${className}`}
            style={{ color }}
        >
            Loading...
        </div>
    );
}