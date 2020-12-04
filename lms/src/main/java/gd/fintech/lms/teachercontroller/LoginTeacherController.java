package gd.fintech.lms.teachercontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import gd.fintech.lms.teacherservice.LoginTeacherService;

@Controller
public class LoginTeacherController {
	@Autowired LoginTeacherService loginTeacherService;
}
