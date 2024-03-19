import { Chart } from 'chart.js/auto'
import { CategoryScale, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import PropTypes from 'prop-types'
import { useState } from 'react'

Chart.register(CategoryScale, Legend)

const data = [
    {
        article: 'Scopus',
        value: 20,
    },
    {
        article: 'Researches',
        value: 60,
    },
    {
        article: 'Comunitys',
        value: 50,
    },
]
const target = 33

const BarChart = () => {
    const [chartData] = useState({
        labels: data.map((data) => data.article),
        datasets: [
            {
                label: 'Total Articles',
                data: data.map((data) => data.value),
                backgroundColor: data.map((data) =>
                    data.value > target ? '#2194ba' : '#FF612F',
                ),
            },
        ],
    })
    const option = {
        responsive: true,
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                ticks: {
                    maxTicksLimit: 6,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    }

    return <Bar data={chartData} options={option} />
}

BarChart.propTypes = {
    chartData: PropTypes.object,
}

export default BarChart
