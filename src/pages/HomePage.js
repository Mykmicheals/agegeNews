import React, { Fragment } from 'react'
import Featured from '../components/Featured'
import TopSection from '../components/TopSection'
import NewsCard from '../components/NewsCard';

function HomePage() {
    return (
        <Fragment>
            <TopSection />
            <NewsCard />
        </Fragment>
    )
}

export default HomePage