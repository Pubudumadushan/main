package lk.bitproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@SpringBootApplication
@RestController //implemented sevice mapping available for use

public class BitprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(BitprojectApplication.class, args);

		System.out.println("***************************************************************");
		System.out.println("***************************************************************");
		System.out.println("**************************Running******************************");
		System.out.println("***************************************************************");
		System.out.println("***************************************************************");
		

		//test();
		
	}


	public static void test(){

		System.out.println("test");
	}

	//method level mapping
	@RequestMapping(value = "/")
	public String testData(){

		return "<h1>Welcome</h1>";
	}


	// 01
	@RequestMapping(value = "/hi", method = RequestMethod.GET)
	public String hi(){

		return "<h1>hi</h1>";
	}

	// 02
	//@GetMapping(value = "/hi") <--new mapping type
	// @PostMapping
	// @PutMapping
	// @DeleteMapping

	//duplicate mapping error
	// @RequestMapping(value = "/hi")
	// public String nhi(){

	// 	return "<h1>hi</h1>";
	// }


	@RequestMapping(value ="/testui")
	public ModelAndView testUI(){

		ModelAndView testView = new ModelAndView();
		testView.setViewName("test.html");

		return testView;
	}

	

	



}
