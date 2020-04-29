import { Component, OnInit, Input } from '@angular/core';
import { SerieDetail } from '../serieDetail';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  @Input() serieDetail: SerieDetail;
  constructor(private serieService: SerieService) { }

  serieId: number;

  getSerieDetail(): void {
    this.serieService.getSerieDetail(this.serieId)
      .subscribe(serieDetail => {
        this.serieDetail = serieDetail;
      });
  }
  ngOnInit() {
    this.getSerieDetail();
  }

}
