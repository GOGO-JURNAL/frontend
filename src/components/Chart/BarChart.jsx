import { Chart } from 'chart.js/auto'
import { CategoryScale, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useEffect, useState } from 'react'
import { getJournal } from '../../../services/journal'

Chart.register(CategoryScale, Legend)

const BarChart = ({ target }) => {
    const [journal, setJournal] = useState(null)

    useEffect(() => {
        getJournal().then((data) => setJournal(data))
    }, [])

    if (!journal) {
        return <div>Loading...</div>
    }

    const scopus = parseInt(journal.scopus)
    const research = parseInt(journal.penelitian)
    const community = parseInt(journal.pengabdian)
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

BarChart.propTypes = {
    target: Number,
}

export default BarChart
