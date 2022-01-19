import { Ship } from "./Ship";
import { ShippingContainer } from "./ShippingContainer";
import { Transporter } from "./Transporter";

export const findContainersByDestination =(containers:ShippingContainer[], destination:string) =>{

    const matched = containers.filter(container => container.destination == destination)
    return matched
}


export const findOverweightTransporters = (transporters:Transporter[]) => {

    const overWeight = transporters.filter(transporter => transporter.isOverWeight() == true)
    return overWeight
}

export const isSafeToAddContainer = (ship:Ship, container:ShippingContainer):boolean => {

    if(ship.getTotalWeight() + container.getGrossWeight() <= ship.maxWeight){
        return true
    } else {
        return false
    }
}