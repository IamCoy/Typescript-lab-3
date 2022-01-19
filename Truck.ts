import { ShippingContainer } from "./ShippingContainer";
import { Transporter } from "./Transporter";

export class Truck implements Transporter {
    maxWeight: number;
    container:ShippingContainer | null = null;

        constructor(maxWeight:number){
            this.maxWeight = maxWeight;
        }

        addContainer(container: ShippingContainer): void {
            this.container = container;
        }

        getTotalWeight(): number {
            if(this.container = null){
                return 0
            }else{
            return this.container.getGrossWeight()
            }
        }

        isOverWeight(): boolean {
            this.getTotalWeight()
            if(this.getTotalWeight() > this.maxWeight){
                return true
            }else {
                return false
            }
        }

}