using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JimbotAdminHub.Data.Entities.App;
using JimbotAdminHub.Data.Entities.Bot;
using Microsoft.CodeAnalysis;

namespace JimbotAdminHub.Data.Entities.Shop
{
    public class Shop
    {
        public Shop()
        {
            Inventory = new List<BotPart>();
        }
        public int Id { get; set; }
        public ShopType ShopType { get; set; }
        public GPSLocation ShopLocation { get; set; }
        public List<BotPart> Inventory { get; set; }
    }
}
