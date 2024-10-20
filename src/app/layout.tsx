"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import React, { useCallback, useEffect } from "react";
import BasicLayout from "@/layouts/BasicLayout";
import { Provider, useDispatch } from "react-redux";
import { getLoginUserUsingGet } from "@/api/userController";
import store, { AppDispatch } from "@/stores";
import AccessLayout from "@/access/AccessLayout";
import { setLoginUser } from "@/stores/loginUser";
import { usePathname, useRouter } from "next/navigation";

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
      // @ts-ignore
      dispatch(setLoginUser(res.data));
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
  const pathname = usePathname();
  // 定义一个函数来判断是否是登录或注册页面
  const isLoginOrRegisterPage = () => {
    // 这里需要根据你的实际路由配置来调整
    const loginPath = "/user/login";
    const registerPath = "/user/register";
    return pathname === loginPath || pathname === registerPath;
  };
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Provider store={store}>
            <InitLayout>
              {isLoginOrRegisterPage() ? (
                <>{children}</>
              ) : (
                <BasicLayout>
                  <AccessLayout>{children}</AccessLayout>
                </BasicLayout>
              )}
            </InitLayout>
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
}
