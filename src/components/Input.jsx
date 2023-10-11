export default function Input({name,placeholder,type="text"}){
    return (
        <div>

        <input
            name={name}
            id={name}
            className="input-text"
            type={type}
            placeholder={placeholder}
            />
            </div>
    )
}