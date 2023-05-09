import { useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs'
import axios from "axios";
import { BsTypeH1 } from "react-icons/bs";
export default function ApiWeather() {
    const [data, setData] = useState(null)
    const [text, setText] = useState("")
    const [error, setError] = useState("")
    const getData = async () => {
        const APIkey = "e0ddc538b3415427caeb7901218a30dd"

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${APIkey}`
        axios.get(url)
            .then((res) => {
                // handle success
                console.log(res.data);
                setData(res.data)
            })
            .catch((error) => {
                // handle error
                if (error.response.status = "404" && text != "") {
                    setError("Invalid City Name")
                    setData("")
                }

                console.log(error);
            })

    }
    useEffect(() => {
        getData();
    }, []);
    const handle_search = (text) => {
        getData();
        setText("")
        setError("")
    }
    return (
        <div >
            <div className="container">
            <input
                placeholder="Enter Location"
                type="text"
                value={text}
                onChange={(e) => { setText(e.target.value) }}
                onKeyPress={(e) => {
                    if (e.key == "Enter" && text) {
                        getData()
                        setText("")
                        setError("")
                    }
                }
                }
            />
            <div className="icon">
                <BsSearch className="search" onClick={() => handle_search(text)} />
            </div>
            </div>
            
            {error && (<h1>{error}</h1>)}
            {
                data && (
                   <div className="contain">
                    <h1 className="thanhpho">{data.name}</h1>
                    <div className="temp" >
                    <h1 className="nhietdo">Temp {data.main.temp}</h1>
                        <img
                            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                        />
                    </div>
                        <h1 className="Datnuoc">{data.sys.country}</h1>
                        <h1 className="thoitiet">{data.weather[0].description}</h1>
                   </div>
                )
            }
        </div>
    )
}