import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
  faBars = faBars;

  showingProducts = true;
  showingServices = false;

  products = ['Accessories', 'Eyes', 'Face', 'Lips', 'Make-Up', 'Nails', 'Skin Care'];
  services = ['Barber', 'Hairdresser', 'Make-Up Artist', 'Masseuse', 'Pedicure', 'Manicure', 'Acupuncturist'];
  items = [];

  showProducts() {
    this.showingProducts = true;
    this.showingServices = false;
  }

  showServices() {
    this.showingServices = true;
    this.showingProducts = false;
  }
}
