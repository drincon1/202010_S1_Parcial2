import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-listar',
  templateUrl: './series-listar.component.html',
  styleUrls: ['./series-listar.component.css']
})
export class SeriesListarComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie>;
  //selectedBook: BookDetail;
  selected = false;

  getBooks(): void {
    this.serieService.getSeries()
      .subscribe(series => this.series = series);
  }

  ngOnInit() {
    this.getBooks();
  }

}
