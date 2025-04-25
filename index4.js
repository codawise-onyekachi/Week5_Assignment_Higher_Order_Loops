
const drugs = [

    { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },
   
    { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
   
    { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
   
    { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
   
    { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
   
    { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
   
    { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
   
    { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
   
    { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
   
    { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
   
    { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
   
    { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
   
    { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
   
    { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
   
    { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
   
    { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },
   
    { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
   
    { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
   
    { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
   
    { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }
   
   ]

//Get all drugs that are antibiotics, using filter()
const allAntibioticDrugs = drugs.filter(function(each) {
    return each.category == "Antibiotic" 
})

console.log(allAntibioticDrugs)


console.log(" ") // for spacing between one display of solution from another 


// Return an array of drug names in lowercase, using map() and .toLowerCase()
const drugsNameInLowercase = drugs.map(function (each) {
    return{
        name: each.name.toLowerCase()
    }})

console.log(drugsNameInLowercase)


console.log(" ") // for spacing between one display of solution from another


//function that accepts a category and returns all drugs under that category, using filter() and comparison operators
function drugsCategory(category = " ") {


    return drugs.filter(function(each){
         return each.category === category
        });
    
}

const getCategory = drugsCategory("Supplement")
console.log(getCategory)


console.log(" ") // for spacing between one display of solution from another


//Log each drug’s name and its manufacturer, using map()

const drugNameAndManufacturer = drugs.map( function (each) {
    return {
        name: each.name,
        manufacturer: each.manufacturer
    }
})

console.log(drugNameAndManufacturer)


console.log(" ") // for spacing between one display of solution from another


// Return all drugs that require a prescription, using filtter(), and comparison operators

const prescriptionDrugs = drugs.filter(function(each) {
    return each.isPrescriptionOnly == true
})

console.log(prescriptionDrugs)


console.log(" ") // for spacing between one display of solution from another


//Return a new array, each item should follow the format: "Drug: [name] - [dosageMg]mg", using map() and ``

const newDrugArray = drugs.map(function (each) {
    return `Drugs:[${each.name}] - [${each.dosageMg}]mg`
})

console.log(newDrugArray)


console.log(" ") // for spacing between one display of solution from another


//function that returns all drugs with a stock less than 50, using Filter() and comparison operators

const withStockLessThan50 = drugs.filter( function (each) {
    return each.stock < 50
})

console.log(withStockLessThan50)


console.log(" ") // for spacing between one display of solution from another


// Return all drugs that are not prescription-only, using filtter(), and comparison operators

const notPrescriptionDrugs = drugs.filter(function(each) {
    return each.isPrescriptionOnly == false
})

console.log(notPrescriptionDrugs)


console.log(" ") // for spacing between one display of solution from another



//function that takes a manufacturer name and returns how many drugs are from that company, using Filter() and Comparison operators
function drugsManufacturerName(manufacturer = " ") {

    return drugs.filter(function(each){
            return each.manufacturer === manufacturer
    }).length
    
}
const getNumberOfManufacturerName = drugsManufacturerName("GSK")
console.log(getNumberOfManufacturerName)


console.log(" ") // for spacing between one display of solution from another


//Using forEach() to count how many drugs are Analgesics

let analgesicsCount = 0
drugs.forEach( function( each) {
    if(each.category === "Analgesic") {
        analgesicsCount++
    }
}) 

console.log(analgesicsCount)
