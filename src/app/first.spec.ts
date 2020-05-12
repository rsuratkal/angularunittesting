describe('first-test',()=>{
    let testingBool;

    beforeEach(()=>{
        testingBool = {};
    });

    it('true is true',()=>{
        testingBool.a='a';

        testingBool.a='c';

        expect(testingBool.a).toEqual('c');
    });
});