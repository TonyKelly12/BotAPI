using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JimbotAdminHub.Data.Entities.App;

namespace JimbotAdminHub.Data.Entities.Challenge
{
    public class RelayChallenge : Challenge
    {
        public GPSLocation StartLocation { get; set; }
        public GPSLocation DropLocation { get; set; }
    }
}
