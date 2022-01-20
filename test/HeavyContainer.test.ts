import { HeavyContainer } from "../src/HeavyContainer";
    
    
    test("The tareWeight property is set from the constructor parameters.", () =>{
      const heavy = new HeavyContainer(5000, "Grand Rapids", 7000)

      expect(heavy.tareWeight).toBe(5000);
  });

  test("The destination property is set from the constructor parameters.", () =>{
      const heavy = new HeavyContainer(5000, "Grand Rapids", 7000)

      expect(heavy.destination).toBe("Grand Rapids");
  });
 
  test("cargoWeight property is set from the constructor parameters.", () =>{
      const heavy = new HeavyContainer(5000, "Grand Rapids", 7000)

      expect(heavy.cargoWeight).toBe(7000);
  });

  test("cargoWeight defaults to 0 when second constructor is omitted", () =>{
      const heavy = new HeavyContainer(5000, "Grand Rapids", undefined)

      expect(heavy.cargoWeight).toBe(0);
  });

  test("cargoWeight defaults to 0 when second constructor is omitted", () =>{
      const heavy = new HeavyContainer(5000, "Grand Rapids", 7000)

      expect(heavy.getGrossWeight()).toBe(12000);
  });

  test("cargoWeight defaults to 0 when second constructor is omitted", () =>{
    const heavy = new HeavyContainer(5000, "Grand Rapids", 5000)

    expect(heavy.getGrossWeight()).toBe(10000);
});