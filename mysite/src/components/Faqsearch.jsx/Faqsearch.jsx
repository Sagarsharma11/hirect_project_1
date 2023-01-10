import React from 'react'
import './Faqsearch.css'

const Faqsearch = () => {
    return (
        <div className='row faq-search'>
            <div className="col-sm-12">
                <h2 className='text-center'>Frequently asked questions</h2>
                <p className='text-center text-dark'>Have questions ? We’re here to help.</p>
                <div className='search-wrapper'>
                <input type="text" placeholder=' Search a question' />
                    <button>
                        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Faqsearch