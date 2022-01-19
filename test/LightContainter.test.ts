import { LightContainer } from "../src/LightContainer";



    test("The destination property is set from the constructor parameters.", () =>{
        const lightContainer = new LightContainer("Grand Rapids", 1500)

        expect(lightContainer.destination).toBe("Grand Rapids");
    });

    test("The cargoWeight property is set from the constructor parameters.", () =>{
        const lightContainer = new LightContainer("Grand Rapids", 1500)

        expect(lightContainer.cargoWeight).toBe(1500);
    });
   



