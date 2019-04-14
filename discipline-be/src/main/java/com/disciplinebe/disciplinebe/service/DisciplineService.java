package com.disciplinebe.disciplinebe.service;

import com.disciplinebe.disciplinebe.database.entity.UsersEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DisciplineService {



    @Autowired
    UserService userService;

//toDo class get testQuestions

//toDo class change test point of user

    public boolean calculetaResult(int userId,int testResult){

        UsersEntity usersEntity = userService.getUserById(userId);
        usersEntity.setDiscipline_level(testResult);

        try {
            userService.updateUser(usersEntity);
            return true;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return false;
        }
    }






    //toDo test yapmak ve puan oluşturmak
}
