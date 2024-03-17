package lk.bitproject.privilege;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lk.bitproject.Module;
import lk.bitproject.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "privilege")
@Data
@AllArgsConstructor
@NoArgsConstructor



public class Privilege {


    @Id
    @Column(name = "id",unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name ="module_id",referencedColumnName = "id")
    private Module module_id;

    @ManyToOne
    @JoinColumn(name ="role_id",referencedColumnName = "id")
    private Role role_id;

    @Column(name ="sel")
    @NotNull
    private Integer sel;

    @Column(name ="inst")
    @NotNull
    private Integer inst;

    @Column(name ="del")
    @NotNull
    private Integer del;

    @Column(name ="upd")
    @NotNull
    private Integer upd;
    
}
