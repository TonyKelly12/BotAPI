using System;
using System.Collections.Generic;
using System.Linq;
using DutchTreat.Data.Entities;
using JimbotAdminHub.Data.Entities.User;
using Microsoft.Extensions.Logging;

namespace JimbotAdminHub.Data.Respositories.User
{
    public class UserRepository : IUserRepository
    {
        private readonly JimBotContext _ctx;
        private readonly ILogger<UserRepository> _logger;

        public UserRepository(JimBotContext ctx, ILogger<UserRepository> logger
        )
        {
            _ctx = ctx;
            _logger = logger;
        }

        public bool DeleteUser(string id)
        {
            try
            {
                _ctx.User.Remove(_ctx.Find<Entities.User.User>(id));
                return _ctx.SaveChanges() > 0;
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to delete user : {e}");
                return false;
            }
            

        }

        public IEnumerable<Product> GetAllProducts()
        {
            try
            {
             return _ctx.Products
                        .OrderBy(p => p.Title)
                        .ToList();
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all products : {e}");
                return null;
            }
            
        }

        public IEnumerable<Entities.User.User> GetAllUsers()
        {
            try
            {
                return _ctx.User
                    .OrderBy(p => p.FirstName);
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all users : {e}");
                return null;
            }

        }

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            try
            {
                return _ctx.Products
                    .Where(p => p.Category == category)
                    .ToList();
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get products by category : {e}");
                return null;
            }


           
        }

        public IEnumerable<Entities.User.User> GetUsersByCity(string city)
        {
            try
            {
                return _ctx.User
                    .Where(p => p.City == city);

            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get Users by city : {e}");
                return null;
            }

        }

        public IEnumerable<Entities.User.User> GetUsersByFirstName(string firstName)
        {
            try
            {
                return _ctx.User
                    .Where(p => p.FirstName == firstName);

            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get Users by first name : {e}");
                return null;
            }
        }

        public IEnumerable<Entities.User.User> GetUsersByLastName(string lastName)
        {
            try
            {
                return _ctx.User
                    .Where(p => p.LastName == lastName);

            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get Users by city : {e}");
                return null;
            }
        }

        public IEnumerable<Entities.User.User> GetUsersByPhone(string phone)
        {
            try
            {
                return _ctx.User
                    .Where(p => p.PhoneNumber == phone);

            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get Users by city : {e}");
                return null;
            }
        }

        public IEnumerable<Entities.User.User> GetUsersBySex(string sex)
        {
            try
            {
                return _ctx.User
                    .Where(p => p.Sex == sex);

            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get Users by city : {e}");
                return null;
            }
        }

        public IEnumerable<Entities.User.User> GetUsersByState(string state)
        {
            try
            {
                return _ctx.User
                    .Where(p => p.State == state);

            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get Users by city : {e}");
                return null;
            }
        }

        public IEnumerable<Entities.User.User> GetUsersByZip(int zip)
        {
            try
            {
                return _ctx.User
                    .Where(p => p.ZipCode == zip);

            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get Users by city : {e}");
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
