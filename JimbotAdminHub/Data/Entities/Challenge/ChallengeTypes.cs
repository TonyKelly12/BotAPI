using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JimbotAdminHub.Data.Entities.Challenge
{
    public class ChallengeTypes
    {
        public int Id { get; set; }
        public bool Landmark { get; set; }
        public bool Step { get; set; }
        public bool Search { get; set; }
        public bool Relay { get; set; }
        public bool Chase { get; set; }
        public bool Race { get; set; }
        public bool Team { get; set; }
        public bool Single { get; set; }
        public bool Daily { get; set; }
        public bool Weekly { get; set; }
        public bool Monthly { get; set; }
        public int ChallengeId { get; set; }

    }
}
