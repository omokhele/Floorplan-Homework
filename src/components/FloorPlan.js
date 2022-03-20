// import { useState } from "react";

import LivingRoom from './LivingRoom'
import BedRoom from './BedRoom'
import Bath from './Bath'
import Kitchen from './Kitchen'


function FloorPlan(){

    return(
        <div>
            <BedRoom bedNum="1"/>
            <Kitchen/>
            <Bath size ="Full"/>
            <BedRoom bedNum="2"/>
            <LivingRoom/>
            <Bath size ="Half"/>
            <BedRoom bedNum="3"/>
            
            
        </div>
    )
}

export default FloorPlan