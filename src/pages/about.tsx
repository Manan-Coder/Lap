import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const About = () => {
    return(
        <div className="h-full w-full flex items-center justify-center p-8 pt-28">
            <div className="py-5 px-5 bg-space-dark max-w-4xl w-full mx-auto rounded-lg flex flex-col gap-4  items-center justify-between  border border-dashed border-white/10 relative group">
            <span className="absolute -top-2 -left-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
  <span className="absolute -top-2 -right-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
  <span className="absolute -bottom-2 -left-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
  <span className="absolute -bottom-2 -right-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span> 
  
                <div className="text-4xl">
                   About 
                </div>
                <div className="leading-7 text-1xl">
                    <div>
                    Lap is a coding stats recorder.
                    <br />
                    It's written in React,ChartJS, TypeScript, Rust, Javascript and styled with TailwindCSS.
                    <br />
                    The functioning of lap is pretty simple and straightforward, there is a VS Code extension for Lap which fetched data like keyboard activity, file's name/type/dir, keys pressed etc.(VS Code provides this things to extensions so there isn't any rocket science, the extension just acts as a transporter, takes data from VS Code and sends it to the api.)
                    <br />
                    Then the api collects the data and kind of puts it in the right containers, like separated things like language, file name/type, file dir, keys pressed etc. and saves it accordingly (this is probably the tricky part as sorting the is easy manually but making a automation for it is crazy confusing.)
                    <br />
                    Then there is just a ReactJS + ChartJS based wrapper for the api which shows graphical dashboard/leaderboard and all.
                    <br />
                    <br />
                    </div>
                    So the flow of data looks smth like this - 
                    <div className="flex flex-col justify-center items-center">
                        <br />
                        <div className="text-center">VS Code </div>
                        <div className="text-center">(Unsorted file name/type/dir, keys pressed etc. data)</div>
                        <div className="text-2xl">|<br />|<br />↓</div>
                        <div className="text-center">Extension</div>
                        <div className="text-center">(Same unsorted data)</div>
                        <div className="text-2xl">|<br />|<br />↓</div>
                        Input API
                        <div className="text-center">(It takes the unsorted data, sorts it and saves it in database.)</div>
                        <div className="text-2xl">|<br />|<br />↓</div>
                        Output API
                        <div className="text-center">(It fetches the data from the database and sends it to the frontend.)</div>
                        <div className="text-2xl">|<br />|<br />↓</div>
                        Wrapper (React+ChartJS)
                        <div className="text-center">(Shows the data in the form of charts and leaderboards.)</div>
                    </div>
                    <br />
                   <div className="text-center"> So yeah this is pretty much everything, this whole project is open-sourced <Button className="h-5 text-1xl"><Link to={"https://github.com/Manan-Coder/Lap"}>here</Link></Button>. Shoot me an email at <Button className="h-5 text-1xl"><Link to={"mailto:manancoder123@gmail.com"}>manancoder123@gmail.com</Link></Button> if you face any problem/error or just for general query or chat.
                   </div>
                </div>
            </div>
        </div>
    );
}

export default About;