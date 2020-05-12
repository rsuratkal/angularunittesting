import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';

describe('HeroesComponent',()=>{
    let comp:HeroesComponent;
    let service;
    let HEROES =[
        {id:1,name:'Spiderman', strength:5},
        {id:2,name:'Superman', strength:10},
        {id:3,name:'Batman', strength:3}
    ];
    
    beforeEach(()=>{
        service=jasmine.createSpyObj(['deleteHero'])
        comp=new HeroesComponent(service);
    });

    describe('delete method',()=>{

        it('should remove the indicated hero from the heros list',()=>{
            comp.heroes = HEROES;
            service.deleteHero.and.returnValue(of(true));
            comp.delete(HEROES[1]);

            expect(comp.heroes.length).toBe(2);
        });

        it('it should call deleteHero in service',()=>{
            comp.heroes = HEROES;
            service.deleteHero.and.returnValue(of(true));
            comp.delete(HEROES[1]);

            expect(service.deleteHero).toHaveBeenCalled();
        })

        it('it should call deleteHero in service with correct parameter',()=>{
            comp.heroes = HEROES;
            service.deleteHero.and.returnValue(of(true));
            comp.delete(HEROES[1]);

            expect(service.deleteHero).toHaveBeenCalledWith(HEROES[1]);
        })
    });     
});