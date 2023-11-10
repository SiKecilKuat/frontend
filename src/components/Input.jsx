export default function Input({onChange,name,placeholder,type="text"}){
    return (
        <div>

        <input
            onChange={onChange}
            name={name}
            id={name}
            className="input-text"
            type={type}
            placeholder={placeholder}
            />
            </div>
    )
}