import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent implements OnInit {
 
  chart: any = null
  chart2: any = null
  

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
  ngOnInit(): void {
    this.chart = new Chart("realtime", {
      type: 'pie',
  data: {
       labels: [
           'Michael Phelps',
           'Rafael Nadal',
           'Roger Federer',
           'Cristiano Ronaldo'
  
       ],
  datasets: [{
    label: 'My First Dataset',
    data: [35, 15, 20, 30],
    backgroundColor: [
      'rgb(255, 30, 0)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(0, 128, 0)'
    ],
    hoverOffset: 4
    }]
  },
    options: {
      plugins: {
        legend: {
          display: false,
        }}
  }
  
    });
    this.chart2 = new Chart("realtime2", {
      type: 'pie',
       data: {
  labels: [
    'Natación',
    'Tenis',
    'Fútbol'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [35, 35, 30],
    backgroundColor: [
      'rgb(255, 30, 0)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
}
    });
  }
}

