using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JimbotAdminHub.Data.Entities.Bot
{
    public class BotPart
    {
        public int Id { get; set; }
        public string PartName { get; set; }
        public int PartPrice { get; set; }
        public ICollection<PartTypes> PartType { get; set; }
        public double Battery { get; set; }
        public double Strength { get; set; }
        public double Speed { get; set; }
        public double Quality { get; set; }
        public string Avatar { get; set; }
    }
}
