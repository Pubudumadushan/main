package lk.bitproject.user;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Table(name = "user")
@Data

public class User {
    @Id
    @Column(name = "id",unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)//AI
    private Integer id; 

    @Column(name = "username")
    @NotNull
    private String username ;

    @Column(name = "password")
    @NotNull
    private String password ;

    @Column(name = "email")
    @NotNull
    private String email;

    @Column(name = "photograph")
    private String photograph;

    @Column(name = "status")
    @NotNull
    private String status ;

    @Column(name = "added_datetime")
    @NotNull
    private String added_datetime;

    @Column(name = "note")
    private String note;
}
