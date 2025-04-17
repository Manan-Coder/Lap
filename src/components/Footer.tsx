
import { Github, Linkedin, Mail, Code } from "lucide-react";
import { Button } from "react-day-picker";
import {Link} from "react-router-dom"
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto border-t border-white/10 py-4 bg-space-darker bg-opacity-70 backdrop-blur-md">
      <div className="w-full py-4 px-4 flex flex-row items-center justify-between">
      <div className="left-0 text-red-50 text-3xl font-bold gap-1 tracking-loose relative">
        <Link to={"/"}>
        Lap
        </Link>
      </div>
 
      <div className="flex flex-row gap-5 cursor-pointer">
        <Link to={"https://github.com/Manan-Coder/Lap"}>
        <Github></Github>
        </Link>
        <Link to={"mailto:manancoder123@gmail.com"}>
        <Mail></Mail>
        </Link>
      </div>     
      </div>
    </footer>
  );
};

export default Footer;

