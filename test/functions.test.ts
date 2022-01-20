import { LightContainer } from "../src/LightContainer";
import { HeavyContainer } from "../src/HeavyContainer";
import { ShippingContainer } from "../src/ShippingContainer";
import { findContainersByDestination } from "../src/functions";

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