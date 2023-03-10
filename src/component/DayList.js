import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";

export default function DayList() {

    //custom hook
    const days = useFetch("http://localhost:3001/days");
    // const [days, setDays] = useState([])


    // useEffect(() => {
    //     //api 비동기호출
    //     fetch('http://localhost:3001/days') // promise 반환됨
    //         .then(res => {
    //             console.log(res)
    //             return res.json()
    //         })
    //         .then(data => {
    //             console.log(data)
    //             setDays(data)
    //         })
    // }, [])

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}> Day : {day.day}</Link>
                </li>
            ))}
        </ul>
    )
}