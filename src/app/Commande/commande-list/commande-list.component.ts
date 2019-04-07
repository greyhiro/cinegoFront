import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/models/commande';
import { CommandeService } from 'src/app/service/commande.service';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {

  constructor(private commandeService: CommandeService) { }

  commandes : Commande[];

  ngOnInit() {

    this.commandeService.getCommande().subscribe(commandeRecup => {this.commandes = commandeRecup; 
    console.log("commande Recup")}, err => console.log("probleme de recup des commandes"))
  }

}
