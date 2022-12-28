import React from 'react'
import { Link } from 'react-router-dom'
import iphone from './iphone.jpg'

function Quiz() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2>Answer the given question and win iPhone 13</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 m-auto text-center">
                       <img className='w-50' src={iphone} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 m-auto text-center rounded-4 border border-3">
                        <div className="row">
                            <div className="col py-3">
                                <p className='fs-2'>Who is the founder of Amazon?</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col py-3">
                                <Link className="btn btn-warning w-100" to="/win">
                                    Jeff Bezos
                                </Link>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col py-3">
                                <button className="btn btn-warning w-100">
                                    Mark Zukerburg
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col py-3">
                                <button className="btn btn-warning w-100">
                                    Vishesh Pandey
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col py-3">
                                <button className="btn btn-warning w-100">
                                    Elon Musk  
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Quiz