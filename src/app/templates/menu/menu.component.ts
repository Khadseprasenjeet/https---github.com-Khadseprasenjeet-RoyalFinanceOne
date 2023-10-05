import { Component } from '@angular/core';
import { UserOptions } from 'src/app/model/user-options';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menus:Array<any>;
  type:string;
ngOnInit(): void {
 this.menus= UserOptions.userOptions;
 console.log(this.menus);

this.type=sessionStorage.getItem('type');

}

}

