package gd.fintech.lms.operatorcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import gd.fintech.lms.operatorservice.LoginOperatorService;

@Controller
public class LoginOperatorController {
	@Autowired LoginOperatorService loginOperatorService;
}
