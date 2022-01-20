import { LightContainer } from "../src/LightContainer";


    test("The destination property is set from the constructor parameters.", () =>{
        const lightContainer = new LightContainer("Grand Rapids", 1500)

        expect(lightContainer.destination).toBe("Grand Rapids");
    });

    test("The cargoWeight property is set from the constructor parameters.", () =>{
        const lightContainer = new LightContainer("Grand Rapids", 1500)

        expect(lightContainer.cargoWeight).toBe(1500);
    });
   
    test("cargoWeight defaults to 0 when second constructor is omitted", () =>{
        const lightContainer = new LightContainer("Grand Rapids", undefined)

        expect(lightContainer.cargoWeight).toBe(0);
    });

    test("getGrossWeight returns the cargoWeight ", () =>{
        const lightContainer = new LightContainer("Grand Rapids", 2000)

        expect(lightContainer.getGrossWeight()).toBe(2000);
    });

    test("getGrossWeight returns the cargoWeight ", () =>{
        const lightContainer = new LightContainer("Grand Rapids", 4000)

        expect(lightContainer.getGrossWeight()).toBe(4000);
    });



