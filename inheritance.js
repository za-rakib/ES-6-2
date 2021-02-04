class Father {
    constructor(fName){
        this.fName ="Abdul Malek";
    }
}

class Child extends Father{
    constructor(name){
        super();
      this.name = name;
    }
}

const child1 = new Child('Rakib');
console.log(child1);