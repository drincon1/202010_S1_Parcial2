import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListarComponent } from './series-listar/series-listar.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeriesListarComponent, SerieDetailComponent],
  exports: [ SeriesListarComponent]
})
export class SeriesModule { }
