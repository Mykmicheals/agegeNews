import React, { Fragment, useMemo, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';




function Header() {
    const [searchInput, setSearchInput] = useState()
    const history = useHistory()

    const inputHandler = (event) => {
        setSearchInput(event.target.value)
    }

    const submitHandler = ((event) => {
        event.preventDefault()
        history.push(`/category/${searchInput}`)


    })



    return (
        <Fragment>
            <div className="container-fluid d-none d-lg-block">
                <div className="row align-items-center bg-dark px-lg-5">
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-sm bg-dark p-0">
                            <ul className="navbar-nav ml-n2">
                                <li className="nav-item border-right border-secondary">
                                    <a className="nav-link text-body small" href="#">Monday, January 1, 2045</a>
                                </li>
                                <li className="nav-item border-right border-secondary">
                                    <a className="nav-link text-body small" href="#">Advertise</a>
                                </li>
                                <li className="nav-item border-right border-secondary">
                                    <a className="nav-link text-body small" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body small" href="#">Login</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 text-right d-none d-md-block">
                        <nav className="navbar navbar-expand-sm bg-dark p-0">
                            <ul className="navbar-nav ml-auto mr-n2">
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-twitter"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-facebook-f"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-linkedin-in"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-instagram"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-google-plus-g"></small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="#"><small className="fab fa-youtube"></small></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="row align-items-center bg-white py-3 px-lg-5">
                    <div className="col-lg-4">
                        <Link to='/' href="index.html" className="navbar-brand p-0 d-none d-lg-block">
                            <h1 className="m-0 display-4 text-uppercase text-primary">Agege<span className="text-secondary font-weight-normal">News</span></h1>
                        </Link>
                    </div>
                    <div className="col-lg-8 text-center text-lg-right">
                        <a href="https://htmlcodex.com"><img className="img-fluid" src="img/ads-728x90.png" alt="" /></a>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
                    <a href="index.html" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-white font-weight-normal">News</span></h1>
                    </a>

                    <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="category.html" className="nav-item nav-link">Category</a>
                            <a href="single.html" className="nav-item nav-link">Single News</a>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="input-group ml-auto d-none d-lg-flex" style={{
                            width: '100%',
                            maxWidth: '300px'
                        }}>
                            <form onSubmit={submitHandler}>
                                <input type="text" className="form-control border-0" placeholder="Keyword" onChange={inputHandler} />
                                <div className="input-group-append">
                                    <button className="input-group-text bg-primary text-dark border-0 px-3"><i
                                        className="fa fa-search"></i></button>
                                </div>
                            </form>

                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default Header