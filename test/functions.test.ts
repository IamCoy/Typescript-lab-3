import { LightContainer } from "../src/LightContainer";
import { HeavyContainer } from "../src/HeavyContainer";
import { ShippingContainer } from "../src/ShippingContainer";
import { findContainersByDestination, findOverweightTransporters, isSafeToAddContainer } from "../src/functions";
import { Truck } from "../src/Truck";
import { Ship } from "../src/Ship";
import { Transporter } from "../src/Transporter";


describe("getCombinedYearsExperience function", () => {


  test("findContainersByDestination should return an array with light3 when destination is DC" , () =>{
    const light1 = new LightContainer("Grand Rapids", 2000)
    const light2 = new LightContainer("Santa Ana", 2000)
    const light3 = new LightContainer("Washington DC", 2000)

    const heavy = new HeavyContainer(50000, "Macon", 7500)
    const heavy2 = new HeavyContainer(9000, "Irvine", 8000)
    const heavy3 = new HeavyContainer(9000, "Irvine", 5000)

    const lights: ShippingContainer[] = [light1, light2, light3]
    const mixed:ShippingContainer[] =[light1, heavy2, light2, heavy3]
    
    expect(findContainersByDestination(lights, "Washington DC")).toEqual([light3])


  });

  test("findContainersByDestination should return an array with heavy2, heavy3 when destination is Irvine" , () =>{
    const light1 = new LightContainer("Grand Rapids", 2000)
    const light2 = new LightContainer("Santa Ana", 2000)
    const light3 = new LightContainer("Washington DC", 2000)

    const heavy = new HeavyContainer(50000, "Macon", 7500)
    const heavy2 = new HeavyContainer(9000, "Irvine", 8000)
    const heavy3 = new HeavyContainer(9000, "Irvine", 5000)

    const lights: ShippingContainer[] = [light1, light2, light3]
    const mixed:ShippingContainer[] =[light1, heavy2, light2, heavy3]
    
    expect(findContainersByDestination(mixed, "Irvine")).toEqual([heavy2, heavy3])

  });

  test("findContainersByDestination should return an array with light3 when destination in DC" , () =>{
    const light1 = new LightContainer("Grand Rapids", 2000)
    const light2 = new LightContainer("Santa Ana", 2000)
    const light3 = new LightContainer("Washington DC", 2000)

    const heavy = new HeavyContainer(50000, "Macon", 7500)
    const heavy2 = new HeavyContainer(9000, "Irvine", 8000)
    const heavy3 = new HeavyContainer(9000, "Irvine", 5000)

    const lights: ShippingContainer[] = [light1, light2, light3]
    const mixed:ShippingContainer[] =[light1, heavy2, light2, heavy3]
    
    expect(findContainersByDestination(lights, "Hyattsville")).toEqual([])

  });

  test("findContainersByDestination should return an array with light3 when destination in DC" , () =>{
  
    const empty: ShippingContainer[] = []
    
    expect(findContainersByDestination(empty, "Hyattsville")).toEqual([])

  });
});

