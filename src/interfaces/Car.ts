export default interface CarI {
    name: string,
    version: string,
    image: string,
    imageXS: string,
    id: string,
    info: {
        priceForDay: number,
        engine: string,
        typeOfEngine: string,
        trunkCapacity: number,
        typeOfDrive: string,
        maximumSpeed: number,
        doors: number,
        persons: number,
        color: string,
        yearOfProduction: number,
    }
}