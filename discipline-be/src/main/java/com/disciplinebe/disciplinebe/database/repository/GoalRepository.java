package com.disciplinebe.disciplinebe.database.repository;


import com.disciplinebe.disciplinebe.database.entity.EventEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository


public interface GoalRepository extends  JpaRepository<GoalRepository,Integer> {






}

