export default function FloatingActionButton({click,className,icon}) {

    return (
        <div>
            <div className="">
                <div className={"floatingActionButton " + className} onClick={click}>
                    { (icon == "food") ? <img src="/assets/eat.png" alt="" /> : <img src="/assets/sleep.png" alt="" />}
                </div>
            </div>
        </div> 
    )
    
}