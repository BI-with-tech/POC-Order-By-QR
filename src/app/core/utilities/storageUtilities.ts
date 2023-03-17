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

    public static get getOrderDetails(){
        return localStorage.getItem('orderDetails');
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

    public static set setOrderDetails(orderDetails: any){
        localStorage.setItem('orderDetails', orderDetails);
    }
}