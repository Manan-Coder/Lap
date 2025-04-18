import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function focusInp(){
const cont = document.getElementById("cont");
cont.style.backgroundColor = "rgb(8, 8, 8)"
}
function notFocusInp(){
const cont = document.getElementById("cont");
cont.style.backgroundColor = "rgb(15, 17, 18)"

}
const Landing = () => {

    return(
        <div className="w-full h-full flex items-center justify-center">

        <div className="flex flex-col items-center justify-between py-5 px-5 border  border-white/10" id="cont">
            <div className="bg-space-dark flex py-12 px-6 h-full w-full flex-col gap-10 items-center border border-white/10">
            <Label className="text-2xl">Login</Label>
            <Input placeholder="email" name="email" onFocusCapture={focusInp} onBlur={notFocusInp}></Input>
            <Input placeholder="password" name="password" onFocusCapture={focusInp} onBlur={notFocusInp}></Input>
            <Button onMouseEnter={focusInp} onMouseLeave={notFocusInp}>Submit</Button>
            </div>
        </div>

        </div>
    );
}
export default Landing;