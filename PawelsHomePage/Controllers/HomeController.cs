using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PawelsHomePage.Models;

namespace PawelsHomePage.Controllers {
    public class HomeController : Controller {
        public IActionResult Index () {
            return View ();
        }
        
        public IActionResult Portfolio () {
            return View ();
        }
        public IActionResult Resume () {
            return View ();
        }
        public IActionResult Social () {
            return View ();
        }
        public IActionResult Blog () {
            return Redirect ("https://pmchojnacki.azurewebsites.net/");
        }

        [ResponseCache (Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error () {
            return View (new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}