import {Movie} from './movie'
import { Salle } from './salle';
export class Sceances {

    constructor(
        
        public dateEtHeureSceance:string,
        public film:Movie,
        public salle: Salle
    )
    
	{}
	
	}