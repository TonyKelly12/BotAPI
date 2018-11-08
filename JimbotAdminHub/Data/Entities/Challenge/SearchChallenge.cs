using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JimbotAdminHub.Data.Entities.App;

namespace JimbotAdminHub.Data.Entities.Challenge
{
    public class SearchChallenge : LandmarkChallenge
    {
        public GPSLocation Clue1 { get; set; }
        public GPSLocation Clue2 { get; set; }
        public GPSLocation Clue3 { get; set; }
    }
}
