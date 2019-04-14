package com.disciplinebe.disciplinebe.service;

import com.disciplinebe.disciplinebe.database.entity.GoalEntity;
import com.disciplinebe.disciplinebe.database.repository.GoalRepository;
import com.disciplinebe.disciplinebe.model.GoalModelRequest;
import com.fasterxml.jackson.databind.annotation.JsonAppend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class GoalDatabaseService {

    @Autowired
    UserService userService;

    @Autowired
    GoalRepository goalRepository;

    public boolean addGoal(GoalModelRequest goalModelRequest){
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date=new Date();
        try {
             date = sdf.parse(goalModelRequest.getDeadline().toString());

        }catch (Exception e)
        {
            e.printStackTrace();
            return false;
        }
        java.sql.Date dateSql= new java.sql.Date(date.getTime());
       




        GoalEntity goalEntity=new GoalEntity();

        goalEntity.setUser_id(userService.getUserById(goalModelRequest.getUser_id()));
        if(goalEntity.getUser_id()==null) return false;
        goalEntity.setGoal_name(goalModelRequest.getGoal_name());
        goalEntity.setDeadline(dateSql);
        goalEntity.setGoal_note(goalModelRequest.getGoal_note());
        goalEntity.setOrder_of_priority(1);
        goalEntity.setSelected_week_days(goalModelRequest.getSelected_week_days());
        goalEntity.setCalculated_hours(0);
        goalEntity.setComplated_hours(0);
        goalEntity.setTime_zone_starts(goalModelRequest.getTime_zone_starts());
        goalEntity.setTime_zone_finish(goalModelRequest.getTime_zone_finish());
        goalEntity.setWeekly_work_hours(0);


        try {
            goalRepository.save(goalEntity);
            return true;
        }catch (Exception e)
        {
            e.printStackTrace();
            return false;

        }
    }


}
