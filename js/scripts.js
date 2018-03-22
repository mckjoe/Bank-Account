var currentTotal = 0;

var Account = function(name, initialDeposit) {
  this.name = name;
  this.initialDeposit = initialDeposit;
}

Account.prototype.createAccount = function() {
  currentTotal += this.initialDeposit;
}

Account.prototype.addMoney = function(newDeposit){
  currentTotal += newDeposit;
  return currentTotal;
}

Account.prototype.getMoney = function(newWithdrawl){
  currentTotal -= newWithdrawl;
  return currentTotal;
}

$(document).ready(function() {
  $("#openAccount").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var initialDeposit = parseInt($("#initialDeposit").val());
    var newAccount = new Account(name, initialDeposit);
    newAccount.createAccount();
    $(".output").text(currentTotal);
    $("#openAccount").hide();
    $("#buttons").show();
    $("#getCash").click(function() {
      $("#depositForm").show();
      $("#withdrawlForm").hide();
      $("#balance").show();
    });
    $("#giveCash").click(function() {
      $("#withdrawlForm").show();
      $("#depositForm").hide();
      $("#balance").show();
    });
    $("#depositForm").submit(function(event) {
      event.preventDefault();
      $("#depositForm").hide();
      var newDeposit = parseInt($("#deposit").val());
      $(".output").text(newAccount.addMoney(newDeposit));
    });
    $("#withdrawlForm").submit(function(event) {
      event.preventDefault();
      $("#withdrawlForm").hide();
      var newWithdrawl = parseInt($("#withdrawl").val());
      $(".output").text(newAccount.getMoney(newWithdrawl));
    });
  });
});
