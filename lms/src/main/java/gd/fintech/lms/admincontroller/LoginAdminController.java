package gd.fintech.lms.admincontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import gd.fintech.lms.adminservice.LoginAdminService;

@Controller
public class LoginAdminController {
	@Autowired LoginAdminService loginAdminService;

}
