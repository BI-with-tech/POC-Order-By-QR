export class MenuBlueprint {
    private static _menuList = [
            {
                categoryName: "Starters",
                items: [
                    {
                        itemCode: "STR1001",
                        itemName: "Manchow Soup",
                        itemPrice: "120",
                        itemDesc: "Chinese vegetarian soup made with mixed vegetables, garlic, ginger, soya sauce and ground pepper",
                        itemImg: "manchow_soup.jpeg"
                    },
                    {
                        itemCode: "STR1002",
                        itemName: "Hot N Sour Soup",
                        itemPrice: "150",
                        itemDesc: "Spicy and hot soup made with mixed fresh vegetables, mushrooms, spices and soy sauce",
                        itemImg: "hot-n-sour-soup.jpeg"
                    },
                    {
                        itemCode: "STR1003",
                        itemName: "Tomato Soup",
                        itemPrice: "110",
                        itemDesc: "Fresh Tomatoes with Heavy cream, olive oil, bread cubes and low sodium",
                        itemImg: "Tomato Soup.jpg"
                    },
                    {
                        itemCode: "STR1004",
                        itemName: "Sweet Corn Soup",
                        itemPrice: "130",
                        itemDesc: "Sweet corn cooked with french beans, corn flour, carrots and butter",
                        itemImg: "Sweet Corn.jpg"
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
                        itemDesc: "Paneer cubes prepared with spiced tomato and cashew paste that and sautéed with onions and more spices.",
                        itemImg: "paneer-lababdar.jpeg"
                    },
                    {
                        itemCode: "MNC1002",
                        itemName: "Chicken Handi",
                        itemPrice: "350",
                        itemDesc: "Chicken Pieces slow-cooked in earthen clay pot (called handi) with aromatic spices, yogurt, cream, and fragrant herbs.",
                        itemImg: "chicken-handi.webp"
                    },
                    {
                        itemCode: "MNC1003",
                        itemName: "Paneer Butter Masala",
                        itemPrice: "170",
                        itemDesc: "Paneer cooked with white gravy, dry fruits and cream",
                        itemImg: "Paneer Butter Masala.jpg"
                    },
                    {
                        itemCode: "MNC1004",
                        itemName: "Paneer Chilli",
                        itemPrice: "160",
                        itemDesc: "Paneer cubes cooked with, capsicum, onion, chilli with chinese spices",
                        itemImg: "Chilli Paneer.jpg"
                    },
                    {
                        itemCode: "MNC1005",
                        itemName: "Matar Paneer",
                        itemPrice: "180",
                        itemDesc: "Paneer cubes, green peas prepared in tomato gravy",
                        itemImg: "Matar Paneer.jpg"
                    },
                    {
                        itemCode: "MNC1006",
                        itemName: "Butter Naan",
                        itemPrice: "55",
                        itemDesc: "Prepared with wheat floor and onion/garlic",
                        itemImg: "Butter Naan.jpg"
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
                        itemImg: "Chicken 65.jpg"
                    },
                    {
                        itemCode: "SNK1002",
                        itemName: "Egg Omlette",
                        itemPrice: "90",
                        itemDesc: "Egg mixed and cooked with onion, chilli & tomato",
                        itemImg: "Egg Omlette.jpg"
                    },
                    {
                        itemCode: "SNK1003",
                        itemName: "Egg Crispy Chilli",
                        itemPrice: "65",
                        itemDesc: " Crispy Boiled Egg, marinated with Indian spices, vegetables and deep fried",
                        itemImg: "Egg Crispy.jpg"
                    }
                  
                ]
            }
        ]

    public static get getMenuList(){
        return this._menuList;
    }
}