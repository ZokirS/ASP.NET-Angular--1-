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
    public class MakesController: Controller
    {
        private readonly VegaDbContext dbContext;
        private readonly IMapper mapper;

    public MakesController (VegaDbContext dbContext, IMapper mapper)
	{
            this.dbContext = dbContext;
            this.mapper = mapper;
	}
        [HttpGet("/api/makes")]
        public async Task<IEnumerable<MakeResource>> GetMakes()
        {
           var makes = await  dbContext.Makes.Include(m=>m.Models).ToListAsync();
            return mapper.Map<List<Make>, List<MakeResource>>(makes);
        }
    
        
    }
}