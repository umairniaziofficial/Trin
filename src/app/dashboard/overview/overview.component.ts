import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  salesChart: Chart | undefined;
  selectedPeriod: string = 'last7days';

  // Sample data - replace with your actual data
  chartData = {
    last7days: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [12500, 15000, 11000, 18000, 14500, 16000, 17000]
    },
    last30days: {
      labels: Array.from({length: 30}, (_, i) => `Day ${i + 1}`),
      data: Array.from({length: 30}, () => Math.floor(Math.random() * 20000) + 10000)
    },
    last3months: {
      labels: ['Jan', 'Feb', 'Mar'],
      data: [350000, 420000, 380000]
    }
  };

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.initChart('last7days');
  }

  initChart(period: string) {
    const canvas = document.getElementById('salesChart') as HTMLCanvasElement;
    if (!canvas) return;

    // Destroy existing chart if it exists
    if (this.salesChart) {
      this.salesChart.destroy();
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.salesChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.chartData[period as keyof typeof this.chartData].labels,
        datasets: [{
          label: 'Sales',
          data: this.chartData[period as keyof typeof this.chartData].data,
          borderColor: 'rgb(0, 0, 0)',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          tension: 0.4,
          fill: true,
          pointBackgroundColor: 'rgb(0, 0, 0)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            padding: 12,
            bodyFont: {
              size: 14
            },
            callbacks: {
              label: (context) => `$${context.raw as number}`,
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 12
              },
              color: 'rgb(0, 0, 0)'
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              font: {
                size: 12
              },
              color: 'rgb(0, 0, 0)',
              callback: (value) => `$${value}`
            }
          }
        }
      }
    });
  }

  onPeriodChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.initChart(select.value);
  }
}
