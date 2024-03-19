import { Chart } from 'chart.js/auto'
import { ArcElement, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import PropTypes from 'prop-types'
import { useState } from 'react'

Chart.register(ArcElement, Tooltip)
const data = [
    {
        published: false,
        value: 15,
    },
    {
        published: true,
        value: 85,
    },
]

const PieChart = () => {
    const [chartData] = useState({
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
                            label += context.parsed + '%' // Menambahkan karakter "%" pada nilai data
                        }
                        return label
                    },
                },
            },
        },
    }

    return <Pie data={chartData} options={option} />
}

PieChart.propTypes = {
    chartData: PropTypes.object,
}

export default PieChart
