import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/models/commande';
import { CommandeService } from 'src/app/service/commande.service';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {
  Response: string;
  Class: string;
  uneIdCommandeNumber: number;

  constructor(private commandeService: CommandeService) { }

  commandes : Commande[];
  supprimer(uneIdCommande:number){
    this.uneIdCommandeNumber = Number (uneIdCommande);
    console.log(uneIdCommande);
    this.commandeService.supprimerCommande(uneIdCommande).subscribe(ok => {this.Class = "alert-success";
  this.Response = "Commande Supprimé"; }, err =>{
  this.Class = "alert-danger";
  this.Response = "Commande non supprimé car inférieur à 24h avant la scéance"; 
      }
  );

    this.commandeService.getCommande().subscribe(commandeRecup => {this.commandes = commandeRecup; 
      console.log("commande Recup")}, err => console.log("probleme de recup des commandes"))

  }
  ngOnInit() {

    this.commandeService.getCommande().subscribe(commandeRecup => {this.commandes = commandeRecup; 
    console.log("commande Recup")}, err => console.log("probleme de recup des commandes"))
  }

}
