import React from 'react'
import { Link } from 'react-router-dom'

function Newsletter() {
    return (
        <div>
            <div class="mb-3">
                <div class="section-title mb-0">
                    <h4 class="m-0 text-uppercase font-weight-bold">Newsletter</h4>
                </div>
                <div class="bg-white text-center border border-top-0 p-3">
                    <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                    <div class="input-group mb-2" style={{ width: "100%" }}>
                        <input type="text" class="form-control form-control-lg" placeholder="Your Email" />
                        <div class="input-group-append">
                            <button class="btn btn-primary font-weight-bold px-3">Sign Up</button>
                        </div>
                    </div>
                    <small>Lorem ipsum dolor sit amet elit</small>
                </div>
            </div>

            <div class="mb-3">
                <div class="section-title mb-0">
                    <h4 class="m-0 text-uppercase font-weight-bold">Tags</h4>
                </div>
                <div class="bg-white border border-top-0 p-3">
                    <div class="d-flex flex-wrap m-n1">
                        <Link to="/category/politics" class="btn btn-sm btn-outline-secondary m-1">Politics</Link>
                        <Link to="/category/business" class="btn btn-sm btn-outline-secondary m-1">Business</Link>
                        <Link to="/category/corporate" class="btn btn-sm btn-outline-secondary m-1">Corporate</Link>
                        <Link to="/category/sport" class="btn btn-sm btn-outline-secondary m-1">Sport</Link>
                        <Link to="/category/health" class="btn btn-sm btn-outline-secondary m-1">Health</Link>
                        <Link to="/category/education" class="btn btn-sm btn-outline-secondary m-1">Education</Link>
                        <Link to="/category/science" class="btn btn-sm btn-outline-secondary m-1">Science</Link>
                        <Link to="/category/covid19" class="btn btn-sm btn-outline-secondary m-1">CoronaVirus</Link>
                        <Link to="/category/food" class="btn btn-sm btn-outline-secondary m-1">Foods</Link>
                        <Link to="/category/travel" class="btn btn-sm btn-outline-secondary m-1">Travel</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter