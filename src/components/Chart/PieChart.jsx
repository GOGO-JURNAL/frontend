import { Chart } from 'chart.js/auto'
import { ArcElement, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useEffect, useState } from 'react'

Chart.register(ArcElement, Tooltip)

function processingData(lecturers, value) {
    if (!lecturers || !lecturers.length) return []

    let data = [
        {
            published: true,
            value: new Set(),
            percentage: function () {
                return ((this.value.length / lecturers.length) * 100).toFixed(2)
            },
        },
        {
            published: false,
            value: new Set(),
            percentage: function () {
                return ((this.value.length / lecturers.length) * 100).toFixed(2)
            },
        },
    ]

    lecturers.forEach((lecturer) => {
        if (lecturer.Jurnal.length > 0) {
            if (lecturer.Jurnal.some((jurnal) => jurnal.category === value)) {
                data[0].value.add(lecturer.id)
            } else {
                data[1].value.add(lecturer.id)
            }
        } else {
            data[1].value.add(lecturer.id)
        }
    })

    data.forEach((item) => (item.value = [...item.value]))

    return data
}
const PieChart = (props) => {
    const { value, lecturers } = props
    const [chartData, setChartData] = useState(null)

    useEffect(() => {
        if (!lecturers) return <div>Loading...</div>

        const data = processingData(lecturers, value)

        const newChartData = {
            labels: data.map((data) => data.year),
            datasets: [
                {
                    label: '',
                    data: data.map((data) => data.percentage()),
                    backgroundColor: data.map((data) =>
                        data.published === true ? '#2194BA' : '#EEF5FF',
                    ),
                },
            ],
        }

        setChartData(newChartData)
    }, [value, lecturers])
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
                        return label + ' %'
                    },
                },
            },
        },
    }

    return (
        <div>
            {lecturers && chartData ? (
                <Pie data={chartData} options={option} key={value} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default PieChart
