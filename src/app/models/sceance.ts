import {Movie} from './movie'
export class Sceance {

    constructor(
        public idSceance:number,
        public dateEtHeureSceance:string,
        public film:Movie
    )
    
    {}
}
/*	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer idSceance;
	
	@Column
	private String dateEtHeureSceance;
	
	@ManyToOne
	@JoinColumn(name = "Fk_Film")
	private Film film;
	*/ 