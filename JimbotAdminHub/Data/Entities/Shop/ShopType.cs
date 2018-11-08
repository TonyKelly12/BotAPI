using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JimbotAdminHub.Data.Entities.Shop
{
    public class ShopType
    {
        public int Id { get; set; }
        public bool GymShop { get; set; }
        public bool MainShop { get; set; }
        public bool BusinessShop { get; set; }
        public bool BotShop { get; set; }
        public bool ChargeStation { get; set; }
        public int ShopId { get; set; }
    }
}
