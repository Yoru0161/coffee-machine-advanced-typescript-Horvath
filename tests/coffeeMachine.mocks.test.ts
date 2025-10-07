import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";
import * as notification from '../src/utils/notifications';

describe('CoffeeMachine notifications (mocks)', () => {
    beforeEach(() =>{
        jest.resetAllMocks()
    })
    it('notifies user about serving drink',() => {
        const machine = new CoffeeMachine();
        const drink = new Drink('Coffee',2,false,0,'small');
        const notifyUserSpy = jest.spyOn(notification,'notifyUser').mockImplementation(jest.fn());

        machine.serve(drink,2,false,1);

        expect(notifyUserSpy).toHaveBeenCalled()
        expect(notifyUserSpy).toHaveBeenCalledWith('Serving Coffee (small)')
        expect(notifyUserSpy).toHaveBeenCalledTimes(1)

    });


    it('notifies user about serving drink another',() => {
        const machine = new CoffeeMachine();
        const drink = new Drink('Coffee',2,false,0,'small');
        const notifyUserSpy = jest.spyOn(notification,'notifyUser').mockImplementation(jest.fn());

        machine.serve(drink,2.50,false,1);

        expect(notifyUserSpy).toHaveBeenCalled()
        expect(notifyUserSpy).toHaveBeenCalledWith('Serving Coffee (small) with change 0.50')
        expect(notifyUserSpy).toHaveBeenCalledTimes(1)

    });
});
