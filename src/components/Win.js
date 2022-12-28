import React from 'react'
import { useState } from 'react'

function Win() {
    const [terms, setTerms] = useState(false)

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1 className='text-success'>Congratulations! <br/>Your Answer was correct</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <h3>You won iPhone 13 from amazon</h3>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <p className="text-warning fs-2">To Claim Your Prize please provide us your few details</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">
                                Email
                            </label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">
                                Password
                            </label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder='email password for further communication' />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">
                                PAN Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAddress"
                                placeholder="GAW*******"
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">
                                Address 
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAddress2"
                                placeholder="Apartment, studio, or floor"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">
                                State - City
                            </label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputCountry" className="form-label">
                                Country
                            </label>
                            <input type="text" className="form-control" id="inputCountry" />

                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">
                                Zip
                            </label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input onClick={()=>{if(terms){setTerms(false)}else{setTerms(true)}}} className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    I agree to all terms and conditions
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" disabled={!terms}>
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Win