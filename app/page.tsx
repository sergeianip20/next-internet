'use client'

import Image from 'next/image'
import firebase from "@firebase/app-compat";
import Button from "@mui/material/Button";
import {db} from './firebase'
import {useState, useEffect} from 'react'
import {getDocs, collection, addDoc, updateDoc, doc, deleteDoc} from "@firebase/firestore";


export default function Home() {
    const [movies, setMovies] = useState([])
    const coll = collection(db, 'movies')
    useEffect(() => {
        const gets = async () => {
            try {

                const data = await getDocs(coll)
                const filterdata = data.docs.map((doc)=> ({...doc.data(), id: doc.id}))
                console.log(filterdata)
            } catch (e) {

            }

        }
        gets()
    }, [])
    const adds = async ()=>{
        await addDoc(coll, {
            title:'1',
            resealeData:2000,
            reseateOscar:false
        })
    }
    const updatetop = async (id:string)=>{
        const movies = doc(db, 'movies' , id)
        await updateDoc(movies, {title:'hello'})
    }
    const deleteDocs = async(id:string)=>{
        const moviess = doc(db, 'movies' , id)
        await deleteDoc(moviess)
    }
    return (
        < form>
            <Button className={'mt-5'}>hello</Button>
        </form>
    )
}
