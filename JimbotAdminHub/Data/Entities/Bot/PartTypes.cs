using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JimbotAdminHub.Data.Entities.Bot
{
    public class PartTypes
    {
        public int Id { get; set; }
        public bool LeftArm { get; set; }
        public bool RightArm { get; set; }
        public bool LeftLeg { get; set; }
        public bool RightLeg { get; set; }
        public bool LeftHand { get; set; }
        public bool RightHand { get; set; }
        public bool LeftFoot { get; set; }
        public bool RightFoot { get; set; }
        public bool LeftWrist { get; set; }
        public bool RightWrist { get; set; }
        public bool LeftKnee { get; set; }
        public bool RightKnee { get; set; }
        public bool Necklace { get; set; }
        public bool Mask { get; set; }
        public bool Helmet { get; set; }
        public bool Chest { get; set; }
        public bool HeadBand { get; set; }
        public int BotPartId { get; set; }
    }
}
