import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// JSONS
import { HEADER } from "../../constant/HEADER";
import { TICKETS } from "../../constant/TICKETS";
import { TICKETINFO } from "../../constant/TICKETINFO";
import { BUNDLE } from "../../constant/BUNDLE";

// Components
import Inform from "../../components/Inform/Inform";
import Header from "../../components/Header/Header";
import Ticket from "../../components/Ticket/Ticket";
import PlanTickets from "../../components/PlanTickets/PlanTickets";
import PromoCode from "../../components/PromoCode/PromoCode";
import TicketInfo from "../../components/TicketInfo/TicketInfo";
import Bundle from "../../components/Bundle/Bundle";
import Footer from "../../components/Footer/Footer";

import { Wrapper } from "./Book-css";

const Book = () => {

  const [bundleFlag, setBundleFlag] = useState(null);

  useEffect(() => {
    BUNDLE.map((item, index) => {
      if (item.recommend) {
        setBundleFlag(index);
      }
    })
  }, [])

  return (
    <Wrapper>
      <Inform></Inform>
      <Header props={HEADER} />
      <div className='tickets'>
        {
          TICKETS.map((item, index) => (
            <Ticket props={item} key={index}></Ticket>
          ))
        }
      </div>
      <PlanTickets></PlanTickets>
      <div className='inform1'>
        <p>Prices are one-way, per person and include all taxes and fees</p>
        <PromoCode></PromoCode>
      </div>
      <div className='ticket-infos'>
        <div className='ticket-infos-div'>
          {
            TICKETINFO.map((item, index) => (
              <div className='ticket-item'>
                <TicketInfo props={item} key={index}></TicketInfo>
                <div className='bundles'>
                  <h1>Choose a bundle</h1>
                  <div className='bundle-items'>
                    {
                      BUNDLE.map((item, index) => (
                        <Bundle 
                          props={{...item, checked: index === bundleFlag ? true : false, setBundle:setBundleFlag, bundle: index}}
                          key={index}
                        ></Bundle>
                      ))
                    }
                  </div>
                </div>
                <div className='continue'>
                  <button>Continue</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='annunciation'>
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
      <Footer></Footer>
    </Wrapper>
  );
};

export default Book;
