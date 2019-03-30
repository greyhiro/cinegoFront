export class Movie {

    constructor(
        public idFilm: number,
        public nomFilm: string,
        public description: string,
        public afficheFilm: string,
        public dateRealisation: string,
        public video: string,
       
    ) { }
}
/*private Integer idFilm;
	@Column
	private String nomFilm;
	@Column
	private String nomFilmOriginal;
	@Column(length = 15000)
	private String description;
	@Column
	private String afficheFilm;
	@Column
	private String dateRealisation;
	@Column
	private String video;*/