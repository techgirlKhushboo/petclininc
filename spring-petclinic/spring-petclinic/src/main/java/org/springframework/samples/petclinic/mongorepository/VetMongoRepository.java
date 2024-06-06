package org.springframework.samples.petclinic.mongorepository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.samples.petclinic.vet.Vet;

public interface VetMongoRepository extends MongoRepository<Vet, Integer> {

	 List<Vet> findAll();

	 Page<Vet> findAll(Pageable pageable);
}
