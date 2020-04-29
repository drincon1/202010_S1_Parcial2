import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';
import { SerieDetail } from '../serieDetail';

@Component({
  selector: 'app-series-listar',
  templateUrl: './series-listar.component.html',
  styleUrls: ['./series-listar.component.css']
})
export class SeriesListarComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie>;
  selectedSerie: SerieDetail;
  selected = false;
  promedio = 0;

  getBooks(): void {
    this.serieService.getSeries()
      .subscribe(series => this.series = series);
  }

  onSelected(s: SerieDetail): void {
    this.selected = true;
    this.selectedSerie = s;
  }

  ngOnInit() {
    this.getBooks();
  }

}
