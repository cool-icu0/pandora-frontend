import { MenuDataItem } from "@ant-design/pro-layout";
import { CrownOutlined } from "@ant-design/icons";
import AccessEnum from "@/access/accessEnum";

// 菜单列表
export const menus = [
    {
        path: "/",
        name: "主页",
    },
    {
        path: "/banks",
        name: "题库",
    },
    {
        path: "/questions",
        name: "题目",
    },
    {
        name: "编程潘多拉",
        path: "/",
        target: "_blank",
    },
    {
        path: "/admin",
        name: "管理",
        icon: <CrownOutlined />,
        access: AccessEnum.ADMIN,
        children: [
            {
                path: "/admin/user",
                name: "用户管理",
                access: AccessEnum.ADMIN
            },
            {
                path: "/admin/vip",
                name: "会员管理",
                access: AccessEnum.ADMIN
            },
            {
                path: "/admin/bank",
                name: "题库管理",
                access: AccessEnum.ADMIN
            },
            {
                path: "/admin/question",
                name: "题目管理",
                access: AccessEnum.ADMIN
            },
        ],
    },
] as MenuDataItem[];

// 根据路径查找所有菜单
export const findAllMenuItemByPath = (path: string): MenuDataItem | null => {
    return findMenuItemByPath(menus, path);
};

// 根据路径查找菜单
export const findMenuItemByPath = (
    menus: MenuDataItem[],
    path: string,
): MenuDataItem | null => {
    for (const menu of menus) {
        if (menu.path === path) {
            return menu;
        }
        if (menu.children) {
            const matchedMenuItem = findMenuItemByPath(menu.children, path);
            if (matchedMenuItem) {
                return matchedMenuItem;
            }
        }
    }
    return null;
};