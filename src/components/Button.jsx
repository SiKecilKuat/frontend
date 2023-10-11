export default function Button({mode,click,placeholder}){
    return(
        <div>
            <button className={mode} onClick={click} >
                {placeholder}
            </button>
        </div>
    )
}