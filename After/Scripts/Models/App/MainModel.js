var After;
(function (After) {
    After.Debug = false;
    After.Temp = {};
    After.Audio = new After.Models.App.Audio();
    After.Canvas = new After.Models.App.Canvas();
    After.Connection = new After.Models.App.Connection();
    After.Drawing = new After.Models.App.Drawing();
    After.Game = new After.Models.App.Game();
    After.Me = new After.Models.App.Me();
    After.Settings = new After.Models.App.Settings();
    After.Utilities = new After.Models.App.Utilities();
})(After || (After = {}));
(function (After) {
    var World_Data;
    (function (World_Data) {
        World_Data.Areas = new Array();
        World_Data.Souls = new Array();
        World_Data.FreeParticles = new Array();
    })(World_Data = After.World_Data || (After.World_Data = {}));
})(After || (After = {}));
