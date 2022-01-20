import { Ship } from "../src/Ship";
import { LightContainer } from "../src/LightContainer";
import { HeavyContainer } from "../src/HeavyContainer";

test("The maxWeight property is set from the constructor parameter", ()=>{
  const shipping = new Ship(100000)

  expect(shipping.maxWeight).toBe(100000);

});

test("The containers property is set to an empty array in a new Ship instance.", ()=>{
  const shipping = new Ship(100000)

  expect(shipping.containers).toStrictEqual([]);

});

test("Calling addContainer adds to the containers array property.", ()=>{
  const shipping = new Ship(100000)
  const lightContainer = new LightContainer("Grand Rapids", 1500)
  shipping.addContainer(lightContainer)

  expect(shipping.containers).toEqual([lightContainer]);

});

test("Calling addContainer twice adds both containers to the containers array property.", ()=>{
  const shipping = new Ship(100000)
  const lightContainer = new LightContainer("Grand Rapids", 1500)
  const heavy = new HeavyContainer(5000, "Detroit", 7000)
  shipping.addContainer(lightContainer)
  shipping.addContainer(heavy)

  expect(shipping.containers).toEqual([lightContainer, heavy]);

});

test("Calling addContainer twice adds both containers to the containers array property.", ()=>{
  const shipping = new Ship(100000)
  const lightContainer = new LightContainer("Grand Rapids", 1500)
  const heavy = new HeavyContainer(5000, "Detroit", 7000)
  shipping.addContainer(lightContainer)
  shipping.addContainer(heavy)

  expect(shipping.getTotalWeight()).toBe(13500);

});

test("getTotalWeight returns the combined gross weight of the containers in the array.", ()=>{
  const shipping = new Ship(100000)
  const lightContainer = new LightContainer("Grand Rapids", 2000)
  const heavy = new HeavyContainer(50000, "Detroit", 7500)
  shipping.addContainer(lightContainer)
  shipping.addContainer(heavy)

  expect(shipping.getTotalWeight()).toBe(59500);

});

test("getTotalWeight returns the combined gross weight of the containers in the array.", ()=>{
  const shipping = new Ship(100000)
  const lightContainer = new LightContainer("Grand Rapids", 2000)
  const heavy = new HeavyContainer(50000, "Detroit", 7500)
  const heavy2 = new HeavyContainer(9000, "Detroit", 8000)
  shipping.addContainer(lightContainer)
  shipping.addContainer(heavy)
  shipping.addContainer(heavy2)

  expect(shipping.getTotalWeight()).toBe(76500);

});

test("getTotalWeight returns 0 when containers is empty.", ()=>{
  const shipping = new Ship(100000)
  
  expect(shipping.getTotalWeight()).toBe(0);

});

  test("isOverweight returns true when the total weight is greater than maxWeight.", ()=>{
      const shipping =  new Ship(100000)
      const heavy = new HeavyContainer(5000, "Grand Rapids",98000)
      shipping.addContainer(heavy)

      expect(shipping.isOverWeight()).toBe(true)

    });

    test("isOverweight returns false when the total weight is greater than maxWeight.", ()=>{
      const shipping =  new Ship(100000)
      const light = new LightContainer("Detroit", 2000)
      shipping.addContainer(light)

      expect(shipping.isOverWeight()).toBe(false)

    });

    test("isOverweight returns false when the total weight is equal to maxWeight.", ()=>{
      const shipping =  new Ship(100000)
      const heavy = new HeavyContainer(5000, "Grand Rapids", 95000)
      shipping.addContainer(heavy)

      expect(shipping.isOverWeight()).toBe(false)

    });