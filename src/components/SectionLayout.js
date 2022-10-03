import React from 'react'
import SideCard from './SideCard'

function SectionLayout(props) {
    return (
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-12">
                                <div class="section-title">
                                    <h4 class="m-0 text-uppercase font-weight-bold">Latest News</h4>
                                    <a class="text-secondary font-weight-medium text-decoration-none" href="">View All</a>
                                </div>
                            </div>

                            {props.children}

                        </div>
                    </div>
                    <SideCard />
                </div>
            </div>
        </div>
    )
}

export default SectionLayout