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
import ChooseBundle from '../../components/ChooseBundle/ChooseBundle';
import Announ from "../../components/Announ/Announ";
import Footer from "../../components/Footer/Footer";

import { Wrapper } from "./Book-css";

const Book = () => {

  const [bundleDisplayFlag, setBundleDisplayFlag] = useState(-1);

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
            <>
              <Ticket props={item} key={index}></Ticket>
              <PlanTickets></PlanTickets>
              <div className='inform1'>
                <div>
                  <p>Prices are one-way, per person and include all taxes and fees</p>
                  <PromoCode></PromoCode>
                </div>
              </div>
              <div className='ticket-infos'>
                <div>
                  <div className='ticket-infos-div'>
                    {
                      TICKETINFO.map((item, index) => (
                        <div className='ticket-item' style={{border: item.isOpen ? '' : 0, paddingBottom: item !== bundleDisplayFlag ? '0' : '30px'}}>
                          <TicketInfo props={{...item, isOpen: item.isOpen, bundleFlag: item, setFlag: setBundleDisplayFlag}} key={index} ></TicketInfo>
                          {
                            item.isOpen ? (
                              <ChooseBundle props={{displayFlag: item === bundleDisplayFlag}}></ChooseBundle>
                            ) : null
                          }
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </>
          ))
        }
      </div>      
      <Announ></Announ>
      <Footer></Footer>
    </Wrapper>
  );
};

export default Book;
