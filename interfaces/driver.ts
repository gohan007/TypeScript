import { Coach } from "./coach";
import { CricketCoach } from "./cricketCoach";
import { GolfCoach } from "./golfCoach";

let myCricketCoach=new CricketCoach;
let myGolfCoach=new GolfCoach;

let theCoaches:Coach[]=[];

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let coach of theCoaches){
    console.log(coach.getdailyworkout());
}