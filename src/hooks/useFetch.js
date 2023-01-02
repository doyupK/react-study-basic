import {useEffect, useState} from "react";

export default function useFetch(url){
    const [data, setData] = useState([]);

    useEffect(()=> {
        //api 비동기호출
        fetch(url) // promise 반환됨
            .then(res => {
                // console.log(res)
                return res.json()
            })
            .then(data => {
                // console.log(data)
                setData(data)
            })
    }, [url]);

    return data;


}