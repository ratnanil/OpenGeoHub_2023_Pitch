
// imported from the xlsx by merging two columns manually. Not very pretty, but I can omit using promise and fetch with this method 
const lables_raw = ["2021-1", "2021-2", "2021-3", "2021-4", "2021-5", "2021-6", "2021-7", "2021-8", "2021-9", "2021-10", "2021-11", "2021-12", "2022-1", "2022-3", "2022-4", "2022-5", "2022-6", "2022-7", "2022-8", "2022-9", "2022-10", "2022-11", "2022-12", "2023-1", "2023-2", "2023-3", "2023-4", "2023-5"]
const labels = lables_raw.map(obj => moment(obj, "YYYY-MM"));
const borreliose = [88.17, 87.39, 46.74, 631.9, 477.77, 1538.92, 2598.94, 1454.91, 964.3, 651.41, 238.77, 141.33, 52.82, 117.56, 349.98, 872.48, 2926.06, 1813.63, 1190.86, 1016.95, 726.7, 218.07, 504.16, 311.26, 263.55, 39.1, 181.89, 614.18]
const fsme = [1, 2, 6, 12, 38, 71, 69, 32, 21, 12, 6, 3, 1, 1, 6, 8, 55, 117, 75, 42, 23, 27, 23, 2, 2, 3, 6, 15, 28]

const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Borreliose',
                data: borreliose,
                borderWidth: 1,
                backgroundColor: "#483D8B"
            },
            {
                label: 'FSME',
                data: fsme,
                borderWidth: 1,
                backgroundColor: "#7FFFD4"
            },
        ]
    },
    options: {
        maintainAspectRatio: false,
        aspectRatio: 0.9,
        scales: {
            y: {
                beginAtZero: true,
                stacked: true,
                grid: {
                    display: false
                },
                border: {
                    display: false
                }
            },
            x: {
                stacked: true,
                type: 'time',
                grid: {
                    display: false
                },
                time: {
                    unit: 'month',
                    displayFormats: {
                        month: 'MMM YY'
                    }
                },
                ticks: {
                    // maxRotation: 0,
                    autoSkip: true,
                    maxTicksLimit: 20
                  },
                

            }
        },
        animation: {
            duration: 3000 // Specify the duration in milliseconds
        },
    }
});