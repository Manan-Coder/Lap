import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/components/AuthContext";

function focusInp() {
  const cont = document.getElementById("cont");
  cont.style.backgroundColor = "rgb(8, 8, 8)";
}

function notFocusInp() {
  const cont = document.getElementById("cont");
  cont.style.backgroundColor = "rgb(15, 17, 18)";
}

const Landing = () => {
  const WIP = true;
  const { loggedIn, setLoggedIn } = useAuth();
  const [showpwd, setshowpwd] = useState(false);
  const [showLogin, setshowLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowWarning(false);
  };
  
  const handleLogin = () => {
    if (email === "manancoder123@gmail.com") {
      setLoggedIn(true);
    } else {
      setShowWarning(true);
    }
  };
  
  if (loggedIn) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div>Manan has coded for 37 minutes today!</div>
      </div>
    );
  }

  return (
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
          <Input 
            type="email" 
            placeholder="email" 
            name="email" 
            value={email}
            onChange={handleEmailChange}
            onFocusCapture={focusInp} 
            onBlur={notFocusInp} 
            className="bg-space-dark" 
            required 
          />
          <div className="flex flex-row items-center gap-5">
            <Input 
              type={showpwd ? "text" : "password"} 
              placeholder="password" 
              id="password" 
              onFocusCapture={focusInp} 
              onBlur={notFocusInp} 
              required 
              className="bg-space-dark"
              disabled
            />
            <Button 
              onMouseEnter={() => setshowpwd(true)} 
              onMouseLeave={() => setshowpwd(false)} 
              className="bg-space-dark"
            >
              {showpwd ? <Eye /> : <EyeOff />}
            </Button>
          </div>
          {showWarning && (
            <div className="text-red-500 text-sm">
              This project is a WIP. Please use manancoder123@gmail.com to see available data.
            </div>
          )}
          <div className="flex flex-col gap-6 justify-between cursor-pointer">
            <Button 
              onMouseEnter={focusInp} 
              onMouseLeave={notFocusInp} 
              onClick={handleLogin}
              disabled={!email}
              className={email ? "" : "opacity-50 cursor-not-allowed"}
            >
              Submit
            </Button>
            <Label 
              onMouseEnter={focusInp} 
              onMouseLeave={notFocusInp}
            >
              {WIP ? <>Enter manancoder123@gmail.com <br /> in email box to see my data. </> : showLogin ? "No account? signup instead." : "Have an account? Login."}
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;