import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <main>
      <h1>Projeto Angular Hapcmc</h1>
      <p>A aplicação foi reconstruída com sucesso!</p>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent {
  title = 'framework-hapcmc-angular';
}
