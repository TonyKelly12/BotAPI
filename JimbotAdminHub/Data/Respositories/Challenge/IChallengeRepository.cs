using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JimbotAdminHub.Data.Respositories.Challenge
{
    interface IChallengeRepository
    {
        IEnumerable<Entities.Challenge.Challenge> GetChallengesByName(string name);
        IEnumerable<Entities.Challenge.Challenge> GetChallengesByType(string type);
        IEnumerable<Entities.Challenge.Challenge> GetChallengesByPoints(int points);
        IEnumerable<Entities.Challenge.Challenge> GetChallengesByEndDate(string lastName);
        IEnumerable<Entities.Challenge.Challenge> GetChallengesByStartDate(string firstName);
        IEnumerable<Entities.Challenge.Challenge> GetChallengesByLevel(string phone);
        
        IEnumerable<Entities.Challenge.Challenge> GetAllChallenges();
        bool DeleteChallenge(string id);
        bool SaveChanges();
    }
}
