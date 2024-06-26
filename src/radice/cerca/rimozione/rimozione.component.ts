import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Archivio } from '../../archivio';
import { bibliotecaService } from '../../biblioteca.service';
import { Libro } from '../../libro';

@Component({
  selector: 'app-rimozione',
  templateUrl: './rimozione.component.html',
  styleUrls: ['./rimozione.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class RimozioneComponent implements OnInit {
  constructor() {}
  @Input() risultatoRicerca: Array<Libro>;
  @Input() archivio: Archivio;
  @Output() aggiornaView = new EventEmitter<string>();
  view: string = '';

  ngOnInit() {}

  rimozione() {
    this.archivio.rimuoviLibro(this.risultatoRicerca[0].posizione);
    this.aggiornaView.emit('HomePage');
  }
}
