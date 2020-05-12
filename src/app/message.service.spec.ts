import { MessageService } from './message.service';

describe('Message Service',()=>{

    //create service variable
    let service:MessageService;

    beforeEach(()=>{
        service=new MessageService();
    });

    it('should have no message to start',()=>{
        
        expect(service.messages.length).toBe(0);
    })

    it('should add a message when add is called',()=>{
        

        service.add('test');

        expect(service.messages.length).toBe(1);
        expect(service.messages[0]).toEqual('test');
    })

    it('should remove all messages when clear is called',()=>{
        service.add('test');

        service.clear();

        expect(service.messages.length).toBe(0);
    })
});