import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {AiOutlinePlus} from 'react-icons/ai';

// Components
import {
    Wrapper,
    MobileAnnoun
} from './Announ-css';

const Announ = () => {

    const [mobileFlag, setMobileFlag] = useState(-1);

    return (
        <Wrapper>
            <div>
                <div className='resp-pc'>
                    <div className='ann-index'>
                        <p>
                            Legal Notice
                        </p>
                        <p>
                            Prices are listed by person, in the original currency their revervation was made. Please <Link>click here</Link> for information on out policies, regulations and baggage fees. Prices on our website are valid if you purchase services in the same session. If you log off our website, prices may be different next time you log on. Our flights schedules are subject to change due to evolving circumstances related to COVID-19
                        </p>
                    </div>
                    <div className='ann-index'>
                        <p>Passport Requirement</p>
                        <p>
                            Passengers are responsible for obtaining valid travel documents (passport, visa or other required documents) that comply with the entry and exit requirements for domestic and international flights. Given that entry and exit requirements may change without notice, please consult <a href='https://www.travel.gc.ca' target='_blank'>www.travel.gc.ca</a> for more information.
                        </p>
                    </div>
                </div>
                <div className='resp-mobile'>
                    <MobileAnnoun flag={mobileFlag === 0}>
                        <div className='resp-mobile-index-header' onClick={() => setMobileFlag(0)}>
                            <p>Legal Notice</p>
                            <AiOutlinePlus></AiOutlinePlus>
                        </div>
                        <div className='resp-mobile-index-body'>
                            <p>
                                Prices are listed by person, in the original currency their revervation was made. Please <Link>click here</Link> for information on out policies, regulations and baggage fees. Prices on our website are valid if you purchase services in the same session. If you log off our website, prices may be different next time you log on. Our flights schedules are subject to change due to evolving circumstances related to COVID-19
                            </p>
                        </div>
                    </MobileAnnoun>

                    <MobileAnnoun flag={mobileFlag === 1} onClick={() => setMobileFlag(1)}>
                        <div className='resp-mobile-index-header'>
                            <p>Passport Requirement</p>
                            <AiOutlinePlus></AiOutlinePlus>
                        </div>
                        <div className='resp-mobile-index-body'>
                            <p>
                                Passengers are responsible for obtaining valid travel documents (passport, visa or other required documents) that comply with the entry and exit requirements for domestic and international flights. Given that entry and exit requirements may change without notice, please consult <a href='https://www.travel.gc.ca' target='_blank'>www.travel.gc.ca</a> for more information.
                            </p>
                        </div>
                    </MobileAnnoun>
                </div>
            </div>
        </Wrapper>
    )
}

export default Announ;