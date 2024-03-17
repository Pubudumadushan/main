package lk.bitproject.user;
// package lk.bitproject;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.servlet.ModelAndView;

// @RestController
// @RequestMapping
// public class UserController {

//     @Autowired
//     private UserRepository userDao;



//     //define mapping for user ui
//     public ModelAndView userUi(){

//         ModelAndView userView = new ModelAndView();
//         userView.setViewName("user.html");

//         return userView;
//     }


//     //Create mapping for find all
//     @GetMapping(value= "/findall",produces = "application/json")
//     public List <User> findAll(){

//         return userDao.findAll();
//     }
    
// }
