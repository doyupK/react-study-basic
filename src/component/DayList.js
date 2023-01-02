import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
export default function DayList(){
    const [days, setDays] = useState([])
    const [count, setCount] = useState(0)

    function onclick(){
        setCount(count+1)
    }
    function onclick2(){
        setDays([
            ...days,
            {
                id:Math.random(),
                day:1,
            }
        ])
    }

    useEffect(()=>{
        console.log("count Change")
        //의존성 배열 api 호출 시 useEffect를 사용하려면 '[]'을 넣어준다.
    },[count])

    return (
    <>
        <ul className="list_day">
        {days.map(day => (
        <li key={day.id}>
            <Link to={`/day/${day.day}`} > Day : {day.day}</Link>
        </li>
        ))}
    </ul>
    <button onClick={onclick}>{count}</button>
        <button onClick={onclick2}>Day Change</button>
    </>
    )
}