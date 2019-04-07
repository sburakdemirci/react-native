package com.disciplinebe.disciplinebe.database.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.apache.catalina.User;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;


@Entity
@Table(name = "events")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"},
        allowGetters = true)
public class EventEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int event_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id", nullable = false)
    private UsersEntity user_name;
//dikkat edersen burada diğer tablonun entity'sini column olarak veriyoruz.


    @Column
    private String event_name;

    public int getEvent_id() {
        return event_id;
    }

    public void setEvent_id(int event_id) {
        this.event_id = event_id;
    }

    public UsersEntity getUser_name() {
        return user_name;
    }

    public void setUser_name(UsersEntity user_name) {
        this.user_name = user_name;
    }

    public String getEvent_name() {
        return event_name;
    }

    public void setEvent_name(String event_name) {
        this.event_name = event_name;
    }
}





