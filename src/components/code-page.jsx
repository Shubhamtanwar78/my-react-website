import React from "react";
import code from './images/code.png';


function Projects(){
return(
    <div>
        <img src={code} width={100} height={100} alt="" />
        <h3 className="text-lg font-medium pt-8 pb-2 ">
            Code your dream project
        </h3>
        <p className="py-2">
            Do you have an idea for your next great website? Let&apos;s make it a
            reality.
        </p>
    </div>
)
}
export default Projects;