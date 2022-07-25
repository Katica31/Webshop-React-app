import React from "react";
import './searchStyle.css'
import { useState } from "react";
import {TopList} from '../pages/TopList'



const Searchbar =()=>{

    const [state, setState] = useState("");
    const [srch, setSrch] = useState(true);
    const [info, setInfo] = useState('')

    const Hhchange=(img,name)=>{
        setInfo({img,name})
        setState("")
    }

    return(
        <div className="section">
            <div className="naviga">
                <h2>Shopping</h2>
                <input type="text" 
                placeholder="Search..." 
                className="input"
                onChange={(e)=> setState(e.target.value)}
                />
            </div>
            {srch && <div className="searchholder">
                {TopList.filter((val) =>{
                    if(state==""){
                        return("")
                    }
                    else if(val.type.toLowerCase().includes(state.toLowerCase())){
                        return val
                    }
                }).map((val)=>{
                    return(
                    <p style={{cursor:'pointer'}} onClick ={()=>Hhchange(val.img, val.type) } >{val.type}</p>
                    )
                })
              }
            </div>}
            <div>
              <img src={info.img} className="image" alt=""/>
              <p className="info" >{info.type} </p>

            </div>
        </div>
    )
}

export default Searchbar