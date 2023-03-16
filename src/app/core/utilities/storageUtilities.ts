export class StorageUtilities{

    public static get getCustomerName(){
        return localStorage.getItem('customerName');
    }

    public static get getTableNumber(){
        return localStorage.getItem('tableNumber');
    }

    public static get getPrimaryComments(){
        return localStorage.getItem('primaryComments');
    }

    public static set setCustomerName(customerName: string){
        localStorage.setItem('customerName', customerName);
    }

    public static set setTableNumber(tableNumber: string){
        localStorage.setItem('tableNumber', tableNumber);
    }

    public static set setPrimaryComments(primaryComments: string){
        localStorage.setItem('primaryComments', primaryComments)
    }
}