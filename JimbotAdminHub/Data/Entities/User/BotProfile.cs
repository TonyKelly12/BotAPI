using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JimbotAdminHub.Data.Entities.User
{
    public class BotProfile
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int LeftArm { get; set; }
        public int RightArm { get; set; }
        public int LeftLeg { get; set; }
        public int RightLeg { get; set; }
        public int LeftHand { get; set; }
        public int RightHand { get; set; }
        public int LeftFoot { get; set; }
        public int RightFoot { get; set; }
        public int LeftWrist { get; set; }
        public int RightWrist{ get; set; }
        public int LeftKnee { get; set; }
        public int RightKnee { get; set; }
        public int Necklace { get; set; }
        public int Mask { get; set; }
        public int Helmet { get; set; }
        public int Chest { get; set; }
        public int HeadBand { get; set; }

    }
}
