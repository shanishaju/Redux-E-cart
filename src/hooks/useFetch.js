
import { useState , useEffect } from "react"


const useFetch = (url)=>{
    const [data, setData]=useState([])

    useEffect(()=>{

        fetch(url).then((res)=>{

            //unessesoory data remove
            res.json().then((result)=>{
                setData(result)

            })
        }).catch((err)=>{
            console.log((err));
        })
    },[])

    return data
}

export default useFetch