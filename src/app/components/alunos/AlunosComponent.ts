import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss',
})
export class AlunosComponent implements OnInit {
  title = 'Alunos';
  public alunos = ['Leonardo', 'Luana', 'Isabella'];
  constructor() {}
  ngOnInit(): void {}

  public trackByName(name: string) {
    return name;
  }
}
