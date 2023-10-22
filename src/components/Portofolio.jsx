import { useState } from "react"
import "../style/portofolio.css"
import { dataPortofolio } from "./data-portofolio"

const filterType = [ 
    {
        type:"Landing Page"
    },
    {
        type:"Blog Pribadi"
    },
    {
        type:"3D Design"
    },
    {
        type:"Graphic Desain"
    },
    {
        type:"Portal Berita"
    },
    {
        type:"Company Profile"
    },
    {
        type:"Pendidikan"
    },
]


const Portofolio =()=> {
    const [filter,setFilter] = useState(null)

    const [filterTerm,setFilterTerm] = useState('')

    const toggle =(d,i)=> {
        if (filter==i) {
            return setFilter(null), setFilterTerm('')
        }
        setFilterTerm(d)
        setFilter(i)
    }

    return (
        <div className="body-container">
             <section id="Portofolio">
            <div className="portofolio-container">
                <div className="portofolio-header">
                    <h1><span>StruckServices.com</span><br></br>telah melayani 20+ client</h1>
                </div>
                <div className="portofolio-filter">
                    {filterType.map((data,index)=> (
                         <div className={filter == index?"filter-card active":"filter-card"} onClick={()=>toggle(data.type,index)}>
                            <p>{data.type}</p>
                        </div>
                    ))}

                </div>
                <div className="portofolio-slider">

                </div>
                <div className="card-container">
                    {dataPortofolio.filter(data => {
                        const filterTerms = filterTerm.toLocaleLowerCase()
                        const filteredData = data.type.toLocaleLowerCase()

                        return filteredData.includes(filterTerms)
                    }).map((data)=>(
                        <div className="portofolio-card"> 
                        <img src={data.image} />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        </div>
    )
}

export default Portofolio