import { Truck } from "../src/Truck";
import { HeavyContainer } from "../src/HeavyContainer";
import { LightContainer } from "../src/LightContainer";

    test("The maxWeight property is set from the constructor parameter", ()=>{
      const newTruck =  new Truck(50000)

      expect(newTruck.maxWeight).toBe(50000);

    });

    test("The container property is set to null in a new Truck instance", ()=>{
      const newTruck =  new Truck(50000)

      expect(newTruck.container).toBe(null);

    });


    test("Calling addContainer sets the container property.", ()=>{
      const newTruck =  new Truck(50000)
      const heavy = new HeavyContainer(5000, "Grand Rapids", 7000)
      newTruck.addContainer(heavy)

      expect(newTruck.container).toBe(heavy);

    });

    test("getTotalWeight returns the gross weight of the heavy container ", ()=>{
      const newTruck =  new Truck(50000)
      const heavy = new HeavyContainer(5000, "Grand Rapids", 7000)
      newTruck.addContainer(heavy)

      expect(newTruck.getTotalWeight()).toBe(12000);

    });

    test("getTotalWeight returns the gross weight of the light container ", ()=>{
      const newTruck =  new Truck(50000)
      const light = new LightContainer("Detroit", 2000)
      newTruck.addContainer(light)

      expect(newTruck.getTotalWeight()).toBe(2000);

    });

    test("getTotalWeight returns the gross weight of the light container ", ()=>{
      const newTruck =  new Truck(50000)

      expect(newTruck.getTotalWeight()).toBe(0);

    });

    test("isOverweight returns true when the total weight is greater than maxWeight.", ()=>{
      const newTruck =  new Truck(50000)
      const heavy = new HeavyContainer(5000, "Grand Rapids",55000)
      newTruck.addContainer(heavy)

      expect(newTruck.isOverWeight()).toBe(true)

    });

    test("isOverweight returns false when the total weight is greater than maxWeight.", ()=>{
      const newTruck =  new Truck(50000)
      const light = new LightContainer("Detroit", 2000)
      newTruck.addContainer(light)

      expect(newTruck.isOverWeight()).toBe(false)

    });

    test("isOverweight returns false when the total weight is equal to maxWeight.", ()=>{
      const newTruck =  new Truck(50000)
      const heavy = new HeavyContainer(5000, "Grand Rapids",45000)
      newTruck.addContainer(heavy)

      expect(newTruck.isOverWeight()).toBe(false)

    });



  