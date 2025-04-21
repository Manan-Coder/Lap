import { Button } from "@/components/ui/button";
import { useState } from "react";

const Leaderboard = () => {
    const [daily, setDaily] = useState(true)
    const [weekly, setWeekly] = useState(false)
const daily_members = [
    {
        name: "Manan",
        time: 200
    },
    {
        name: "John",
        time: 187
    }
    ,
    {
        name: "Windsor",
        time: 12
    },
    {
        name: "Patrick",
        time: 102
    }
]
const weekly_members = [
    {
        name: "Manan",
        time: 3000
    },
    {
        name: "John",
        time: 1870
    }
    ,
    {
        name: "Windsor",
        time: 2700
    },
    {
        name: "Patrick",
        time: 980
    }
]
return(
    <div className="h-full w-full flex flex-col items-center justify-center p-8 pt-28 gap-6">
        <div className="flex flex-row gap-8">
            <Button onClick={() => {setDaily(true);
        setWeekly(false);}}>Daily</Button>
            <Button onClick={() => {
                setDaily(false);
                setWeekly(true);
            }}>Weekly</Button>
        </div>
    <div className="py-5 px-5 bg-space-dark max-w-4xl w-full mx-auto rounded-lg flex flex-col gap-4  items-center justify-between  border border-dashed border-white/10 relative group">
    <span className="absolute -top-2 -left-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
<span className="absolute -top-2 -right-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
<span className="absolute -bottom-2 -left-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span>
<span className="absolute -bottom-2 -right-2 h-4 w-4 bg-space-dark flex items-center justify-center text-white/60">+</span> 
<div className="text-3xl">
    {daily ? "Daily": "Weekly"} Leaderboard
</div>
<table className="w-full border-collapse">
    <thead>
        <tr className="border-b border-gray-400 dark:border-gray-500">
            <th className="p-4 text-left w-1/2">Name</th>
            <th className="p-4 text-left w-1/2">Time</th>
        </tr>
    </thead>
    <tbody>
        {(daily ? daily_members : weekly_members)
        .sort((a,b) => b.time - a.time)
        .map((member, index) => (
            <tr key={index} className="border-b border-gray-400 dark:border-gray-500">
                <td className="p-4">{member.name}</td>
                <td className="p-4">{(Math.round(member.time/60)+" hours" + " " + (member.time%60)+" minutes")}</td>
            </tr>
        ))}
    </tbody>
</table>


</div>
</div>
);

}

export default Leaderboard