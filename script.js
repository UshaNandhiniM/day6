//Task 1

//Creating class Movie
/*
class Movie {
    //creating constructor
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    //for rating = PG if ratings is not mentioned
    if (typeof this.rating === 'undefined') {
    this.rating = 'PG';
    }
    }
   }
   //creating instance of class Movie
   let mov1 = new Movie('KGF', 'Annapurna');
   let mov2 = new Movie('RRR', 'gold', '5');
   console.log(mov1)
    //function to get title list if rating = PG
   function getPG(mov) {
    let res = []
    for (let i = 0; i < mov.length; i++) {
   if (mov[i].rating == 'PG') {
    res.push(mov[i].title);
    }
    }
    return res;
   }
   let arr = [mov1, mov2]
   console.log(getPG(arr))
    //creating instance of class Movie
   let mov3 = new Movie('Casino Royale', 'Eon Productions', 'PG13');
   console.log(mov3);
 */  
//Task 2.
//circle task
/*
class circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    get Radius()
    {
        return this.radius
    }
    set Radius(n)
    {
        this.radius=n;
    }
    get Color(){
        return this.color;
    }
    set Color(c)
{
    this.color=c;
}
    get tostring()
        {
            return `Circle [radius=${this.radius} , color =${this.color}]`
        }
    get area(){
       
        return Math.PI * this.radius * this.radius;
    }
    get circumference()
    {
        return 2*Math.PI*this.radius
    }
}
    let obj=new circle(1.0,"red");
    console.log(obj);
    console.log(obj.Color);
    console.log(obj.Radius);
    console.log(obj.tostring);
    console.log(obj.area);
    console.log(obj.circumference);
*/

//Task 3.
/*
   class Person {
    constructor(name, age, gender, designation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.designation = designation;
    }
    get pName() { return this.name; }
    set pName(p) { this.name = p; }
    get pAge() { return this.age; }
    set pAge(p) { this.age = p; }
    get pGender() { return this.gender; }
    set pGender(p) { this.gender = p; }
    get pDesignation() { return this.designation; }
    set pDesignation(p) { this.designation = p; }
}
let person = new Person('Usha', 21, 'Female', 'Fullstack developer');
console.log(person);
 */
//Task 4.
/*
class Uber {
    distance = 10;
    wait = 5;
    consructor(distance, wait) {
        this.distance = distance;
        this.wait = wait;
    }
    get distance() { return this.distance; }
    set distance(value) { this.distance = value; }
    get wait() { return this.wait; }
    set wait(value) { this.wait = value; }
calculatePrice(dis) {
        let min = 70;
        this.distance = dis;
        let price = dis * 6;
        let res = 0;
        if (min > price) {
            res = min;
        } else {
            res = price;
        }
        console.log(res);
        return res;
}
    calculateWait(w) {
        let res = 0;
this.wait = w;
        let result = 0;
        //30min wait is Rs.100
        if (w > 15 && w < 30) {
            result = 50;
}
        if (w < 15) {
            result = 0;
        }
        if (w > 30) {
            result = Math.floor(w / 30);
            res = result * 100;
}
        console.log(res);
        return res;
    }
}
let raid = new Uber(300, 45);
let p1 = (raid.calculatePrice(300))
let w1 = (raid.calculateWait(45))
console.log(p1 + w1);
*/


    

