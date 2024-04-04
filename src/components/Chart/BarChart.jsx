import { Chart } from 'chart.js/auto'
import { CategoryScale, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

Chart.register(CategoryScale, Legend)

const BarChart = (props) => {
    const { target = 0, datas } = props

    const scopus = parseInt(datas.SCOPUS)
    const research = parseInt(datas.RISET)
    const community = parseInt(datas.PENGABDIAN)
    const data = [scopus, research, community]

    const chartData = {
        labels: ['Scopus', 'Researches', 'Community Services'],
        datasets: [
            {
                label: 'Total Articles',
                data: data,
                backgroundColor: data.map((value) =>
                    value > target ? '#2194ba' : '#FF612F',
                ),
            },
        ],
    }

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

export default BarChart
