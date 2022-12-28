import React from 'react'

function Win() {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Your Answer was correct</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <h3>You won iPhone 13 from amazon</h3>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <p className="text-success fs-2">To Claim Your Prize please provide us your few details</p>
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
                                Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAddress"
                                placeholder="1234 Main St"
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">
                                Address 2
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
                                City
                            </label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">
                                Country
                            </label>
                            <select id="inputState" className="form-select">
                                <option selected="">Choose...</option>
                                <option>India</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">
                                Zip
                            </label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    I agree to all terms and conditions
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
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