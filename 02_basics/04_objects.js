// const tinderUser = new Object()          //singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname); //use ? for optional chaining
// protection if fullname is not present from api

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  //obeject within object
// const obj3 = Object.assign({}, obj1, obj2, obj4) {} is a target object

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//objects within array
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));     //key value pair into array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));        //prevent from crashing

//*************************************** */

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


// course.courseInstructor

const {courseInstructor: instructor} = course//(from where)

// console.log(courseInstructor);
console.log(instructor);    //object destructure

//example of destructuring in react
// const navbar = ({company} or props.company) => {

// }
// navbar (company = "hitesh")

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",                 //JSON format(No name diff from object)
//     "price": "free"
// }

[
    {},                                             //object in arrays / jsonformatter / random user me api // tree
    {},                 //api inform of arrays
    {}
]
