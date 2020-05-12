import { StrengthPipe } from './strength.pipe';
describe('Strength pipe',()=>{
    

    it('should display weak when value is 5',()=>{
        let pipe =new StrengthPipe();

        let test = pipe.transform(5);

        expect(test).toEqual('5 (weak)');
    });

    it('should display weak when value is 12',()=>{
        let pipe =new StrengthPipe();

        let test = pipe.transform(12);

        expect(test).toEqual('12 (strong)');
    });
    //strong test

})