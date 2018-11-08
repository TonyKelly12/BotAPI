using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JimbotAdminHub.Data.Entities.App;

namespace JimbotAdminHub.Data.Entities.Challenge
{
    public class LandmarkChallenge : Challenge
    {
        public GPSLocation LandmarkLocation { get; set; }
        public int DistanceInKilometers { get; set; }

    }
}
