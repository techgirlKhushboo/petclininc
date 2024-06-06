// vets collection
db.createCollection("vets");
db.vets.createIndex({ "last_name": 1 });

// specialties collection
db.createCollection("specialties");
db.specialties.createIndex({ "name": 1 });

// vet_specialties collection
db.createCollection("vet_specialties");
db.vet_specialties.createIndex({ "vet_id": 1, "specialty_id": 1 }, { unique: true });

// types collection
db.createCollection("types");
db.types.createIndex({ "name": 1 });

// owners collection
db.createCollection("owners");
db.owners.createIndex({ "last_name": 1 });

// pets collection
db.createCollection("pets");
db.pets.createIndex({ "name": 1 });
db.pets.createIndex({ "owner_id": 1 });
db.pets.createIndex({ "type_id": 1 });

// visits collection
db.createCollection("visits");
db.visits.createIndex({ "pet_id": 1 });
