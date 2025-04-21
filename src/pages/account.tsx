import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Account = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const hello = ["hello","hiii!"]
    const [showpwd, setshowpwd] = useState(false)
    const [showOtpSection, setShowOtpSection] = useState(false)
    const [otpSent, setOtpSent] = useState(false)
    
    const togglePasswordVisibility = () => {
        setshowpwd(!showpwd);
    }

    const toggleOtpSection = () => {
        setShowOtpSection(!showOtpSection);
    }

    return(
        <div className="h-full w-full flex items-center justify-center p-8 pt-28">
            <div className="bg-space-dark max-w-4xl w-full mx-auto rounded-lg gap-8 flex flex-col items-center justify-between py-5 px-5 border border-dashed border-white/10 relative group">
                <span className="absolute -top-2 -left-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
                <span className="absolute -top-2 -right-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
                <span className="absolute -bottom-2 -left-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
                <span className="absolute -bottom-2 -right-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span> 
  
                <div className="text-3xl text-center">
                   Account Information 
                </div>
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-4">
                        <div>email</div>
                        <div>API key</div>
                        <div>password</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="bg-white text-black text-center">manancoder123@gmail.com</div>
                        <div 
                        className="bg-white text-black text-center relative cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => {
                            navigator.clipboard.writeText("1232675976355");
                            setIsCopied(true);
                            setTimeout(() => setIsCopied(false), 2000);
                        }}>
                            1232675976355
                            {isHovered && (
                              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                                {isCopied ? "Copied!" : "Copy"}
                              </div>
                            )}
                        </div>
                        <div className="flex items-center">
                            <div className="text-black text-center bg-white flex-grow">
                                {showpwd ? hello[1] : "•••••••••••••••••••"}
                            </div>
                            <Button 
                                onClick={toggleOtpSection} 
                                variant="ghost" 
                                className="ml-2"
                            >
                                {showOtpSection ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </Button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {showOtpSection && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col justify-center items-center gap-4 w-full overflow-hidden pt-1"
                        >
                            <div className="flex flex-row gap-4">
                                <Input placeholder="enter OTP for password" className="w-56"></Input>
                                <Button className="h-10">Send OTP</Button>
                            </div>
                            <div>
                                <Button>Done</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
     
                <motion.div 
                    animate={{
                        y: showOtpSection ? 0 : 0, 
                        transition: { duration: 0.3, delay: showOtpSection ? 0.1 : 0 }
                    }}
                >
                    <Button className="bg-red-500 text-white hover:bg-red-700">Logout</Button>
                </motion.div>
            </div>
        </div>
    );
}

export default Account;