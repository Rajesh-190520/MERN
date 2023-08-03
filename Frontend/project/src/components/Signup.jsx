import { useNavigate } from "react-router-dom";
import style from "./signup.module.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Signup=()=>{
    let goto=useNavigate()
    let signin=()=>{
        goto('/')
    }
    let [firstName,setfirstName]=useState("")
    let [lastName,setlastName]=useState("")
    let [email,setemail]=useState("")
    let [password,setpassword]=useState("")
    let [confirmPassword,setconfirmpassword]=useState("")

    let fnamedata=(e)=>{
        setfirstName(e.target.value)
    }
    let lnamedata=(e)=>{
        setlastName(e.target.value)
    }
    let emaildata=(e)=>{
        setemail(e.target.value)
    }
    let passworddata=(e)=>{
        setpassword(e.target.value)
    }
    let confirmpassworddata=(e)=>{
        setconfirmpassword(e.target.value)
    }
    let submitform=(e)=>{
        e.preventDefault()
        let data={firstName,lastName,email,password,confirmPassword};
        // console.log(data);
        if(firstName && lastName && email && (password == confirmPassword)){
            axios.post('http://localhost:4000/register',data)
            .then((res)=>{
                alert(res.data.message)
                goto('/')
            })
        }else{
            alert('invalid Credentials')
        }
    }
    return(
        <div>
        <section className={style.background} >
            <section className={style.main}>
                <div className={style.inup}>
                    <h1 className={style.in} onClick={signin}>SIGN IN</h1>
                    <h1 className={style.up}>SIGN UP</h1>
                </div>
                <div className={style.input}>
                    <h6><label htmlFor="">FIRST NAME</label></h6>
                    <input type="text" value={firstName} onChange={fnamedata} />
                    <h6><label htmlFor="">LAST NAME</label></h6>
                    <input type="text" value={lastName} onChange={lnamedata} />
                    <h6><label htmlFor="">EMAIL ADDRESS</label></h6>
                    <input type="email" value={email} onChange={emaildata}/>
                    <h6><label htmlFor="">PASSWORD</label></h6>
                    <input type="password" name="" id="" value={password} onChange={passworddata}/>
                    <h6><label htmlFor="">CONFIRM PASSWORD</label></h6>
                    <input type="password" name="" id="" value={confirmPassword} onChange={confirmpassworddata}/>
                </div>
                <div className={style.btn}>
                <button onClick={submitform}>SIGN UP</button>
                </div>
                <hr />
                <div className={style.forgot} ><Link to="/">Already Member?</Link></div>
            </section>
        </section>
        </div>
    )
}
export default Signup;