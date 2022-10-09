import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// JSONS
import { PLANTICKETS } from '../../constant/PLANTICKETS';

// Images
import IMG_PREV from '../../assets/swiper/prev.png';
import IMG_NEXT from '../../assets/swiper/next.png';

const PlanTickets = () => {

    const [mySwiper, setMySwiper] = useState(null);

    const [swiperIndex, setSwiperIndex] = useState(0);

    useEffect(() => {
        // mySwiper.slideTo(swiperIndex, 0);
    })

    const func_nextSlide = () => {
        mySwiper.slideNext();
    }
    const func_prevSlide = () => {
        mySwiper.slidePrev();
    }

    return (
        <Wrapper>
            <div>
                <img className='control-swiper prev' src={IMG_PREV} alt='prev' onClick={func_prevSlide}></img>
                <img className='control-swiper next' src={IMG_NEXT} alt='next' onClick={func_nextSlide}></img>
                <div className='myswiper-div'>
                    <Swiper
                        onSwiper={s=>{
                            s.slideTo(swiperIndex, 0);
                            setMySwiper(s);
                        }}
                        grabCursor={true}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1000: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                            1300: {
                                slidesPerView: 6,
                                spaceBetween: 10,
                            },
                            1600: {
                                slidesPerView: 7,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {
                            PLANTICKETS.map((item, index) => (
                                <CustomSwiperSlide key={index} selected={index === swiperIndex} onClick={() => {
                                    setSwiperIndex(index);
                                }}>
                                    <p>{item.date}</p>
                                    <p>${item.price}</p>
                                </CustomSwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & > div:nth-child(1) {
        max-width: ${p => p.theme.maxWidth};
        margin: auto;
        position: relative;
        .myswiper-div {
            padding: 50px 100px;
            @media screen and (max-width: 450px) {
                padding: 50px 20px;
            }
        }
        .control-swiper {
            position: absolute;
            width: 30px;
            height: 30px;
        }
        .control-swiper.prev {
            left: 30px;
            top: calc(50% - 15px);
            @media screen and (max-width: 450px) {
                display: none;
            }
        }
    
        .control-swiper.next {
            right: 30px;
            top: calc(50% - 15px);
            @media screen and (max-width: 450px) {
                display: none;
            }
        }
    }
`

const CustomSwiperSlide = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    border: 1px solid ${p => p.theme.borderColor1};
    border-radius: 20px;
    
    & > p:nth-child(1) {
        font-weight: 100 !important;
        font-size: 20px;
        margin-top: 30px;
    }
    & > p:nth-child(2) {
        color: ${p => p.theme.themeColor1};
        font-family: 'avatar-bold';
        font-size: 25px;
        margin: 20px 0 30px 0;
    }

    border-bottom: ${p => p.selected ? '2px solid' : '0'} ${p => p.theme.themeColor1};
    @media screen and (max-width: 500px) {
        border-radius: 0px;
        padding: 0px;
        height: min-content !important;
        border: 0;
        border-bottom: ${p => p.selected ? '2px solid' : '0'} ${p => p.theme.themeColor1};
        
        transform: ${p => p.selected ? 'scale(1.2)' : 0};
        & > p:nth-child(1) {
            font-weight: 100 !important;
            font-size: 12px;
            margin: 5px;
        }
        & > p:nth-child(2) {
            color: ${p => p.theme.themeColor1};
            font-family: 'avatar-bold';
            font-size: 20px;
            margin: 0;
            margin-bottom: 5px;
        }
    }
    /* & > p:nth-child(3) {
        font-size: 18px;
        margin-bottom: 30px;
    } */
`

export default PlanTickets;