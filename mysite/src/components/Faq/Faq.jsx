import React from 'react'
import './Faq.css'
import { useState } from 'react'


const Faq = (props) => {
    const [active, setactive] = useState("none")


    const handleClick = (i) => {

        var ele = document.querySelector(".panel");

        if (ele.classList.length === 1) {
            ele.classList.add("active")
            setactive("block")

        } else {
            ele.classList.remove("active")
            setactive("none")
        }

    }

    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac leo ac ipsum consectetur laoreet quis eget tortor. Morbi aliquet venenatis tortor. Phasellus egestas sem rutrum volutpat iaculis"
    return (
        <div className='row faq'>
            <div className="col-sm-10 mx-auto">
                {
                    <div className="accordion rounded">
                        <span>
                            <button onClick={handleClick} >
                                {props.list}
                            </button>
                            {active === 'none' ?
                                <i onClick={handleClick} class="fa-sharp fa-solid fa-plus float-end"></i>
                                :
                                <i onClick={handleClick} class="fa-sharp fa-solid fa-minus float-end"></i>
                            }
                        </span>
                        {props.index === 0 ?
                          
                            <div style={{ display: `block` }} className="panel ">

                                <p>{desc}</p>
                            </div>

                            : 
                        <div style={{ display: `${active}` }} className="panel ">

                            <p>{desc}</p>
                        </div>
                    }
                    </div>


                }


            </div>
        </div>
    )
}

export default Faq