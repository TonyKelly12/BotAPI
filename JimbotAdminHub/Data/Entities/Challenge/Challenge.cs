using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JimbotAdminHub.Data.Entities.Challenge
{
    public class Challenge
    {
       
        public int Id { get; set; }
        public string ChallengeName { get; set; }
        public string ChallengeType { get; set; }
        public string ChallengeLevel { get; set; }
        public int ChallengePoints { get; set; }
        public DateTime ExpireTime { get; set; }
        public DateTime StartTime { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
        public List<Entities.User.User> ChallengeMembers { get; set; }
    }
}
