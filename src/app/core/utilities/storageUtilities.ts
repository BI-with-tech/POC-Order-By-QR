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

    public static get getAllOrders(){
        return localStorage.getItem('allOrders');
    }

    public static get getOccupiedTables(){
        return localStorage.getItem('occupiedTables');
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

    public static set setAllOrders(allOrders: any){
        localStorage.setItem('allOrders', allOrders);
    }

    public static set setOccupiedTables(occupiedTables: any){
        localStorage.setItem('occupiedTables', occupiedTables);
    }
}