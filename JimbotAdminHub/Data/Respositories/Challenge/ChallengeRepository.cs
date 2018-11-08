using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JimbotAdminHub.Data.Entities.Challenge;
using JimbotAdminHub.Data.Entities.User;
using Microsoft.Extensions.Logging;

namespace JimbotAdminHub.Data.Respositories.Challenge
{
    public class ChallengeRepository: IChallengeRepository
    {
        private readonly JimBotContext _ctx;
        private readonly ILogger _logger;
        public ChallengeRepository(JimBotContext ctx, ILogger<ChallengeRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public bool DeleteChallenge(string id)
        {
            try
            {
                _ctx.Challenges.Remove(_ctx.Find<Entities.Challenge.Challenge>(id));
                return _ctx.SaveChanges() > 0;
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to delete challenge : {e}");
                return false;
            }
        }

        public IEnumerable<Entities.Challenge.Challenge> GetAllChallenges()
        {
            try
            {
                return _ctx.Challenges
                    .OrderBy(c => c.ChallengeName);
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all users : {e}");
                return null;
            }
        }

        public IEnumerable<Entities.Challenge.Challenge> GetChallengesByEndDate(DateTime endDate)
        {
            try
            {
                return _ctx.Challenges
                    .Where(c => c.ExpireTime == endDate);
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all users : {e}");
                return null;
            }
        }
        
        public IEnumerable<Entities.Challenge.Challenge> GetChallengesByLevel(string level)
        {
            try
            {
                return _ctx.Challenges
                    .Where(c => c.ChallengeLevel == level);
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all users : {e}");
                return null;
            }
        }

        public IEnumerable<Entities.Challenge.Challenge> GetChallengesByName(string name)
        {
            try
            {
                return _ctx.Challenges
                    .Where(c => c.ChallengeName == name);
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all users : {e}");
                return null;
            }
        }

        public IEnumerable<Entities.Challenge.Challenge> GetChallengesByPoints(int points)
        {
            try
            {
                return _ctx.Challenges
                    .Where(c => c.ChallengePoints == points);
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all users : {e}");
                return null;
            }
        }

        public IEnumerable<Entities.Challenge.Challenge> GetChallengesByStartDate(DateTime startTime)
        {
            try
            {
                return _ctx.Challenges
                    .Where(c => c.StartTime == startTime);
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all users : {e}");
                return null;
            }
        }

        public IEnumerable<Entities.Challenge.Challenge> GetChallengesByType(string type)
        {
            try
            {
                return _ctx.Challenges
                    .Where(c => c.ChallengeType == type);
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all users : {e}");
                return null;
            }
        }

        public bool SaveChanges()
        {
            try
            {
                return _ctx.SaveChanges() > 0;
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to save data : {e}");
                return false;
            }
        }
    }
}
