import { Chart } from 'chart.js/auto'
import { ArcElement, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import { getLecturers } from '../../../services/journal'

Chart.register(ArcElement, Tooltip)

const PieChart = () => {
    const [lecturers, setLecturers] = useState(null)

    useEffect(() => {
        getLecturers().then((data) => setLecturers(data))
    }, [])

    if (!lecturers) {
        return <div>Loading...</div>
    }

    let data = [
        {
            published: true,
            value: Number(0),
        },
        {
            published: false,
            value: Number(0),
        },
    ]

    lecturers.forEach((lecturer) => {
        if (lecturer.Jurnal.length > 0) {
            data[0].value += 1
        } else {
            data[1].value += 1
        }
    })

    const chartData = {
        labels: data.map((data) => data.year),
        datasets: [
            {
                label: '',
                data: data.map((data) => data.value),
                backgroundColor: data.map((data) =>
                    data.published === true ? '#2194BA' : '#EEF5FF',
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
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || ''
                        let dataIndex = context.dataIndex
                        if (data[dataIndex].published === true) {
                            label += 'Published: '
                        } else {
                            label += 'Not Published: '
                        }
                        if (context.parsed !== null) {
                            label += context.parsed
                        }
                        return label
                    },
                },
            },
        },
    }

    return <Pie data={chartData} options={option} />
}

export default PieChart
