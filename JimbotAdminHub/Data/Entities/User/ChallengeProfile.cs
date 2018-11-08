using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JimbotAdminHub.Data.Entities.Challenge;

namespace JimbotAdminHub.Data.Entities.User
{
    public class ChallengeProfile
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ChallengePoints { get; set; }
        public int ChallengesCompleted { get; set; }
        public int ChallengesFailed { get; set; }
        public int TotalChallengePoints { get; set; }
        public ICollection<ChallengeTypes> ChallengeType { get; set; }
        public ICollection<ChallengeLevel> ChallengeLevel { get; set; }
        
    }
}
