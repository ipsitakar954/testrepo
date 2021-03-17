({
 
    doInit: function(component, event, helper) {
        
        var action = component.get("c.getAccountRecord");
        
        action.setCallback(this, function(response){
            
            var state = response.getState();
            
            if (state === "SUCCESS"){
                var listOfAcc = response.getReturnValue();
             if(lstOfAcc != null)
                 component.set("v.accountlist", listOfAcc);
            }
        });
        
        $A.enqueueAction(action);
    }
})