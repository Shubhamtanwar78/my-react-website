import React from "react";
import design from './images/design.png';


function Designs(){
return(
    <div>
        <img src={design} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
    </div>
)
}
export default Designs;