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
} from 'chart.js';

@Component({
  selector: 'app-chart-rendimiento',
  templateUrl: './chart-rendimiento.component.html',
  styleUrls: ['./chart-rendimiento.component.css']
})
export class ChartRendimientoComponent implements OnInit {
  chart: any = null;
  chart2: any = null;

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
    this.chart = new Chart('realtime', {
      type: 'pie',
      data: {
        labels: [
          'Velocidad',
          'Oxigenación',
          'Umbral aeróbico',
          'Umbral anaeróbico',
          'Agilidad',
          'Fuerza',
          'Pisada',
        ],
        datasets: [
          {
            label: 'My First Dataset',
            data: [95, 95, 175, 135, 85, 100, 40],
            backgroundColor: [
              'rgb(246, 34, 15)', //rojo
              'rgb(26, 120, 183)', //azul
              'rgb(255, 4, 103)', //rosa
              'rgb(6, 166, 123)', //azul verdoso
              'rgb(226, 197, 14)', // amarillo
              'rgb(14, 14, 226)', // azul electrico
              'rgb(26, 218, 8)', //verde
            ],
            hoverOffset: 7
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
    /* this.chart2 = new Chart('realtime2', {
      type: 'pie',
      data: {
        labels: ['Natación', 'Tenis', 'Fútbol'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [35, 35, 30],
            backgroundColor: [
              'rgb(255, 30, 0)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }); */
  }
}
