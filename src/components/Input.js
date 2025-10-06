export default function Input({
    type='text',
    value='',
    onChange = () => {},
    placeholder = 'Placeholder',
    className='',
    id = undefined,
    name = undefined,
    disabled = false}) {
        return (
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
                id={id}
                name={name}
                disabled={disabled}
            />
        );
    }