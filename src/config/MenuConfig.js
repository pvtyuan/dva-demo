let MenuConfig = [
  {
    key: "dashboard",
    name: "仪表盘",
    icon: "laptop",
  },
  {
    key: "account",
    name: "账本",
    icon: "book"
  },
  {
    key: "users",
    name: "用户管理",
    icon: "user",
    child: [
      {
        key: "nav1",
        name: "nav1"
      }, {
        key: "nav2",
        name: "nav2"
      }
    ]
  },
];

export default MenuConfig;
