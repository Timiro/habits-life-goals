export default function Modal({
    isOpen = false,
    onClose = () => {},
    title = "",
    children = null,
    className = ""
}) {
    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${className}`}>
            <div className="modal-content">
                {title && <h2>{title}</h2>}
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}