import React, { useEffect } from 'react'
import useNews from '../Hooks/useNews';
import Card from './Card';
import SectionLayout from './SectionLayout';



function NewsCard() {
    const [fetchUkraine, ukraineData, sucess] = useNews()

    useEffect(() => {
        fetchUkraine('ukraine', '8')
    }, [])

    return (
        <SectionLayout>
            {ukraineData.map((each) => (
                <Card
                    img={each.fields.thumbnail}
                    sectionName={each.sectionName}
                    webTitle={each.webTitle.substring(0, 60)}
                    bodyTextSummary={each.blocks.body[0].bodyTextSummary.substring(0, 124) +
                        "..."}
                    id={each.id}

                />
            ))}

        </SectionLayout>
    )
}

export default NewsCard