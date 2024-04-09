import React from 'react'
import { IconFree, IconHigh, IconProtection, IconSupport } from '../icons'

const ServiceIcon = () => {
    return (
        <div>
            <section className="services">
                <div className="container-fluid">
                    <div className="service-list">
                        <div className="service-item">
                            <img src={IconHigh} className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">High Quality</h4>
                                <p className="service__description">crafted from top materials</p>
                            </div>
                        </div>
                        {/*End service-item*/}
                        <div className="service-item">
                            <img src={IconProtection} className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">Warranty Protection</h4>
                                <p className="service__description">crafted from top materials</p>
                            </div>
                        </div>
                        {/*End service-item*/}
                        <div className="service-item">
                            <img src={IconFree} className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">Free Shipping</h4>
                                <p className="service__description">crafted from top materials</p>
                            </div>
                        </div>
                        {/*End service-item*/}
                        <div className="service-item">
                            <img src={IconSupport} className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">24 / 7 Support</h4>
                                <p className="service__description">crafted from top materials</p>
                            </div>
                        </div>
                        {/*End service-item*/}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ServiceIcon