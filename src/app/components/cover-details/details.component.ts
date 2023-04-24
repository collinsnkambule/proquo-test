import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { MenuItem, MenuItemMetadata } from 'src/app/modules/menu-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  /**
   *
   */
  meta: MenuItemMetadata = {imageUrl: "", ingredients: []};
  constructor(private service: BackendService, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
        this.service.fetchMenuItemMetadata(id).then(meta =>{
            this.meta = meta;
        });
      });
  }

}
