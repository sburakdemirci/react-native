package com.disciplinebe.disciplinebe.database.repository;



import com.disciplinebe.disciplinebe.database.entity.RoutineEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository


public interface RoutineRepository extends  JpaRepository<RoutineEntity,Integer> {

    @Query("SELECT ue From RoutineEntity ue Where ue.routine_id = ?1")
    List<RoutineEntity> findByUid(int uid);




}

