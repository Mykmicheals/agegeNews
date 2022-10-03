import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import SideCard from '../components/SideCard';

function DetailPage() {
    const [item, setItems] = useState();
    const [sucess, setSucess] = useState(false);
    const params = useParams()

    const fetchData = useCallback(async () => {
        const response = await fetch(
            `https://content.guardianapis.com/${params.id}/${params.year}/${params.month}/${params.day}/${params.item}?api-key=99b95102-072a-4131-ba40-bc800d0fd653&show-blocks=all&show-fields=all`
        );

        const data = await response.json();
        setItems(data.response.content);
        console.log(data.response.content);
        setSucess(true);
    }, [item, sucess, params])

    // const fetchDetails =  async () => {

    //     const response = await fetch(
    //         `https://content.guardianapis.com/${params.id}/${params.year}/${params.month}/${params.day}/${params.item}?api-key=99b95102-072a-4131-ba40-bc800d0fd653&show-blocks=all&show-fields=all`
    //     );

    //     const data = await response.json();
    //     setItems(data.response.content);
    //     console.log(data.response.content);
    //     setSucess(true);
    // };

    useEffect(() => {
        // fetchDetails();
        fetchData()

    }, [params.id]);

    return (
        !sucess ? (
            <Loading />) : (
            <div class="container">
                {console.log(item)}
                <div class="row">
                    <div class="col-lg-8">
                        {sucess && <div class="position-relative mb-3">
                            <img class="img-fluid w-100" src={item.fields.thumbnail} style={{ objectFit: 'cover' }} />
                            <div class="bg-white border border-top-0 p-4">
                                <div class="mb-3">
                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                        href="">{item.fields.byline}</a>
                                    <a class="text-body" href="">Jan 01, 2045</a>
                                </div>
                                <h1 class="mb-3 text-secondary text-uppercase font-weight-bold">{item.fields.headline}</h1>
                                <p>{item.blocks.body[0].bodyTextSummary}</p>
                            </div>
                        </div>}
                    </div>
                    <SideCard />
                </div>
            </div>
        )
    )
}

export default DetailPage