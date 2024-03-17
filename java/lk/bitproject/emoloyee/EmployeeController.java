package lk.bitproject.emoloyee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


@RestController //implemented sevice mapping available for use
@RequestMapping(value = "/employee")//class level mapping
public class EmployeeController {



    @Autowired // inject employee repository object into variable
    private EmployeeRepository employeeDao;

    

    @GetMapping
	public ModelAndView employee(){

		ModelAndView testView = new ModelAndView();
		testView.setViewName("employee.html");

		return testView;
	}




    //define mapping for employee ui
    public ModelAndView employeeUI(){

        ModelAndView employeeView = new ModelAndView();
        employeeView.setViewName("employee.html");


        return employeeView;


    }





    //create get mapping for find all            //data return type(Json/text/xml)
    //@GetMapping(value = "/employee/findall",produces = "application/json")
    @GetMapping(value = "/findall",produces = "application/json")
    public List <Employee> findAll(){

        return employeeDao.findAll();
    }

    //define mapping for get employee object by given id [/employee/getbyid/1]
    //@GetMapping(value="/employee/getbyid{id}")
    //@GetMapping(value="/getbyid{id}")

    //define mapping for employee post employee service [/employee] save
    //@PostMapping(value="/employee/")
    //@PostMapping
}
