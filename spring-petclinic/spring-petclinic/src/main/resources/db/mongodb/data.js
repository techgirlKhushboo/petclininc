db.vets.insertMany([
    { "_id": 1, "firstName": "James", "lastName": "Carter" },
    { "_id": 2, "firstName": "Helen", "lastName": "Leary" },
    { "_id": 3, "firstName": "Linda", "lastName": "Douglas" },
    { "_id": 4, "firstName": "Rafael", "lastName": "Ortega" },
    { "_id": 5, "firstName": "Henry", "lastName": "Stevens" },
    { "_id": 6, "firstName": "Sharon", "lastName": "Jenkins" }
]);

db.specialties.insertMany([
    { "_id": 1, "name": "radiology" },
    { "_id": 2, "name": "surgery" },
    { "_id": 3, "name": "dentistry" }
]);

db.vet_specialties.insertMany([
    { "vetId": 2, "specialtyId": 1 },
    { "vetId": 3, "specialtyId": 2 },
    { "vetId": 3, "specialtyId": 3 },
    { "vetId": 4, "specialtyId": 2 },
    { "vetId": 5, "specialtyId": 1 }
]);

db.types.insertMany([
    { "_id": 1, "name": "cat" },
    { "_id": 2, "name": "dog" },
    { "_id": 3, "name": "lizard" },
    { "_id": 4, "name": "snake" },
    { "_id": 5, "name": "bird" },
    { "_id": 6, "name": "hamster" }
]);

db.owners.insertMany([
    { "_id": 1, "firstName": "George", "lastName": "Franklin", "address": "110 W. Liberty St.", "city": "Madison", "telephone": "6085551023" },
    { "_id": 2, "firstName": "Betty", "lastName": "Davis", "address": "638 Cardinal Ave.", "city": "Sun Prairie", "telephone": "6085551749" },
    { "_id": 3, "firstName": "Eduardo", "lastName": "Rodriquez", "address": "2693 Commerce St.", "city": "McFarland", "telephone": "6085558763" },
    { "_id": 4, "firstName": "Harold", "lastName": "Davis", "address": "563 Friendly St.", "city": "Windsor", "telephone": "6085553198" },
    { "_id": 5, "firstName": "Peter", "lastName": "McTavish", "address": "2387 S. Fair Way", "city": "Madison", "telephone": "6085552765" },
    { "_id": 6, "firstName": "Jean", "lastName": "Coleman", "address": "105 N. Lake St.", "city": "Monona", "telephone": "6085552654" },
    { "_id": 7, "firstName": "Jeff", "lastName": "Black", "address": "1450 Oak Blvd.", "city": "Monona", "telephone": "6085555387" },
    { "_id": 8, "firstName": "Maria", "lastName": "Escobito", "address": "345 Maple St.", "city": "Madison", "telephone": "6085557683" },
    { "_id": 9, "firstName": "David", "lastName": "Schroeder", "address": "2749 Blackhawk Trail", "city": "Madison", "telephone": "6085559435" },
    { "_id": 10, "firstName": "Carlos", "lastName": "Estaban", "address": "2335 Independence La.", "city": "Waunakee", "telephone": "6085555487" }
]);

db.pets.insertMany([
    { "_id": 1, "name": "Leo", "birthDate": new Date("2000-09-07"), "typeId": 1, "ownerId": 1 },
    { "_id": 2, "name": "Basil", "birthDate": new Date("2002-08-06"), "typeId": 6, "ownerId": 2 },
    // Insert other pets here...
]);

db.visits.insertMany([
    { "_id": 1, "petId": 7, "visitDate": new Date("2010-03-04"), "description": "rabies shot" },
    { "_id": 2, "petId": 8, "visitDate": new Date("2011-03-04"), "description": "rabies shot" },
    // Insert other visits here...
]);
