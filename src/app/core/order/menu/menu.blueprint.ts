export class MenuBlueprint {
    private static _menuList = [
            {
                categoryName: "Starters",
                items: [
                    {
                        itemCode: "STR1001",
                        itemName: "Manchow Soup",
                        itemPrice: "120",
                        itemDesc: "Manchow Soup prepared with....",
                        itemImg: "manchow_soup.jpeg"
                    },
                    {
                        itemCode: "STR1002",
                        itemName: "Hot N Sour Soup",
                        itemPrice: "150",
                        itemDesc: "Hot N Sour Soup prepared with....",
                        itemImg: "hot-n-sour-soup.jpeg"
                    }
                ]
            },
            {
                categoryName: "Main Course",
                items: [
                    {
                        itemCode: "MNC1001",
                        itemName: "Paneer Lababdar",
                        itemPrice: "290",
                        itemDesc: "Paneer Lababdar prepared with....",
                        itemImg: "paneer-lababdar.jpeg"
                    },
                    {
                        itemCode: "MNC1002",
                        itemName: "Chicken Handi",
                        itemPrice: "350",
                        itemDesc: "Chicken Handi prepared with....",
                        itemImg: "chicken-handi.webp"
                    }
                ]
            }
        ]

    public static get getMenuList(){
        return this._menuList;
    }
}