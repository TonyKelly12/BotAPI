using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JimbotAdminHub.Data.Entities.User
{
    public class HealthProfile
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public double Height { get; set; }
        public double Weight { get; set; }
        public int ChallengePoints { get; set; }
        public double TargetHeartRate { get; set; }
        public double TargetWeight { get; set; }
        public ICollection<Activities> Activities { get; set; }

    }
}
