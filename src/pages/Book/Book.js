import React, { useEffect, useState } from "react";


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
        {
          TICKETINFO.map((item, index) => (
            <>
              <TicketInfo props={item} key={index}></TicketInfo>
              <div className='bundles'>
                <h1>Choose a bundle</h1>
                <div className='bundle-items'>
                  {
                    BUNDLE.map((item, index) => (
                      <Bundle 
                        props={{...item, checked: index === bundleFlag ? true : false}}
                        key={index}
                      ></Bundle>
                    ))                    
                  }
                </div>
              </div>
            </>
          ))
        }
      </div>
    </Wrapper>
  );
};

export default Book;
