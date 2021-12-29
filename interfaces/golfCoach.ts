import { Coach } from "./coach";

export class GolfCoach implements Coach{
    getdailyworkout(): string {
        return `Hit 100 balls at the golf range`;
    }
}