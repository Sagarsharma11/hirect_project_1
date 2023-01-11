import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from "../components/Banner/Banner";
import Faqsearch from "../components/Faqsearch.jsx/Faqsearch";
import Faq from "../components/Faq/Faq";
import  Stillquestion  from "../components/StillQuestion/Stillquestion";
import Contactus from "../components/Contactus/Contactus";
import Mapform from "../components/Mapandfrom/Mapform";
import Footer from "../components/Footer/Footer";

const Support = (props) => {
    const list = ['What is the most popular season to visit the Maldives?',
        'When should I book the Maldives Tour package?',
        'Do I need a visa to visit Maldives?',
        'How can I travel to Maldives?',
        'What are the travel documents required for entry  Maldives?'
    ]
    return (
        <>
            <div className="container-fluid">
                 <Banner title={props.title} />
                <Faqsearch />
                {
                    list.map((e, i) => {
                        return <Faq list={e} index={i} />
                    })
                }
                
                <Stillquestion />
            </div>
            <Contactus />
            <Mapform />
            <Footer />
            
        </>
    )
}

export default Support