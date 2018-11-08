using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JimbotAdminHub.Data;
using JimbotAdminHub.Data.Entities.User;
using JimbotAdminHub.Data.Respositories.User;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.Expressions;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JimbotAdminHub.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;
        /*
         * The userManager is for handling user creation & deletion
         */
        protected UserManager<User> _userManager;
        /*
         * The signInManager is for handling signing in and out
         */
        protected SignInManager<User> _signInManager;
        public UserController(
            IUserRepository userRepository,
            UserManager<User> userManager,
            SignInManager<User> signInManager)
        {
        
            _userRepository = userRepository;
            _signInManager = signInManager;
            _userManager = userManager;
           
        }
        // GET: api/<controller>
        [HttpGet]
        public ActionResult<IEnumerable<User>> GetAllUsers()
        {
            var Users = _userRepository.GetAllUsers().ToList();

            if (Users.Count() == 0)
            {
                return NotFound();
            } 
            return Ok(Users);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost("createuser")]
        public async Task<IActionResult> CreateUser([FromBody]User value)
        {
           

            var result = await _userManager.CreateAsync(new User
            {
                UserName =value.UserName,
                Email = value.Email,
                PhoneNumber = value.PhoneNumber,
                HealthProfile = new HealthProfile(),
                BotProfile = new BotProfile(),
                ChallengeProfile = new ChallengeProfile(),
                Feed = new Feed()
            },value.PasswordHash);
            if (result.Succeeded)
            {
                
                return Content("User was Created", "text/html");
            }

            return Content("USer creation failed", "text/html");
        }

       

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
