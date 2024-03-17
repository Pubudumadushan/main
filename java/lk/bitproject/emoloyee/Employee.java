package lk.bitproject.emoloyee;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lk.bitproject.Designation;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.LocalDateTime;




@Entity
@Table(name = "employee")//for map data
@Data
@NoArgsConstructor//defult constructor
@AllArgsConstructor//all argument constructor


 //GETTER SETTER
public class Employee {

    @Id
    @Column(name = "id",unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)//AI
    private Integer id;


    @Column( name = "empnumber", unique = true,length = 10)
    @NotNull //not null
    private Integer empnumber;

    @Column(name = "fullname")
    @NotNull
    // @Length(max = 10,min = 10, message = "")
    private String fullname;

    @Column(name= "nic", unique = true,length = 12)
    @NotNull
    private String nic;

    @Column(name = "mobile")
    @NotNull
    private String mobile;


    @ManyToOne
    @JoinColumn(name ="designation_id",referencedColumnName = "id")
    private Designation designation_id;
    
    
    @ManyToOne
    @JoinColumn(name ="empstatus_id",referencedColumnName = "id")
    private EmployeeStatus empstatus_id;

    @Column(name = "email")
    @NotNull
    private String email;

    @Column(name = "landno")
    private String landno;

    @Column(name = "note")
    private String note;

    @Column(name = "dob")
    private LocalDate dob;

    @Column(name = "civilstatus")
    @NotNull
    private String civilstatus;

    @Column(name = "address")
    @NotNull
    private String address;

    @Column(name = "added_datetime")
    private LocalDateTime added_datetime;

    private String gender;
    
}
