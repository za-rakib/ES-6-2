class student {
    constructor(sId, sName){
      this.id = sId;
      this.sName = sName;
      this.school = 'BN school';

    }
}

const student1 = new student ( 12,'Rakib');
const student2 = new student (13,'Masum');
console.log(student1, student2);