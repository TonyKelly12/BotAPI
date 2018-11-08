using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace JimbotAdminHub.Data.Entities.User
{
    public class User: IdentityUser
    {
        
        public string Sex { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int ZipCode { get; set; }
        public Feed Feed { get; set; }
        public string Avatar { get; set; }
        public string BotAvatar { get; set; }
        public HealthProfile HealthProfile { get; set; }
        public BotProfile BotProfile { get; set; }
        public ChallengeProfile ChallengeProfile { get; set; }
        public ICollection<Activities> Activities { get; set; }
    


    }
}
