﻿using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace vega.Controllers.Resources
{
    public class VehicleResource
    {
        public int Id { get; set; }
        public KeyValuePairResource Model { get; set; }
        public KeyValuePairResource Make { get; set; }
        public bool isRegistered { get; set; }
        public ContactResource Contact { get; set; }
      
        public DateTime LastUpdate { get; set; }

        public ICollection<KeyValuePairResource> Features { get; set; }
        public VehicleResource()
        {
            Features = new Collection<KeyValuePairResource>();
        }
    }
}
