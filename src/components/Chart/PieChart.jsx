import { Chart } from 'chart.js/auto'
import { ArcElement, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import { getLecturers } from '../../../services/journal'
import PropTypes from 'prop-types'

Chart.register(ArcElement, Tooltip)

function processingData(lecturers, value) {
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
    const [lecturers, setLecturers] = useState(null)
    const { value } = props

    useEffect(() => {
        getLecturers().then((data) => setLecturers(data))
    }, [])

    if (!lecturers) {
        return <div>Loading...</div>
    }

    const data = processingData(lecturers, value)

    const chartData = {
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

    return <Pie data={chartData} options={option} />
}

PieChart.propTypes = {
    value: PropTypes.string,
}

export default PieChart
