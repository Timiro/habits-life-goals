export default function Checkbox({
    checked = false,
    onChange = () => {},
    label = '',
    className = '',
    disabled = false
}) {
    return (
        <select 
            checked = {checked}
            onChange = {onChange}
            label = {label}
            className = {className}
            disabled = {disabled}
        />
    );
}