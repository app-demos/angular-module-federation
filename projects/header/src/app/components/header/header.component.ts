import { Component, Inject, Input } from '@angular/core';
import { TOKEN_CONFIG } from 'shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = 'Title';
  @Input() todosCount: number;
  @Input() habitsCount: number;

  constructor(@Inject(TOKEN_CONFIG) config) {
    console.log('config', config);
  }

  sayHello() {
    console.log('sayHello');
  }
}
