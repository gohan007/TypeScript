import { Coach } from "./coach";

export class CricketCoach implements Coach{
    getdailyworkout(): string {
        return  `Practice your Spin Bowling and Batting`;
    }
}