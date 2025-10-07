import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";

describe('CoffeeMachine errors', () => {

    it('throw too much srugar error',() => {
        const machine = new CoffeeMachine();
        const drink = new Drink('Latte',3.5,true,6,'medium');

        const wrapper = () => machine.serve(drink,2,false,1);

        expect(wrapper).toThrow('Too much sugar');
    });

    it('throws not enough money error',() => {
        const machine = new CoffeeMachine();
        const drink = new Drink('Latte',3.5,true,6,'medium');

        const wrapper = () => machine.serve(drink,1.5,false,1);

        expect(wrapper).toThrow('Not enough money');
    });
});
