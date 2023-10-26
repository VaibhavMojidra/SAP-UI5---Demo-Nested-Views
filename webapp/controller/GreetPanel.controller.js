sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	],function(Controller,MessageToast){
		"use strict";
		return Controller.extend("com.vaibhavmojidra.nestedviewsdemo.controller.GreetPanel",{
			onGreet:function(){
				
				var sName=this.getView().byId("name").getValue().trim();
				if(sName===""){
					MessageToast.show("Please enter your name");
				}else{
					MessageToast.show("Hello "+sName+"!");
				}
				
			}
		});
	}
);