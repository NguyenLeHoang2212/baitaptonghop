import { useEffect, useState } from "react";

import axios from "axios";
import { BsTypeH1 } from "react-icons/bs";
export default function Api() {
    const [data, setData] = useState(null)
    const getData = async () => {
        const url = `https://645640ac2e41ccf16917c419.mockapi.io/StudentList`
        axios.get('https://645640ac2e41ccf16917c419.mockapi.io/StudentList')
            .then((res) => {
                // handle success
                console.log(res.data);
                setData(res.data)
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })

    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            {data&&data.map((item,index) => {
                    return (
                        <h1 key={index}>
                           {item.name},{item.old}
                        </h1>
                    );
                })
            }
        </div>
    )
}