import { useState } from "react";
import style from "./signin.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signin=()=>{

    let goto=useNavigate()

    let signup=()=>{
        goto('/signup')
    }

    let [username,setusername]=useState("")
    let [password,setpassword]=useState("")

    let usernamedata=(e)=>{
        setusername(e.target.value)
    }
    let passworddata=(e)=>{
        setpassword(e.target.value)
    }
    let submitform=(e)=>{
        e.preventDefault()
        let data={username,password}
        // console.log(data)
        axios.post('http://localhost:4000/login',data)
        .then((resp)=>{
            if(resp.data.status == 200){
                alert(resp.data.message)
                goto('/home')
            }else{
                alert(resp.data.message)
            }
        })
    }

    return(
        <section className={style.background} >
            <section className={style.main}>
                <div className={style.inup}>
                    <h1 className={style.in}>SIGN IN</h1>
                    <h1 className={style.up} onClick={signup}>SIGN UP</h1>
                </div>
                <div className={style.input}>
                    <h6><label htmlFor="">USERNAME</label></h6>
                    <input type="text" value={username}  onChange={usernamedata}/>
                    <h6><label htmlFor="">PASSWORD</label></h6>
                    <input type="password" name="" id="" value={password} onChange={passworddata}/>
                <div className={style.checkbox}>
                    <input type="checkbox" name="" id="" />
                    <label>Keep me Signed </label>
                </div>
                </div>
                <div className={style.btn}>
                <button onClick={submitform}>SIGN IN</button>
                </div>
                <hr />
                <div className={style.forgot}><a href="">Forgot Password?</a></div>
            </section>

        </section>
    )
}
export default Signin;
