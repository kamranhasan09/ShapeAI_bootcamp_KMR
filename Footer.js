import React from "react"

const Footer = () =>{
    var currentDate = new Date().getFullYear();
return(
    <div className="Footer">
        <div className="Footer_txt">Copyright @ {currentDate}</div>
    </div>
);
}

export default Footer