import React from 'react'
import { useParams } from 'react-router-dom';
import useNews from '../Hooks/useNews';
import { useEffect } from 'react';
import Card from '../components/Card';
import SideCard from '../components/SideCard';
import Loading from '../components/Loading';

function Category() {
    const params = useParams()
    const [fetchNews, data, sucess] = useNews()

    useEffect(() => {
        fetchNews(params.tag, '12')
    }, [])

    return (
        !sucess ? (
            <Loading />) :
            (
                <div class="container-fluid mt-5 pt-3">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="section-title">
                                            <h4 class="m-0 text-uppercase font-weight-bold">Category: {params.tag}</h4>
                                            <a class="text-secondary font-weight-medium text-decoration-none" href="">View All</a>
                                        </div>
                                    </div>
                                    {data.map((each) => (
                                        <Card
                                            img={each.fields.thumbnail}
                                            sectionName={each.sectionName}
                                            webTitle={each.webTitle.substring(0, 60)}
                                            bodyTextSummary={each.blocks.body[0].bodyTextSummary.substring(0, 124) +
                                                "..."}
                                            id={each.id}
                                        />
                                    ))}

                                </div>
                            </div>
                            <SideCard />
                        </div>
                    </div>
                </div>
            )
    )
}

export default Category