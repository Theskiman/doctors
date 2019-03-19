const newDoctor = (name, specialty, address) => {
    return{
    name: name,
    specialty: specialty,
    address: address

}
}

let bradd = newDoctor("brad", "dumbocologist", "nowhere");
console.log(bradd)