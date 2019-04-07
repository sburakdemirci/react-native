package com.disciplinebe.disciplinebe.database.repository;

import com.disciplinebe.disciplinebe.database.entity.EventEntity;
import com.disciplinebe.disciplinebe.database.entity.Note;
import com.disciplinebe.disciplinebe.database.entity.UsersEntity;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository


public interface EventRepository extends  JpaRepository<EventEntity,Integer> {

    @Query(value = "SELECT * FROM events as ee Where ee.user_id = ?1",nativeQuery = true)
    List<EventEntity> findByUid(int uid);





}

