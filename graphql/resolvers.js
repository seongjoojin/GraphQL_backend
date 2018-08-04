const evan = {
    name: "Evan",
    age: 18,
    gender: "male"
}

const resolvers = {
    Query: {
        person:() => evan
    }    
}

export default resolvers