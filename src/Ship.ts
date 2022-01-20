import { ShippingContainer } from "./ShippingContainer";
import { Transporter } from "./Transporter";

export class Ship implements Transporter {
    maxWeight: number;
    containers:ShippingContainer[] = []

        constructor(maxWeight:number){
            this.maxWeight = maxWeight;
        }

        addContainer(container: ShippingContainer): void {
            this.containers.push(container);
        }

        getTotalWeight(): number {
            let sum = 0

            if(this.containers != []){
               
                for (let container of this.containers){
                 sum += container.getGrossWeight()
                }
            return sum
        } else {
            return 0
        }
        }
        

        isOverWeight(): boolean {
            this.getTotalWeight();

            if(this.getTotalWeight() > this.maxWeight){
                return true
            } else {
                return false
            }
        }
}