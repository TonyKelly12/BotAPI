using System.Collections.Generic;

namespace JimbotAdminHub.Data.Respositories.User
{
    public interface IUserRepository
    {
        
        IEnumerable<Entities.User.User> GetUsersByState(string state);
        IEnumerable<Entities.User.User> GetUsersByZip(int zip);
        IEnumerable<Entities.User.User> GetUsersByCity(string city);
        IEnumerable<Entities.User.User> GetUsersByLastName(string lastName);
        IEnumerable<Entities.User.User> GetUsersByFirstName(string firstName);
        IEnumerable<Entities.User.User> GetUsersByPhone(string phone);
        IEnumerable<Entities.User.User> GetUsersBySex(string sex);
        IEnumerable<Entities.User.User> GetAllUsers();
        bool DeleteUser(string id);
        bool SaveChanges();
    }
}