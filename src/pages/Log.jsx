import NavTop from "../components/NavTop"
import Input from "../components/Input"
import CardLog from "../components/CardLog"
import FloatingActionButton from "../components/FloatingActionButton"
import CustomPopup from "../components/CustomPopup"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Log(){
    const [visibilityEat, setVisibilityEat] = useState(false);
    const [visibilitySleep, setVisibilitySleep] = useState(false);

    const { id } = useParams();
    let [foodItem,setFoodItem] = useState("")
    let [calories,setCalories] = useState("")
    let [mealType,setMealType] = useState("lunch")
    let [name,setName] = useState("")
    let [dates,setDates] = useState([])
    let [gender,setGender] = useState("")
    let [dateOfBirth,setDateOfBirth] = useState("2002/09/2")
    let [logs,setLogs] = useState([])
    let [date,setDate] = useState(new Date())
    let [array,setArray] = useState([])
    const [rerender, setRerender] = useState(false);

    const popupCloseHandler = (e) => {
        setVisibilityEat(e);
        setVisibilitySleep(e);
    };
    
    function formatDateStringWithoutTime(dateString) {
        const dateWithoutTime = new Date(dateString);
        dateWithoutTime.setHours(0, 0, 0, 0); // Set time to midnight
        return dateWithoutTime.toISOString().split('T')[0];
    }

    function calculateAge(dateOfBirth) {
        const birthDate = new Date(dateOfBirth);
        const currentDate = new Date();

        const differenceInMilliseconds = currentDate - birthDate;

        const years = Math.floor(differenceInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

        const remainingMilliseconds = differenceInMilliseconds - years * (365.25 * 24 * 60 * 60 * 1000);

        const months = Math.floor(remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000));

        const remainingMillisecondsAfterMonths = remainingMilliseconds - months * (30.44 * 24 * 60 * 60 * 1000);

        const days = Math.floor(remainingMillisecondsAfterMonths / (24 * 60 * 60 * 1000));

        const ageString = `${years} Tahun ${months} Bulan ${days} Hari`;

        return ageString;
        }

    async function getChild() {
        const response = await fetch("http://localhost:3000/child-data/"+id)

        if(!response.ok){
        alert("kesalahan server")
        return
        }

        const { data } = await response.json()
            
        setName(data.name)
        setDateOfBirth(data.birth_date)
        setGender(data.gender)

   
    }
    
    async function getLogs() {
        try {
        const response = await fetch("http://localhost:3000/child-data/"+id+"/food-intake-logs")
            if(!response.ok){
                // alert("error")
                return
            }

           const { data } = await response.json()
            setLogs(data)

            for (let index = 0; index < logs.length; index++) {
                if(array.indexOf(logs[index].dtcreated.split("T")[0]) === -1) {
                    setArray((prev) => [...prev,logs[index].dtcreated.split("T")[0]])       
                }
        }

        } catch(error){
            // alert("error: " + error.message)
        }

        
   
    }
    
    async function addMakanan(){
        const response = await fetch("http://localhost:3000/child-data/"+id+"/food-intake-logs",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                "mealType": mealType,
                "foodItem": foodItem,
                "calories": Number(calories)
            })
        })
        
        if (!response.ok){
            alert("kesalahan server")
            return
        }
        
        getLogs()
        setMealType("")
        setFoodItem("")
        setCalories("")
        popupCloseHandler()
    }

    async function addSleepLog(){
        const response = await fetch("http://localhost:3000/child-data/"+id+"/food-intake-logs",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                "mealType": mealType,
                "foodItem": foodItem,
                "calories": Number(calories)
            })
        })
        
        if (!response.ok){
            alert("kesalahan server")
            return
        }
        
        getLogs()
        setMealType("")
        setFoodItem("")
        setCalories("")
        popupCloseHandler()
    }

    

       


    useEffect(() => {
         fetch("http://localhost:3000/child-data/"+id)
        .then(response => response.json())
        .then(result => {

            let {data}  = result 
            
            setName(data.name)
            setDateOfBirth(data.birth_date)
            setGender(data.gender)
            
            setRerender(!rerender)
        })
        .catch(error => console.error("Error fetching food intake logs:", error));

        getLogs()
    },[])

    return (
        <div>
            <NavTop title="Log Harian"/>

            <div className="subheader-log">
                <img src="/assets/dummy.png" width="55px" height="55px" alt="" />

                <div className="subheader-content">
                    <h3 className="subheader-title">{name}</h3>
                    <p className="subheader-subtitle">{calculateAge(formatDateStringWithoutTime(dateOfBirth))}</p>
                </div>
            </div>
            
            {
                logs.map((value,index) => {

                    return  <CardLog date={value.dtcreated} logs={logs}/>
                })
            }

            
            <CustomPopup
                onClose={popupCloseHandler}
                show={visibilityEat}
                title="Makanan"
            >
                <input className="input" placeholder="nama makanan" type="text" name="foodItem" id="jenis_makanan" onChange={(e) => setFoodItem(e.target.value)} value={foodItem} />

                <br />
                <input className="input" type="text" placeholder="jumlah" name="calories" id="porsi" onChange={(e)=>setCalories(e.target.value)} value={calories}/>
                
                <br />
                <select className="select" id="input" value={mealType} onChange={(e) => setMealType(e.target.value)}>
                    <option value="breakfest">Breakfest</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>

<br />
                <button className="input bg-main" onClick={() => addMakanan()}>+ Makanan</button>
            </CustomPopup> 
           
            <CustomPopup
                onClose={popupCloseHandler}
                show={visibilitySleep}
                title="Tidur"
            >
                <br />
                <input className="input" type="datetime-local" placeholder="Waktu Mulai" />
             
               
                <br />
                <input className="input" type="datetime-local" placeholder="Waktu Bangun" />
             
                <button className="input bg-main">+ Tidur</button>

            </CustomPopup> 


            <FloatingActionButton icon={"food"} click={() => setVisibilityEat(true)}/>
            <FloatingActionButton icon={"eat"} className={"second"} click={() => setVisibilitySleep(true)}/>
        </div>
    )
}
