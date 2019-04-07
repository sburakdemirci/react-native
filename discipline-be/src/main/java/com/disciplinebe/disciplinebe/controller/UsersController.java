package com.disciplinebe.disciplinebe.controller;


import com.disciplinebe.disciplinebe.database.entity.UsersEntity;
import com.disciplinebe.disciplinebe.database.repository.UsersRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    UsersRepository usersRepository;

//@RequestParam(required = false) String email yazabilirsin.
    //toDo session yada token verebilirsin.
    @RequestMapping(method = RequestMethod.GET, value = "/signIn")
    public boolean usersEntities(@RequestParam String email , @RequestParam String password ) {

        UsersEntity usersEntity = usersRepository.findByMail(email);
        if(usersEntity!=null && usersEntity.getPassword().equals(password))
        {
            return true;
        }
        return false;
    }

//toDo ilerde asyncstoroge'ye token kaydedip 1 günde birden fazla üyelik almamasını sağlayabilirsin.


    @RequestMapping(method = RequestMethod.GET, value = "/signUp")
    public boolean usersEntity(@RequestParam String name ,@RequestParam String email , @RequestParam String password ) {
        UsersEntity newUser = new UsersEntity();
        newUser.setName(name);
        newUser.setEmail(email);
        newUser.setPassword(password);
        UsersEntity userControl =usersRepository.findByMail(email);
                if( userControl ==null ) {
                    try {
                        usersRepository.save(newUser);
                        return true;
                    } catch (DataAccessException ex) {
                        ex.printStackTrace();
                        return false;
                    }
                }
                return false;
    }



}
