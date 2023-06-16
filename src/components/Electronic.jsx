import { useState } from "react"
import "./Electronic.css"

export default function Electronic(props) {
    const [warna,SetWarna]=useState("whitesmoke");
    const [dua,SetDua]=useState("whitesmoke");
    const [nama,SetNama]=useState("Suka");
    const [deskripsi,SetDeskripsi]=useState(" ");
    const [hrg,SetHrg]=useState(" ");

    function klik (){
        if(warna === "whitesmoke"){
            SetWarna("skyblue")
            SetNama("Batal Suka")
        }else{
            SetWarna("whitesmoke")
            SetNama("Suka")
        }
    }

    function selengkapnya(){
        if(deskripsi === " "){
            SetDeskripsi(props.deskripsi)
            SetDua("skyblue")
            SetHrg(props.harga)
        }else{
            SetDeskripsi(" ")
            SetDua("whitesmoke")
            SetHrg(" ")
        }
    }

    return (
    <div className="container">
        <h1>{props.nama}</h1>
        <img src={props.gambar} alt="" className="gambar" />
        <p style={{height:10}}>{deskripsi}</p>
        <h5>{hrg}</h5>
        <div>
            <button onClick={klik} style={{backgroundColor : warna}}>{nama}</button>
            <button onClick={selengkapnya} style={{backgroundColor:dua}}>Selengkapnya</button>
        </div>
    </div>
  )
}
