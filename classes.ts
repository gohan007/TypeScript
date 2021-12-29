class Customer{
    firstname:string;
    lastname:string;

    constructor(theFirst:string , theLast:string){
        this.firstname=theFirst;
        this.lastname=theLast;
    }
}

//instance

let myCustomer=new Customer("Mithilesh","Kumar");
/*
myCustomer.firstname="Mithilesh";
myCustomer.lastname="Kumar";
*/
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);