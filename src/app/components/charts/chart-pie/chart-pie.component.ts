import { Component, Input, OnInit } from '@angular/core';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js'
import { myAthlete } from 'src/app/interfaces/myAthlete.interface';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent implements OnInit {

  chart: any = null
  chart2: any = null
  @Input() athletes: myAthlete[] = []
  colors: string[] = [
    'rgb(255, 30, 0)',
    'rgb(255, 205, 86)',
    'rgb(0, 255, 255)',
    'rgb(0, 128, 0)',
    'rgb(54, 162, 235)',

  ]

  names: string[] = []
  participations: number[] = []
  colores: string[] = []



  constructor() {
    Chart.register(
      ArcElement,
      LineElement,
      BarElement,
      PointElement,
      BarController,
      BubbleController,
      DoughnutController,
      LineController,
      PieController,
      PolarAreaController,
      RadarController,
      ScatterController,
      CategoryScale,
      LinearScale,
      LogarithmicScale,
      RadialLinearScale,
      TimeScale,
      TimeSeriesScale,
      Decimation,
      Filler,
      Legend,
      Title,
      Tooltip,
      SubTitle
    );

  }

  ngOnChanges(): void {

    this.names = this.athletes.map((athlete) => athlete.name + " " + athlete.surname)
    this.participations = this.athletes.map((athlete) => athlete.participations)
    for (let i = 0; i < this.names.length; i++) {
      this.colores.push(this.colors[i])
    }
    this.chart.update()





  }

  ngOnInit(): void {

    this.chart = new Chart("realtime", {
      type: 'pie',
      data: {
        labels: this.names,
        datasets: [{
          label: 'My First Dataset',
          data: this.participations,
          backgroundColor: this.colores,
          hoverOffset: 4
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false,
          }
        }
      }

    });


    this.chart2 = new Chart("realtime2", {
      type: 'pie',
      data: {
        labels: ["Balonmano", "Golf", "Tenis", "Baloncesto"],
        datasets: [{
          label: 'My First Dataset',
          data: [100, 600, 170, 130],
          backgroundColor: this.colores,
          hoverOffset: 4
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false,
          }
        }
      }

    });

  }

}

