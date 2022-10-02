import React from "react";

import { Wrapper } from "./Book-css";

// JSONS
import { HEADER } from "../../constant/HEADER";
import { TICKETS } from "../../constant/TICKETS";

// Components
import Inform from "../../components/Inform/Inform";
import Header from "../../components/Header/Header";
import Ticket from "../../components/Ticket/Ticket";


const Book = () => {
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
    </Wrapper>
  );
};

export default Book;
