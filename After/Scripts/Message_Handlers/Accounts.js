var After;
(function (After) {
    var Message_Handlers;
    (function (Message_Handlers) {
        var Accounts;
        (function (Accounts) {
            function HandleAccountCreation(JsonMessage) {
                if (JsonMessage.Result == "ok") {
                    if (localStorage["RememberMe"] == "true") {
                        localStorage["AuthenticationToken"] = JsonMessage.AuthenticationToken;
                    }
                    After.Controls.Game.Init();
                }
                else {
                    if (JsonMessage.Result == "exists") {
                        $("#divCreateAccountStatus").hide();
                        $("#divCreateAccountStatus").text("That account name already exists.");
                        $("#divCreateAccountStatus").fadeIn();
                        return;
                    }
                }
                ;
            }
            Accounts.HandleAccountCreation = HandleAccountCreation;
            ;
            function HandleLogon(JsonMessage) {
                if (JsonMessage.Result == "ok") {
                    if (JsonMessage.Note == "LoginElsewhere") {
                        After.Utilities.ShowDialog("Your account was logged in from another location and was forced off by this login session.<br/><br/>If that wasn't you, you should change your password immediately.", "black", "OK", null);
                    }
                    if (localStorage["RememberMe"] == "true") {
                        localStorage["AuthenticationToken"] = JsonMessage.AuthenticationToken;
                    }
                    After.Controls.Game.Init();
                }
                else if (JsonMessage.Result == "failed") {
                    $("#divLoginStatus").hide();
                    $("#divLoginStatus").text("Incorrect username or password.");
                    $("#divLoginStatus").fadeIn();
                    $("#buttonLogin").removeAttr("disabled");
                    return;
                }
                else if (JsonMessage.Result == "expired") {
                    $("#divLoginStatus").hide();
                    $("#divLoginStatus").text("Session expired.  Please log in again.");
                    $("#divLoginStatus").fadeIn();
                    $("#inputPassword").val("");
                    localStorage.removeItem("Username");
                    localStorage.removeItem("AuthenticationToken");
                    $("#buttonLogin").removeAttr("disabled");
                    return;
                }
                ;
            }
            Accounts.HandleLogon = HandleLogon;
            ;
            function HandleConnected(JsonMessage) {
                var spanMessage = document.createElement("span");
                spanMessage.style.color = "whitesmoke";
                spanMessage.innerText = JsonMessage.Username + " has connected.";
                $("#divChatMessageWindow").append(spanMessage);
                $("#divChatMessageWindow").append("<br/>");
            }
            Accounts.HandleConnected = HandleConnected;
            function HandleDisconnected(JsonMessage) {
                var spanMessage = document.createElement("span");
                spanMessage.style.color = "whitesmoke";
                spanMessage.innerText = JsonMessage.Username + " has disconnected.";
                $("#divChatMessageWindow").append(spanMessage);
                $("#divChatMessageWindow").append("<br/>");
            }
            Accounts.HandleDisconnected = HandleDisconnected;
            function HandleLoginElsewhere(JsonMessage) {
                After.Utilities.ShowDialog("Your were disconnected because your account was logged in from another location.<br/><br/>If this wasn't you, you should change your password immediately.", "black", "OK", null);
            }
            Accounts.HandleLoginElsewhere = HandleLoginElsewhere;
        })(Accounts = Message_Handlers.Accounts || (Message_Handlers.Accounts = {}));
    })(Message_Handlers = After.Message_Handlers || (After.Message_Handlers = {}));
})(After || (After = {}));
