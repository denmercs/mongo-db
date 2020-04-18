/** MONGO-DB **/

//commands on shell

show dbs
use flights
db.flightData.insertOne({
       {
        "departureAirport": "MUC",
        "arrivalAirport": "SFO",
        "distance": 12000,
        "intercontinental": true
    }
})

db.flightData.find().pretty()

// CRUD OPERATIONS

// CREATE
insertOne(data, options)
insertMany(data, options)

// READ
find(filter, options)
findOne(filter, options)ß

// UPDATE
updateOne(filter, data, options)
updateMany(filter, data, options)
update({filter, data, options}) // --> this will update everything on the data and just leave what you set as parameter

// DELETE
deleteOne(filter, options)
deleteMany(filter, options)

 
db.passengers.find().forEach((passengerData) => {
    {printjson(passengerData)}
})

// projection
db.passengers.find({}, {name: 1}).pretty()
db.passengers.find({}, {name: 1, _id: 0}).pretty() // don't include the ID

// embedded documents
db.flightData.updateMany({}, {$set: {status: {description: "one-time", lastUpdated: "1 hour ago", details: {responsible: "Dennis"}}}})

db.passengers.updateOne({name: "Albert Twostone"}, {$set: {hobbies: ["sports", "cooking"]}})
db.passengers.findOne({name: "Albert Twostone"}).hobbies.pretty()
//query objects
db.flightData.find({"status.description": "on-time"}).pretty()


// DATA SCHEMAS AND DATA MODELING
use companyData;
db.companies.insertOne({name: "Fresh Apples Inc", isStartup: true, employees: 33, funding: 12345, details: {ceo: "Mark Super"}, tags: [{title: "super", {title: "perfect"], foundingDate: new Date(), insertedAt: new Timestamp()})
db.companies.findOne();