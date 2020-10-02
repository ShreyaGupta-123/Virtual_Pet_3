class Food {
    constructor(){
    this.foodStock=0;
    this.image=loadImage('./images/Milk.png');
    }
  
    // hide(){
    //   addTheFood.hide();
    //   feedTheDog.hide();
    // }
  
  
   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }
  
    getFoodStock(){
      return this.foodStock;
    }

    updateFoodStock(foodStock){
        this.foodStock=foodStock;
    }

    bedroom(){
      background(bedroomImg,550,550);
    }

    garden(){
      background(gardenImg,550,550);
    }

    washroom(){
      background(washroomImg,550,550)
    }

  
    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
   
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }

  
  }