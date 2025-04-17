
import { Github, Linkedin, Mail, Code, Link } from "lucide-react";
import { Button } from "react-day-picker";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto border-t border-white/10 py-4 bg-space-darker bg-opacity-70 backdrop-blur-md">
      <div className="w-full py-4 px-4 flex flex-row items-center justify-between">
      <div className="left-0 text-red-50 text-3xl font-bold gap-1 tracking-loose relative">Lap</div>
 
      <div className="flex flex-row gap-5 cursor-pointer">
        <Github></Github>

        <Mail></Mail>
      </div>     
      </div>
    </footer>
  );
};

export default Footer;

