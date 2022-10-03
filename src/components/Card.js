import React from 'react'
import { Link } from 'react-router-dom'

function Card({ img, sectionName, webTitle, bodyTextSummary, id }) {
    return (
        <div class="col-lg-6">
            <div class="position-relative mb-3">
                <img class="img-fluid w-100" src={img} style={{ objectFit: 'cover' }} />
                <div class="bg-white border border-top-0 p-4">
                    <div class="mb-2">
                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                            href="">{sectionName}</a>
                        <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <Link className="h6 d-block mb-3 text-secondary text-uppercase font-weight-bold" to={`detail/${id}`}>
                        {webTitle}
                    </Link>

                    <p class="m-0"> {bodyTextSummary}</p>
                </div>
                <div class="d-flex justify-content-between bg-white border border-top-0 p-4">
                    <div class="d-flex align-items-center">
                        <img class="rounded-circle mr-2" src="img/user.jpg" width="25" height="25"
                            alt="" />
                        <small>John Doe</small>
                    </div>
                    <div class="d-flex align-items-center">
                        <small class="ml-3"><i class="far fa-eye mr-2"></i>12345</small>
                        <small class="ml-3"><i class="far fa-comment mr-2"></i>123</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card