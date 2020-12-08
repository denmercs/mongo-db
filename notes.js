/** MONGO-DB **/

//commands on shell

show dbs;
use flights;
db.flightData.insertOne(
    {
        departureAirport: "MUC",
        arrivalAirport: "SFO",
        aircraft: "Airbus A380",
        distance: 12000,
        intercontinental: true
    },
    {
        departureAirport: "LHR",
        arrivalAirport: "TXL",
        aircraft: "Airbus A320",
        distance: 12000,
        intercontinental: true
    }
)

db.flightData.find().pretty()

// CRUD OPERATIONS

// CREATE
insertOne(data, options)
insertMany(data, options)

// READ
find(filter, options)
findOne(filter, options)

db.flightData.find({departureAirport: "MUC"})
db.flightData.find({distance: {$gt: 10000}}).pretty();
db.flightData.find({distance: {$gt: 10000}}).pretty();
db.flightData.find({distance: {$gt: 900}}).toArray();
db.flightData.find({distance: {$gt: 900}}).forEach(data => {printjson(data)});

// UPDATE
updateOne(filter, data, options)
updateMany(filter, data, options)
update({filter, data, options}) // --> this will update everything on the data and just leave what you set as parameter

db.flightData.updateOne({distance: 12000}, {$set: {marker: "delete"}})
db.flightData.updateMany({}, {$set: {marker: "toDelete"}})
db.flightData.insertMany([
    {
        departureAirport: "MUC",
        arrivalAirport: "SFO",
        aircraft: "Airbus A380",
        distance: 12000,
        intercontinental: true
    },
    {
        departureAirport: "LHR",
        arrivalAirport: "TXL",
        aircraft: "Airbus A320",
        distance: 12000,
        intercontinental: true
    }
])

db.flightData.updateOne({_id: ObjectId("1253251235w54asf34134")}, {$set: {delayed: true}})
db.flightData.update({_id: ObjectId("1253251235w54asf34134")}, {delayed: true}) // --> this will overwrite the existing object and return only id and delayed


// DELETE
deleteOne(filter, options)
deleteMany(filter, options)
db.flightData.deleteMany({marker: "toDelete"})

 
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