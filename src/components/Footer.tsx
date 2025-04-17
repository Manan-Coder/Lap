
import { Github, Linkedin, Mail, Code, Link } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto border-t border-white/10 py-8 bg-space-darker bg-opacity-70 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-400 tracking-wider">
              &copy; {currentYear} <span className="font-bold text-white">Manan Sharma</span>. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2 max-w-md">
              Exploring the cosmic vastness of code, one project at a time.<br>
              </br>
              This website is open-sourced <a href={"https://github.com/Manan-Coder/manan.is.a-dev"} className="underline bold">here</a>!
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a
                href="https://github.com/Manan-Coder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/manan-sharma-434091281/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Manan-Coder/manan.is.a-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label="CodePen Profile"
              >
                <Code size={18} />
              </a>
              <a
                href="mailto:manancoder123@.com"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label="Email Me"
              >
                <Mail size={18} />
              </a>
            </div>
            <div className="text-xs text-gray-500">
              <span className="inline-flex items-center">
                <span className="w-1 h-1 rounded-full bg-white/30 mr-2"></span>
                Designed with precision in the digital cosmos
              </span>
            </div>
          </div>  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
