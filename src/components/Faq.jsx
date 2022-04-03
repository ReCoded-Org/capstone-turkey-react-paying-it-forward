import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "./App.css"
import imagefaq from "../images/image-faq.png";

function Faq() {
    const data = {
        title: "Frequently Asked Questions",
        rows: [
            {
                title: "What is Paying It Forward?",
                content: `It is an application that provides donations to students, which was established to reduce inequality in the education system.`,
            },
            {
                title: "How can you request an item?",
                content:
                    "First of all, you must be a member of the application. After you become a member, you must click on the request button on the homepage. You can make a request by filling out the form that opens.",
            },
            {
                title: "How can you donate an item?",
                content: "First of all, you must be a member of the application. After you become a member, you must click on the donation button on the homepage. You can donate by filling out the form.",
            },
            {
                title: "Do I have to pay any fees to request or donate?",
                content: "It is completely free to request or donate.",
            },
        ],
    };
    const styles = {
        bgColor: "#D8F4EC",
        titleTextColor: "black",
        rowTitleColor: "black",
        rowContentTextSize: "16px",
        rowContentPaddingTop: "10px",
        rowContentPaddingBottom: "10px",
        rowContentPaddingLeft: "50px",
        rowContentPaddingRight: "150px",
    };
    return (
        <>
            <div className='flex items-center justify-center p-4'>
                <img className="flex items-center" src={imagefaq} alt="faq" />
            </div>
            <div className="container mx-auto p-16 ">
                <Faq data={data} styles={styles} />
            </div>
        </>
    );
}
export default Faq;
