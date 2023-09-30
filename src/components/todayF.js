import { useList } from "./stateProvider";
import { ProgressBar } from "ms-react-progress-bar";
import 'ms-react-progress-bar/dist/ProgressBar.css'
import { useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'
import { GiWhirlwind } from "react-icons/gi";
import { IoThermometer, IoWaterSharp } from "react-icons/io5";
import { Card } from "./card";

export const TodayF = () => {

    const { weather } = useList()
    const [openMore, setOpenMore] = useState(false)

    const barStyle = {
        height: "22px",
        borderRadius: "20px",
        labelSize: "12px",
        barColor: "rgb(59 130 246)",
        containerColor: "#dddddd",
        labelAlignment: "right"
    };

    return <div className='w-[60%] mt-[5rem] mx-auto'>
        <h1 className='border-b border-b-black pb-2'>TODAY'S FORECAST</h1>
        <section>
            <Card 
                src={weather.forecast.forecastday[0].hour[10].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[10].condition.text} 
                time={'10:00'} 
                deg={weather.forecast.forecastday[0].hour[10].temp_c} 
                cor={weather.forecast.forecastday[0].hour[10].chance_of_rain} 
                realFeel={weather.forecast.forecastday[0].hour[10].feelslike_c} 
                windSpeed={weather.forecast.forecastday[0].hour[10].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[10].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[12].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[12].condition.text} 
                time={'12:00'} 
                deg={weather.forecast.forecastday[0].hour[12].temp_c} 
                cor={weather.forecast.forecastday[0].hour[12].chance_of_rain} 
                realFeel={weather.forecast.forecastday[0].hour[12].feelslike_c} 
                windSpeed={weather.forecast.forecastday[0].hour[12].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[12].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[14].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[14].condition.text} 
                time={'14:00'} 
                deg={weather.forecast.forecastday[0].hour[14].temp_c} 
                cor={weather.forecast.forecastday[0].hour[14].chance_of_rain} 
                realFeel={weather.forecast.forecastday[0].hour[14].feelslike_c} 
                windSpeed={weather.forecast.forecastday[0].hour[14].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[14].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[16].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[16].condition.text} 
                time={'16:00'} 
                deg={weather.forecast.forecastday[0].hour[16].temp_c} 
                cor={weather.forecast.forecastday[0].hour[16].chance_of_rain} 
                realFeel={weather.forecast.forecastday[0].hour[16].feelslike_c} 
                windSpeed={weather.forecast.forecastday[0].hour[16].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[16].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[18].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[18].condition.text} 
                time={'18:00'} 
                deg={weather.forecast.forecastday[0].hour[18].temp_c} 
                cor={weather.forecast.forecastday[0].hour[18].chance_of_rain} 
                realFeel={weather.forecast.forecastday[0].hour[18].feelslike_c} 
                windSpeed={weather.forecast.forecastday[0].hour[18].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[18].humidity} 
            />
        </section>    
    </div>
}