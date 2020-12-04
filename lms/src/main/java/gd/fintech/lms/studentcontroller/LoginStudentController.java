package gd.fintech.lms.studentcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import gd.fintech.lms.studentservice.LoginStudentService;

@Controller
public class LoginStudentController {
	@Autowired LoginStudentService loginStudentService;
}
