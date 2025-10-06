export default function RadioGroup({
    options = [],
    value = '',
    onChange = () => {},
    name = '',
    className = ''
}) {
    return (
        <div className={className}>
            {options.map((option) => (
                <label key={option.value}>
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={value === option.value}
                        onChange={onChange}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
}