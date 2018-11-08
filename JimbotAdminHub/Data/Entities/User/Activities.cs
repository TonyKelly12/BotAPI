using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JimbotAdminHub.Data.Entities.User
{
    public class Activities
    {
        public int Id { get; set; }
        public bool Biking { get; set; }
        public bool Walking { get; set; }
        public bool Running { get; set; }
        public bool WeightLifting { get; set; }
        public bool Skating { get; set; }
        public int UserId { get; set; }

    }
}
