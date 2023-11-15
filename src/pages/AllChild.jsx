import { NavLink } from "react-router-dom"
import NavTop from "../components/NavTop"
import ChildCard from "../components/ChildCard"
import FloatingActionButton from "../components/FloatingActionButton"
import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function AllChild(){
    let navigate = useNavigate()
   
    const [children, setChildren] = useState([]);
    
   
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

    function detailUser(id){
        navigate("detail/"+id)
    }

    function formatDateStringWithoutTime(dateString) {
        const dateWithoutTime = new Date(dateString);
        dateWithoutTime.setHours(0, 0, 0, 0); // Set time to midnight
        return dateWithoutTime.toISOString().split('T')[0];
    }
    async function getChildren() {
        let url = "http://localhost:3000/child-data/"
        
        try {

            const response = await fetch(url)

            if(!response.ok){
                alert("error")
                return
            }

           const { data } = await response.json()
            console.log(children);
            setChildren(data)

        } catch(error){
            alert("error: " + error.message)
        }
        
    }


    function navigateToCreate() {
        
        navigate("create")
        
    }

     useEffect(() => {
        getChildren()
    },[])



    return (
        <div>
            <NavTop title="Semua Anak"/>
            
            {children.map((child, index) => (
            
                <ChildCard key={index} onClick={() => detailUser(child.child_id)} photo={child.photo == null ? "/assets/dummy.png" : child.photo} name={child.name} date={calculateAge(formatDateStringWithoutTime(child.birth_date))} />
            ))}
            
            <FloatingActionButton click={navigateToCreate}/>
        </div>
    )
}
