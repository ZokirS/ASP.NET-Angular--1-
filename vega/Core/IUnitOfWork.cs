﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace vega.Core
{
   public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}
