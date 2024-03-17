
package lk.bitproject;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NoArgsConstructor;



@Entity
@Table(name = "designation")
@Data

@NoArgsConstructor//defult constructor
@AllArgsConstructor//all argument constructor


public class Designation {

    @Id
    @Column(name = "id", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private Integer id ;

    @Column(name = "name")
    @NotNull
    private String  name ;
    
}
