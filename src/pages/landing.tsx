import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Landing = () => {

    return(
        <div className="w-full h-full flex items-center justify-center">

        <div className="flex flex-col items-center justify-between py-5 px-5 border  border-white/10">
            <div className="flex py-12 px-6 h-full w-full flex-col gap-10 items-center border border-white/10">
            <Label className="text-2xl">Login</Label>
            <Input placeholder="email"></Input>
            <Input placeholder="password"></Input>
            <Button>Submit</Button>
            </div>
        </div>

        </div>
    );
}
export default Landing;