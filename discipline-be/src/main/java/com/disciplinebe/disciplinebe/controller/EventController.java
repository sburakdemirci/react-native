package com.disciplinebe.disciplinebe.controller;


import com.disciplinebe.disciplinebe.database.entity.EventEntity;
import com.disciplinebe.disciplinebe.database.entity.UsersEntity;
import com.disciplinebe.disciplinebe.database.repository.EventRepository;
import com.disciplinebe.disciplinebe.database.repository.UsersRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    EventRepository eventRepository;

    @Autowired
    UsersRepository usersRepository;

    //toDo session yada token verebilirsin.
    @RequestMapping(method = RequestMethod.GET, value = "/addEvent")
    public boolean addEvent(@RequestParam Integer userId, @RequestParam String eventName) {
        try {
            EventEntity eventEntity = new EventEntity();
            eventEntity.setEvent_name(eventName);
            eventEntity.setUser_id(usersRepository.findByUid(userId));
            eventRepository.save((eventEntity));
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }


    @RequestMapping(method = RequestMethod.GET, value = "/getEventByUserId")
    public List<EventEntity> getEventByUserId(@RequestParam Integer userId) {
        List<EventEntity> list = new ArrayList<>();
        list=eventRepository.findByUid(userId);


        return list;

    }
}
