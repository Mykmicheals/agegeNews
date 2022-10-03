import React from 'react'
import useNews from '../Hooks/useNews';
import { useEffect } from 'react';
import Newsletter from './Newsletter';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SideCard() {

    const [Trending, trendingData, sucess] = useNews()
    useEffect(() => {
        Trending('queen', '10')
    }, [])

    return (
        <div className="col-lg-4">
            <div className="mb-3">
                <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Trending News</h4>
                </div>
                <div className="bg-white border border-top-0 p-3">
                    {trendingData.map((each) => (
                        <div key={each.id} className="d-flex align-items-center bg-white mb-3" style={{ height: "110px" }}>
                            <img className="img-fluid" src={each.fields.thumbnail} style={{ height: "100%", width: '50%' }} alt="" />
                            <div
                                className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                <div className="mb-2">
                                    <small>Jan 01, 2045</small>
                                </div>
                                <Link className="p m-0 text-secondary  font-weight-bold" to={`/detail/${each.id}/`}>
                                    {each.webTitle.substring(0, 40)}
                                </Link>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
            <Newsletter />
        </div>
    )
}

export default SideCard