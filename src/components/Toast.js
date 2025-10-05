export default function Toast({
    message = "",
    type = "info",
    duration = 3000,
    onClose = () => {},
    className = ""
}) {
    // Skeleton: no auto-dismiss logic yet
    return (
        <div className={`toast ${type} ${className}`}>
            <span>{message}</span>
            <button onClick={onClose}>X</button>
        </div>
    );
}