"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import React, { useCallback, useEffect } from "react";
import BasicLayout from "@/layouts/BasicLayout";
import { Provider, useDispatch } from "react-redux";
import { getLoginUserUsingGet } from "@/api/userController";
import store, { AppDispatch } from "@/stores";
import AccessLayout from "@/access/AccessLayout";
import AccessEnum from "@/access/accessEnum";
import {setLoginUser} from "@/stores/loginUser";

/**
 * 初始化布局（多封装一层，使得能调用 useDispatch）
 * @param children
 * @constructor
 */
const InitLayout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();

  // 初始化全局用户状态
  const doInitLoginUser = useCallback(async () => {
    // 获取用户信息
    const res = await getLoginUserUsingGet();
    if (res.data) {
      //更新全局用户状态
      // dispatch(setLoginUser(res.data));
    } else {
      // todo 测试代码，实际可删除
      // setTimeout(() => {
      //   const testUser = {
      //     userName: "测试登录",
      //     id: 1,
      //     userAvatar: "https:www.code-nav.cn/logo.png",
      //     userRole: AccessEnum.ADMIN,
      //   };
      //   dispatch(setLoginUser(testUser));
      // }, 3000);
    }
  }, []);

  useEffect(() => {
    doInitLoginUser();
  }, []);

  return children;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Provider store={store}>
            <InitLayout>
              <BasicLayout>
                <AccessLayout>{children}</AccessLayout>
              </BasicLayout>
            </InitLayout>
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
}
