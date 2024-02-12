const ctx = document.getElementById('myChart');

const data = {
    labels: ['Александра', 'Владимир', 'Тимур', 'Ангелина Сейт', 'Денис'],
    datasets: [{
        label: 'My First Dataset',
        data: [55, 5, 10, 20, 10],
        backgroundColor: [
            'rgb(58, 158, 255)',
            'rgb(0, 188, 212)',
            'rgb(255, 179, 0)',
            'rgb(16, 171, 79)',
            'rgb(103, 58, 183)'
        ],
    }]
};

new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        rotation: 65,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: false
            },
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                }
            }
        }
    }
});
