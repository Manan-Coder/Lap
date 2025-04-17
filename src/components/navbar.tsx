
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Code,Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-white/10 flex justify-between items-center`}>
      <div className="mx-auto px-4 py-4 flex flex-row justify-between items-center w-full">
        <div className="left-0 text-red-50 text-3xl font-bold gap-1 tracking-loose relative">
            Lap
        </div>

        <div className="flex flex-row justify-evenly gap-5 right-0 items-center size={20} items-center cursor-pointer">
            <Button>
            <Link to={"https://github.com/Manan-Coder/Lap"}>
            <Github></Github>
            </Link>
            </Button>
            <Mail></Mail>
        </div>
 
      </div>
    </nav>
  );
};

export default NavBar;
