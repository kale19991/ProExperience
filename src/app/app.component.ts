import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlunosComponent } from './components/alunos/AlunosComponent';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { setTheme } from 'ngx-bootstrap/utils';
import { HeaderComponent } from "./custom-layout/header/header.component";
import { NavComponent } from "./custom-layout/nav/nav.component";
import { AsideComponent } from "./custom-layout/aside/aside.component";
import { FooterComponent } from "./custom-layout/footer/footer.component";
import { MainComponent } from "./custom-layout/main/main.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        AlunosComponent,
        CommonModule,
        HeaderComponent,
        NavComponent,
        AsideComponent,
        FooterComponent,
        MainComponent
    ]
})
export class AppComponent {
  title = 'ProExperience';

  constructor() {
  }
}
