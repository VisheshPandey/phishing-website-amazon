import React from 'react'

function Thankyou() {
    return (
        <>
            <div className="container">
                <div className="row py-5">
                    <div className="col-sm-6 m-auto text-success bg-light text-center rounded-3">
                        <p>
                            You will get e-mail soon from our end!
                        </p>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-sm-6 m-auto text-danger text-center rounded-3">
                        <a href="https://www.amazon.in/" className="btn btn-primary">Continue Shopping!</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Thankyou