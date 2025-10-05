export default function Toggle({
    checked = false,
    onChange = () => {},
    label = "",
    className = "",
    disabled = false
}) {
    return (
        <label className={className}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            {label}
        </label>
    );
}