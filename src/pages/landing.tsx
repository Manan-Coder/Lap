import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye,EyeClosed } from "lucide-react";
import { useState } from "react";
function focusInp(){
const cont = document.getElementById("cont");
cont.style.backgroundColor = "rgb(8, 8, 8)"
}
function notFocusInp(){
const cont = document.getElementById("cont");
cont.style.backgroundColor = "rgb(15, 17, 18)"

}

const Landing = () => {
    const [showpwd,setshowpwd] = useState(false)
    const [showLogin,setshowLogin] = useState(true)
    return(
        <div className="w-full h-full flex items-center justify-center">

<div className="flex flex-col items-center justify-between py-5 px-5 border border-dashed border-white/10 relative group" id="cont">
  <span className="absolute -top-2 -left-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
  <span className="absolute -top-2 -right-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
  <span className="absolute -bottom-2 -left-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
  <span className="absolute -bottom-2 -right-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span> 
  <div className="bg-space-dark flex py-12 px-6 h-full w-full flex-col gap-10 items-center border border-dashed border-white/10 relative group">

  <span className="absolute -top-2 -left-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
  <span className="absolute -top-2 -right-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
  <span className="absolute -bottom-2 -left-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
  <span className="absolute -bottom-2 -right-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
         <Label className="text-2xl">{showLogin ? "Login" : "Signup"}</Label>
            <Input type="email" placeholder="email" name="email" onFocusCapture={focusInp} onBlur={notFocusInp} required></Input>
            <div className="flex flex-row items-center gap-5">
            <Input type= {showpwd ? "text" : "password"} placeholder="password" id="password" onFocusCapture={focusInp} onBlur={notFocusInp} required></Input>
            <Button onMouseEnter={() => setshowpwd(true)} onMouseLeave={() => setshowpwd(false)} className="bg-space-dark">
            {showpwd ? <Eye /> : <EyeClosed />}
            </Button>
            </div>
            <div className="flex flex-col gap-6 justify-between cursor-pointer">
            <Button onMouseEnter={focusInp} onMouseLeave={notFocusInp}>Submit</Button>
            <Label onClick={() => setshowLogin((s) => !s)} className="cursor-pointer" onMouseEnter={focusInp} onMouseLeave={notFocusInp}>{showLogin ? "No account? signup instead." : "Have an account? Login."}</Label></div>
            </div>
        </div>

        </div>
    );
}
export default Landing;