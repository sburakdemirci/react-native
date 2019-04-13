package com.disciplinebe.disciplinebe.database.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository


public interface QuotesRepository extends  JpaRepository<QuotesRepository,Integer> {

    @Query(value = "SELECT * FROM events as ee Where ee.user_id = ?1",nativeQuery = true)
    List<QuotesRepository> findByUid(int uid);





}

