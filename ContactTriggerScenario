Trigger AccountContactTrigger on Contact(after insert,after update,after delete,after undelete){

Set<Id> accountIdsSet = new Set<Id>();
 if(Trigger.Isinsert ||Trigger.update || Trigger.undelete){
   for(Contact c:Trigger.new){
      accountIdsSet.add(c.AccountId);
   }
 }
 if(Trigger.isDelete){
 
 for(Contact cn : Trigger.old){
 accountIdsSet.add(cn.AccountId);
 }
 
  } 
  
  List<Account> accDltList = new List<Account>();
 for(Account acc:Select Id,(select id from contacts) from Account where id in :accountIdsSet){
 acc.xyz = acc.Contacts.size();
 accDltList.add(acc);
 }
 update accDltList;
}