describe("findOverweightTransporter Function test", () => {

  test("findOverweightContainer should return the following overweight trucks newTruck" , () =>{

    const shipping = new Ship(100000)
    const newTruck =  new Truck(50000)
    const shipping2 = new Ship(105000)
    const newTruck2=  new Truck(55000)

    const heavy3 = new HeavyContainer(9000, "Irvine", 100000)
    const light3 = new LightContainer("Washington DC", 2000)

    newTruck.addContainer(heavy3)
    newTruck2.addContainer(light3)

    const transporters:Transporter[] = [newTruck, newTruck2]

    expect(findOverweightTransporters(transporters)).toEqual([newTruck])

  })

  test("findOverweightContainer should return the following overweight trucks newTruck, newTruck2" , () =>{

    const shipping = new Ship(100000)
    const newTruck =  new Truck(50000)
    const shipping2 = new Ship(105000)
    const newTruck2=  new Truck(55000)

    const heavy3 = new HeavyContainer(9000, "Irvine", 100000)
    const light3 = new LightContainer("Washington DC", 2000)

    newTruck.addContainer(heavy3)
    newTruck2.addContainer(heavy3)
    shipping.addContainer(light3)

    const transporters:Transporter[] = [newTruck, newTruck2]

    expect(findOverweightTransporters(transporters)).toEqual([newTruck, newTruck2])

  })

  test("findOverweightContainer should return the following overweight trucks newTruck, shipping3" , () =>{

    const shipping = new Ship(100000)
    const newTruck =  new Truck(50000)
    const shipping2 = new Ship(105000)
    const newTruck2=  new Truck(55000)
    const shipping3 = new Ship(10000)

    const heavy3 = new HeavyContainer(9000, "Irvine", 100000)
    const light3 = new LightContainer("Washington DC", 2000)

    newTruck.addContainer(heavy3)
    newTruck2.addContainer(light3)
    shipping.addContainer(light3)
    shipping3.addContainer(heavy3)

    const transporters:Transporter[] = [newTruck, newTruck2, shipping, shipping2, shipping3]

    expect(findOverweightTransporters(transporters)).toEqual([newTruck, shipping3])

  })

  test("findOverweightContainer should return an empty array when there are no overweight transporters" , () =>{

    const shipping = new Ship(100000)
    const newTruck =  new Truck(50000)
    const shipping2 = new Ship(105000)
    const newTruck2=  new Truck(55000)

    const heavy3 = new HeavyContainer(9000, "Irvine", 100000)
    const light3 = new LightContainer("Washington DC", 2000)

    newTruck.addContainer(light3)
    newTruck2.addContainer(light3)
    shipping2.addContainer(light3)

    const transporters:Transporter[] = [newTruck, newTruck2, shipping2]

    expect(findOverweightTransporters(transporters)).toEqual([])

  })

  test("findOverweightContainer should return an empty array when there an empty array" , () =>{

  const transporters:Transporter[] = []

  expect(findOverweightTransporters(transporters)).toEqual([])

})

});

describe("isSafeToAddContainer Function test", () => {

  test("isSafeToAddContainer returns true for an empty ship and empty LightContainer when transporter maxWeight is 5000" , ()=>{
      const lightEmpty = new LightContainer("GR", 0)
      const emptyShip = new Ship(100000)

      expect(isSafeToAddContainer(emptyShip,lightEmpty)).toEqual(true)

  });

  test("isSafeToAddContainer returns true for an empty ship and a LightContainer with some cargo, but less than maxWeight" , ()=>{
    const light4 = new LightContainer("GR", 1000)
    const emptyShip = new Ship(100000)

    expect(isSafeToAddContainer(emptyShip,light4)).toEqual(true)

  });

  test("isSafeToAddContainer returns true for an empty ship and a HeavyContainer with some cargo, but less than maxWeight" , ()=>{
    const heavy4 = new HeavyContainer(5000,"GR", 1000)
    const emptyShip = new Ship(100000)

    expect(isSafeToAddContainer(emptyShip,heavy4)).toEqual(true)

  });

  test("isSafeToAddContainer returns false for an empty ship and a LightContainer with some cargo, more than maxWeight" , ()=>{
    const light5 = new LightContainer("GR", 10500)
    const emptyShip = new Ship(10000)

    expect(isSafeToAddContainer(emptyShip,light5)).toEqual(false)

  });

  test("isSafeToAddContainer  returns false for an empty ship and a HeavyContainer with some cargo, more than maxWeight" , ()=>{
    const emptyShip = new Ship(10000)
    const heavy5 = new HeavyContainer(5000,"GR", 10000)

    expect(isSafeToAddContainer(emptyShip,heavy5)).toEqual(false)

  });

  test("isSafeToAddContainer  returns true for an empty ship and a container with the same gross weight as the maxWeight" , ()=>{
    const emptyShip = new Ship(10000)
    const heavy5 = new HeavyContainer(5000,"GR", 5000)
    
    expect(isSafeToAddContainer(emptyShip,heavy5)).toEqual(true)

  });

  test("isSafeToAddContainer returns true for a container that is light enough to be added to this ship" , ()=>{
    const emptyShip = new Ship(100000)
    const heavy5 = new HeavyContainer(5000,"GR", 5000)
    const light4 = new LightContainer("GR", 1000)

    emptyShip.addContainer(light4)
    
    expect(isSafeToAddContainer(emptyShip,heavy5)).toEqual(true)

  });

  test("isSafeToAddContainer returns false for a container that is too heavy to be added to this ship" , ()=>{
    const emptyShip = new Ship(10000)
    const heavy5 = new HeavyContainer(5000,"GR", 5000)
    const light4 = new LightContainer("GR", 1000)

    emptyShip.addContainer(light4)
    
    expect(isSafeToAddContainer(emptyShip,heavy5)).toEqual(false)
  });

});