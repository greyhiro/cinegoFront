import { Component, OnInit } from '@angular/core';
import { SceanceService } from 'src/app/service/sceance.service';
import { Sceances } from 'src/app/models/sceance';
import { Router, ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/service/commande.service';
import { Commande } from 'src/app/models/commande';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Salle } from 'src/app/models/salle';


@Component({
  selector: 'app-sceance-list',
  templateUrl: './sceance-list.component.html',
  styleUrls: ['./sceance-list.component.css'],
})
export class SceanceListComponent implements OnInit {

  idFilm: string;
  idFilmNumber: number;
  sceance: Sceances;
  Response: string;
  Class: string;
  commandes: Commande;
  salle: Salle;
  sceances : Sceances[];
  constructor( private commandeService: CommandeService, private sceanceService: SceanceService, private router: Router, private activatedRoute: ActivatedRoute) { }
  

  
 

  Reserver(uneSceance: Sceances){

    this.sceance = uneSceance;
    debugger;
    this.commandeService.sauvegarderCommande(this.sceance).subscribe(commandeEnvoye => {console.log("ok");
    debugger;
    this.Response = "envoyé !";
  } ,err=> this.Response = "nope !");
    
    
  }


  ngOnInit() {

    this.idFilm = this.activatedRoute.snapshot.paramMap.get('id');
    this.idFilmNumber = Number (this.idFilm);
    this.sceanceService.getSceancesByFilmId(this.idFilmNumber).subscribe(sceanceRecup => {this.sceances = sceanceRecup;
    console.log(this.sceance);
    console.log("sceance bien récupéré"), err => console.log("pas réussi à récupérer ....")});
    
  }


}


