import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";

describe('CoffeeMachine basic', () => {
  it('serves small coffee with exact money', () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee",2,false,0,'small');

    const result = machine.serve(drink,2,false,10);

    expect(result).toBe('serving Coffee (small)')
  });

  it('serves tea and returns change', () => {

  });

  it('applies milk surcharge', () => {

  });

  it('applies sugar surcharge above 2 cubes', () => {

  });
});
