package com.disciplinebe.disciplinebe.database.repository;



import java.util.List;

import com.disciplinebe.disciplinebe.database.entity.EventEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository


public interface EventRepository extends  JpaRepository<EventEntity,Integer> {

    @Query("SELECT ue From EventEntity ue Where ue.event_id = ?1")
    List<EventEntity> findByUid(int uid);





}

