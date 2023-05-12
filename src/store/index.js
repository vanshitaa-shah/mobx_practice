import { action, autorun, computed, makeAutoObservable, makeObservable, observable, reaction, runInAction, when } from "mobx";

class Store{
    count=0;
    showComputedValue=false;
    disposer;
    constructor() {
        // makeObservable(this, {
        //     count: observable,
        //     doubledCount: computed,
        //     increment: action,
        //     decrement: action
        // })
        makeAutoObservable(this)

        runInAction(()=>console.log("Count :",this.count))
        this.disposer=autorun(() => console.log(this.count))
        reaction(() => this.count,(count) => {
              if (count <0) {
                console.log("Count is now negative");
              }
            }
          );

        when(()=>this.count<0,this.logger //one time run 
        );
        
    }


    get doubledCount(){
        return this.count*2;
    }

    logger(){
        console.log("Here");
    }
    increment(){
        this.count+=1;
    }

    decrement(){
        this.count-=1;
    }

    disposer(){
        this.disposer()
    }

    toggleComputedValue(){
        this.showComputedValue=!this.showComputedValue;
    }
}

export default new Store();