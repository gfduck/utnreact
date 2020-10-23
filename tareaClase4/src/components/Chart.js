import React, {useState, useEffect} from 'react';
import Chart from "chart.js";


const Grafico = ({potencias}) => {
    const [arrayNombres, setArrayNombres] = useState([])
    const [arrayPotencias, setArrayPotencias] = useState([])


    const cr = React.createRef();
    useEffect(() => {
       
      potencias.map(x => {
  
        setArrayNombres([...arrayNombres, x.name])
        setArrayPotencias([...arrayPotencias, x.potency])
      } )
      
      const ctx = cr.current.getContext("2d");
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          
          labels: arrayNombres,
          datasets: [
            {
              label: "# of Votes",
              data: arrayPotencias,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
      

    }, [potencias]);




    return (


        <canvas ref={cr} width="100vw" height="50vh"></canvas>
    )




}

export default Grafico;