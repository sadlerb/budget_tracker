import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";


const PieChart = (chartData) => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    return(
        <Pie data={chartData}/>
    )
}

export default PieChart;