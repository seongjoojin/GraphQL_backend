export const people = [
    {
        id: "0",
        name: "Evan",
        age: 18,
        gender: "male"
    },
    {
        id: "1",
        name: "Dal",
        age: 18,
        gender: "male"
    },
    {
        id: "2",
        name: "JD",
        age: 18,
        gender: "male"
    },
    {
        id: "3",
        name: "flynn",
        age: 18,
        gender: "male"
    },
    {
        id: "4",
        name: "Jisu",
        age: 18,
        gender: "male"
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id))
    return filteredPeople[0]
}