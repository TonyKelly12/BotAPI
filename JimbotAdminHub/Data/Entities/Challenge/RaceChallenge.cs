using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JimbotAdminHub.Data.Entities.Challenge
{
    public class RaceChallenge : Challenge
    {
        public DateTime RaceStartTime { get; set; }
        public DateTime RaceEndTime { get; set; }
        public DateTime TimeToBeat { get; set; }
    }
}
