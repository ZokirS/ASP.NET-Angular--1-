using Microsoft.AspNetCore.Mvc;
using vega.Models;
using System.Collections.Generic;
using vega.Persistance;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using AutoMapper;
using vega.Controllers.Resources;

namespace vega.Controllers
{
    public class FeaturesController : Controller
    {
        private readonly VegaDbContext dbContext;
        private readonly IMapper mapper;

        public FeaturesController(VegaDbContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        [HttpGet("/api/vehicle/features")]
        public async Task<IEnumerable<KeyValuePairResource>> GetFeatures()
        {
            var features = await dbContext.Features.ToListAsync();
            return mapper.Map<List<Feature>, List<KeyValuePairResource>>(features);
        }

    }
}
