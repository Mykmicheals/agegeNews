import React, { Fragment, useEffect } from 'react'
import useNews from '../Hooks/useNews';

function TopSection() {
    const [fetctNews, newsData, sucess] = useNews()
    const [fetctHeadline, headlineData, dataSucess] = useNews()
    useEffect(() => {
        fetctNews('latest', '4')
        fetctHeadline('ukraine', '1')
    }, [])
    return (
        <Fragment>
            {dataSucess && <div className="container-fluid">
                {console.log(headlineData)}
                <div key={headlineData[0].id} className="row">
                    <div className="col-lg-7 px-0">
                        <div className="position-relative overflow-hidden" style={{ height: "500px" }}>
                            <img className="img-fluid h-100" src={headlineData[0]?.fields.thumbnail} style={{ objectFit: 'cover' }} />
                            <div className="overlay">
                                <div className="mb-2">
                                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                        href="">{headlineData[0].sectionName}</a>
                                    <a className="text-white" href="">{headlineData[0].webPublicationDate.substring(0, 10)}</a>
                                </div>
                                <a className="h2 m-0 text-white text-uppercase font-weight-bold" href="">{headlineData[0].webTitle.substring(0, 80)}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 px-0">
                        <div className="row mx-0">
                            {newsData.map((each) => (
                                <div className="col-md-6 px-0">
                                    <div className="position-relative overflow-hidden" style={{ height: "250px" }}>
                                        <img className="img-fluid w-100 h-100" src={each.fields.thumbnail} style={{ objectFit: 'cover' }} />
                                        <div className="overlay">
                                            <div className="mb-2">
                                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                    href="">Business</a>
                                                <a className="text-white" href=""><small>{each.webPublicationDate.substring(0, 10)}</small></a>
                                            </div>
                                            <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">{each.webTitle.substring(0, 50)}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>}

        </Fragment>
    )
}

export default TopSection