using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;
using JimbotAdminHub.Data;
using JimbotAdminHub.Data.Entities.App;
using JimbotAdminHub.Data.Entities.User;
using JimbotAdminHub.Data.Respositories.User;
using Microsoft.AspNetCore.Mvc;
using JimbotAdminHub.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;

namespace JimbotAdminHub.Controllers
{
    public class HomeController : Controller
    {
        private readonly IUserRepository _repository;
        /*
         * The userManager is for handling user creation & deletion
         */
        protected UserManager<User> _userManager;
        /*
         * The signInManager is for handling signing in and out
         */
        protected SignInManager<User> _signInManager;

        public HomeController(
            IUserRepository repository, 
            UserManager<User> userManager,
            SignInManager<User> signInManager
            )
        {
            _repository = repository;
            _signInManager = signInManager;
            _userManager = userManager;

        }
        public IActionResult Index()
        {
            var productList = _repository.GetAllProducts();
            return View(productList);
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";
           

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }


        public async Task<IActionResult> LoginAsync([FromBody] LoginCred value , string returnUrl)
        {
            //Signout any existing user if one is logged in
            await HttpContext.SignOutAsync(IdentityConstants.ApplicationScheme);
            // Log user in
            var result = await _signInManager.PasswordSignInAsync(value.UserName, value.Password, true, true);

            if (result.Succeeded)
            {
                // If there is no return URL go to home page
                if (string.IsNullOrEmpty(returnUrl))
                {
                    // GO to Home page
                    return RedirectToAction(nameof(Index));
                }
                // Else return to url inwhich user was redirected to login from
                return Redirect(returnUrl);
            }
            return Content("Failed to login", "text/html");
        }

        public async Task<IActionResult> LogOutAsync()
        {
            await HttpContext.SignOutAsync(IdentityConstants.ApplicationScheme);
            return Content("Successfully Logged Out");
        }
       

       
    }
}
