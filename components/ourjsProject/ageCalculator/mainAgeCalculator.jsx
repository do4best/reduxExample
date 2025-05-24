import React, {useState} from 'react';

function MainAgeCalculator(props) {
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
        if (e.target.value === "") {alert("Please enter your date of birth")}
        else{

        const date = new Date(e.target.value)
        setAge(getAge(date))}
    }
    return (
        <>
<div className="flex flex-col justify-center items-center border-2 shadow-info gap-3 p-5">
    <h1 className="text-2xl ">Age Calculator</h1>
    <p className="">Enter Your Date of Birth</p>
    <input type="date" className="input"  onChange={calculateAge}/>
    <button className="btn btn-primary">Calculate</button>
    <p className=""> Result is {age}  </p>
</div>

        </>
    );
}

export default MainAgeCalculator;