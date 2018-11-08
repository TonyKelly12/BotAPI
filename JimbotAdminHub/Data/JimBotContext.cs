using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DutchTreat.Data.Entities;
using JimbotAdminHub.Data.Entities.App;
using JimbotAdminHub.Data.Entities.Bot;
using JimbotAdminHub.Data.Entities.Challenge;
using JimbotAdminHub.Data.Entities.Shop;
using JimbotAdminHub.Data.Entities.User;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace JimbotAdminHub.Data
{
    public class JimBotContext : IdentityDbContext<User>
    {
        public JimBotContext(DbContextOptions<JimBotContext> options) : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<User> User { get; set; }
        
        public DbSet<HealthProfile> HealthProfiles { get; set; }
        public DbSet<Feed> Feeds { get; set; }
        public DbSet<ChallengeProfile> ChallengeProfiles { get; set; }
        public DbSet<BotProfile> BotProfiles { get; set; }
        public DbSet<Activities> Activities { get; set; }
        public DbSet<ShopType> ShopTypes { get; set; }
        public DbSet<Shop> Shops { get; set; }
        public DbSet<PaymentOptions> PaymentOptions { get; set; }
        public DbSet<PaymentAccount> PaymentAccounts { get; set; }
        public DbSet<ChallengeTypes> ChallengeTypes { get; set; }
        public DbSet<ChallengeLevel> ChallengeLevels { get; set; }
        public DbSet<Challenge> Challenges { get; set; }
        public DbSet<PartTypes> PartTypes { get; set; }
        public DbSet<BotPart> BotParts { get; set; }
      
    }
}
