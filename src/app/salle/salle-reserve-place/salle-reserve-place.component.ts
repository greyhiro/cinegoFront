import { Component, OnInit } from '@angular/core';
import { SalleService } from 'src/app/service/salle.service';
import { Salle } from 'src/app/models/salle';
import { Router, ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-salle-reserve-place',
  templateUrl: './salle-reserve-place.component.html',
  styleUrls: ['./salle-reserve-place.component.css']
})
export class SalleReservePlaceComponent implements OnInit {
 

  constructor(private salleService: SalleService, private router: Router, private activatedRoute: ActivatedRoute) { }
 
nomSalle: string;
salle: Salle;
idSalle: string;
idSalleNumber: number;
fichierXml: string;
salleJson:string;


  ngOnInit() {

    this.idSalle = this.activatedRoute.snapshot.paramMap.get('idSalle');
    this.idSalleNumber = Number (this.idSalle);
    
    this.salleService.findSalleById(this.idSalleNumber).subscribe(salleRecup => {this.salle = salleRecup;
      console.log("Salle trouvé");
      console.log(this.salle);
      this.salleJson = JSON.stringify(this.salle);
      var fichierXml = this.salleJson.search("\"");
      console.log(this.salleJson.replace(new RegExp("[^(A-Za-z0-9:{},)]", "g"), ''));
      
    
      
  
    }, err => console.log("problème dans le service de récupération des salles"));
 

    


  

  }

  

}
