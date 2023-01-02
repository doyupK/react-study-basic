import { useParams} from "react-router-dom";
import Word from "./Word";
import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";

export default function Day(){
    const {day} = useParams();
    // const wordList = dummy.words.filter(word => (
    //     word.day === day
    // ))
    // const [words, setWords] = useState([]);

    // useEffect(()=> {
    //     //api 비동기호출
    //     fetch(`http://localhost:3001/words?day=${day}`) // promise 반환됨
    //         .then(res => {
    //             console.log(res)
    //             return res.json()
    //         })
    //         .then(data => {
    //             console.log(data)
    //             setWords(data)
    //         })
    // }, [day])

    //custom hook
    const words = useFetch(`http://localhost:3001/words?day=${day}`)

    return <>
    <h2>Day {day}</h2>
    <table>
        <tbody>
        {words.map(word=>(
            <Word word={word} key={word.id}></Word>
            ))}
        </tbody>
    </table>
    </>
}