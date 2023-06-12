const ctx = document.getElementById('myChart');

fetch("data/googletrends-tick-animal-2014-present.json")
    .then(response => response.json())
    .then(data => {

        // Parse the date labels
        const labels = data.map(obj => moment(obj.Month, "YYYY-MM").format("MMM YYYY"));

        // Extract the values
        const values = data.map(obj => obj.Value);



        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: "GoogleTrends",
                    data: values,
                    tension: 1,
                    pointRadius: 0,
                    borderColor: "#36A2EB"
                    // parsing: {
                    //     yAxisKey:   'Value',
                    //     // xAxisKey: 'Month'
                    // }
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Disable maintaining aspect ratio
                aspectRatio: 1.5, // Set the desired aspect ratio (width:height)
                scales: {
                    y: {
                        beginAtZero: true
                    },
              
                },
                animation: {
                    duration: 5000 // Specify the duration in milliseconds
                },

            }
        });

    })


