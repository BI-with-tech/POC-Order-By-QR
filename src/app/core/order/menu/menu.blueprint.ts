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
                    },
                    {
                        itemCode: "STR1003",
                        itemName: "Tomato Soup",
                        itemPrice: "110",
                        itemDesc: "Tomato Soup prepared with....",
                        itemImg: "hot-n-sour-soup.jpeg"
                    },
                    {
                        itemCode: "STR1004",
                        itemName: "Sweet Corn Soup",
                        itemPrice: "130",
                        itemDesc: "Sweet Corn Soup prepared with....",
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
                    },
                    {
                        itemCode: "MNC1003",
                        itemName: "Paneer Butter Masala",
                        itemPrice: "170",
                        itemDesc: "Paneer cooked with white gravy, dry fruits and cream",
                        itemImg: "chicken-handi.webp"
                    },
                    {
                        itemCode: "MNC1004",
                        itemName: "Paneer Chilly",
                        itemPrice: "160",
                        itemDesc: "Paneer cubes cooked with, capsicum, onion, chilli with chinese spices",
                        itemImg: "chicken-handi.webp"
                    },
                    {
                        itemCode: "MNC1005",
                        itemName: "Matar Paneer",
                        itemPrice: "180",
                        itemDesc: "Paneer cubes, green peas prepared in tomato gravy",
                        itemImg: "chicken-handi.webp"
                    },
                    {
                        itemCode: "MNC1006",
                        itemName: "Butter Naan",
                        itemPrice: "55",
                        itemDesc: "Chicken Handi prepared with....",
                        itemImg: "chicken-handi.webp"
                    }
                ]
            },
            {
                categoryName: "Snacks",
                items: [
                    {
                        itemCode: "SNK1001",
                        itemName: "Chicken 65",
                        itemPrice: "170",
                        itemDesc: "Chicken Pieces cooked with curry leaves and sweet & sour chinese spices",
                        itemImg: "manchow_soup.jpeg"
                    },
                    {
                        itemCode: "SNK1002",
                        itemName: "Egg Omlette",
                        itemPrice: "90",
                        itemDesc: "Egg mixed and cooked with onion, chilli & tomato",
                        itemImg: "hot-n-sour-soup.jpeg"
                    },
                    {
                        itemCode: "SNK1003",
                        itemName: "Egg Crispy Chilli",
                        itemPrice: "65",
                        itemDesc: " Crispy Boiled Egg, marinated with Indian spices, vegetables and deep fried",
                        itemImg: "hot-n-sour-soup.jpeg"
                    }
                  
                ]
            }
        ]

    public static get getMenuList(){
        return this._menuList;
    }
}