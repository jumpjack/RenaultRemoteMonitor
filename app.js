

import {Button, TextView, contentView, Stack, TextInput, AlertDialog, NavigationView, Page, Action, drawer, Composite, CollectionView, ScrollView, Row} from 'tabris';
const {ItemPicker, List} = require('tabris-decorators');

const DEBUG_ON = true;

var myStack = new Stack({
  alignment:  'stretchX',
  layoutData: "stretch"
  }
);


var userAndPass = new TextInput({
  message: 'user,pass',
  type: "password"
  }).appendTo(myStack);


  var debugRow = new Row({
  left : 0,
  right: 0,
  }).appendTo(myStack);


var loginButton = new Button({
 text: "Login",
 alignment : "left",
 left:0,
}).onSelect(login)
  .appendTo(debugRow);


var debugButton = new Button({
 text: "timer2",
 alignment : "right",
 right: 0,
}).onSelect(startTimer)
  .appendTo(debugRow);



var vehiclePicker = ItemPicker({
      onItemSelect: handleVehicleSelection,
      items: ["a","b"]
    }).appendTo(myStack);

var pageMain = new Page({title: 'Main'});
pageMain.append(myStack);


var navView = new NavigationView({layoutData: 'stretch', drawerActionVisible: false})
  .append(pageMain)
  .appendTo(contentView);


console.log("Ready to start");

function login() {
console.log("login");
}

function startTimer() {
console.log("startTimer");
}

function handleVehicleSelection() {
console.log("handleVehicleSelection");
}
