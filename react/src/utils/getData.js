import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const urlApi = 'http://localhost:8080/api/clients/'
export const getdata = () => {
    const [client, setClient] = useState([]);
    const token = useSelector((store) => store.auth.token)
    useEffect ( () => {
        axios.get(`${urlApi}current`,{
            headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {setClient(response.data)})
        .catch((err) => {console.error(err)});
    
    }, []);
    return client;
}

