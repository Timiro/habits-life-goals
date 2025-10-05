export default function Select({
    options = [],
    value = '',
    onChange = () => {},
    placeholder = 'Placeholder',
    className ='',
    disabled = false
}) {
    return (
        <select
            options = {options}
            value = {value}
            onChange = {onChange}
            placeholder = {placeholder}
            className = {className}
            disabled = {disabled}
        />
    );
}