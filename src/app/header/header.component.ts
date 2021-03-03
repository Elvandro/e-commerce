import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingCart, faUser, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  faMapMarkerAlt = faMapMarkerAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
