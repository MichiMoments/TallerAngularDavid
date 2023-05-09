import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie'
import { SerieService } from './serie.service';

@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];
  avgSeasons : number = 0;

  constructor(private serieService: SerieService) { }


  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.avgSeasons = this.serieService.getAvgSeasons(series)
    });
  }


  ngOnInit() {
    this.getSeries();
  }

}
