using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JimbotAdminHub.Data.Entities.Shop
{
    public class PaymentOptions
    {
        public int Id { get; set; }
        public bool Card { get; set; }
        public bool PayPal { get; set; }
        public int PaymentAccountId { get; set; }
    }
}
