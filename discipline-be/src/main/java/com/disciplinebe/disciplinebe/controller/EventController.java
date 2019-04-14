package com.disciplinebe.disciplinebe.controller;




import com.disciplinebe.disciplinebe.database.entity.EventEntity;
import com.disciplinebe.disciplinebe.database.entity.UsersEntity;
import com.disciplinebe.disciplinebe.database.repository.EventRepository;
import com.disciplinebe.disciplinebe.database.repository.UsersRepository;


import com.disciplinebe.disciplinebe.model.EventModelRequest;
import com.disciplinebe.disciplinebe.service.EventDatabaseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/event")
public class EventController {


    @Autowired
    EventDatabaseService eventDatabaseService;

    //toDo session yada token verebilirsin.


    @RequestMapping(method = RequestMethod.POST, value = "/addEvent")
    public boolean addEvent(@RequestParam Integer userId, @RequestBody EventModelRequest eventRequest) {

        return eventDatabaseService.addEvent(eventRequest);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getEventByUserId")
    public List<EventEntity> getEventByUserId(@RequestParam Integer userId) {
        List<EventEntity> list = new ArrayList<>();
       // list=eventRepository.findByUid(userId);
        return list;

    }

    //toDo pathvariable ve requestparam arasındaki farklı öğren ve diğer annotations'ları
}
