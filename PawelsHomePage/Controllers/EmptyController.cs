using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PawelsHomePage.Models;

namespace PawelsHomePage.Controllers
{
    public class EmptyController : Controller
    {
        public IActionResult Ping()
        {
            return View();
        }
    }
}