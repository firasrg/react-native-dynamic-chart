export const data = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [{
      data: [
        100,
        50,
        100,
        20,
        50,
        20
      ],
      color: (opacity = 1) => `rgba(00, 10, 102, ${opacity})`,
      strokeWidth: 5
    }],
    legend: ["Hello chart"]
  }