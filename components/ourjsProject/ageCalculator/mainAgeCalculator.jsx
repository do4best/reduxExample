import React, {useState} from 'react';

function MainAgeCalculator() {
    const [age,setAge] = useState(0)
    function getAge(date){
        const today = new Date();
        const birthDate = new Date(date);
        let age = today.getFullYear()   - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    function calculateAge(e){
        e.preventDefault();
        const birthValue = e.value;
        if (birthValue==="") {alert("Please enter your date of birth")
        }
        else{

        const date = new Date(e.target.value)
        setAge(getAge(date))}
    }
    return (
        <>
<div className="flex flex-col justify-center items-center border-2 min-h-[400px] shadow-info gap-3 p-5">
    <h1 className="text-2xl ">Age Calculator</h1>
    <p className="">Enter Your Date of Birth</p>
    <input value={age} type="date" className="input"  onChange={calculateAge}/>
    <button className="btn btn-primary">Calculate</button>
    <p className=""> Result is {age} {10<age?"years":"year"}  </p>
</div>

        </>
    );
}

export default MainAgeCalculator;