package com.disciplinebe.disciplinebe.database.repository;

import com.disciplinebe.disciplinebe.database.entity.EventEntity;
import com.disciplinebe.disciplinebe.database.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends  JpaRepository<EventEntity,Integer> {
}

