
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Code,Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-white/10 flex justify-between items-center`}>
      <div className="mx-auto px-4 py-4 flex flex-row justify-between items-center w-full">
        <div className="left-0 text-red-50 text-3xl font-bold gap-1 tracking-loose relative">
          <Link to={"/"}>
            Lap
            </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
            {[
              { path:'/', label: 'Dashboard'},
               { path: '/leaderboard', label: 'Leaderboard' },
               {path:'/account', label:'Account Settings'},
               {path:'/about', label:'About'}
            ].map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`text-white hover:text-white transition-colors relative group ${location.pathname === item.path ? 'font-bold' : ''}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>
        <div className="flex flex-row justify-evenly gap-5 right-0 items-center size={20} items-center cursor-pointer">
            <Button>
            <Link to={"https://github.com/Manan-Coder/Lap"}>
            <Github></Github>
            </Link>
            </Button>
            <Link to={"mailto:manancoder123@gmail.com"}>
            <Mail></Mail></Link>
        </div>
 
      </div>
    </nav>
  );
};

export default NavBar;
