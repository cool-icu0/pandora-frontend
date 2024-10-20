"use client";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormText,
} from "@ant-design/pro-components";
import { message, theme } from "antd";
import type { FC } from "react";
import Image from "next/image";
import { ProForm } from "@ant-design/pro-form";
import { userRegisterUsingPost } from "@/api/userController";
import { useRouter } from "next/navigation";
import Link from "next/link";

const UserRegisterPage: FC = (props) => {
  const { token } = theme.useToken();
  const [form] = ProForm.useForm();
  const router = useRouter();

  /**
   * 提交
   * @param values
   */
  const doSubmit = async (values: any) => {
    try {
      const res = await userRegisterUsingPost(values);
      if (res.data) {
        message.success("账号可用，注册成功！");
        // 前往登录页
        router.push("/user/login");
      }
    } catch (e) {
      // @ts-ignore
      message.error("注册失败，" + e.message);
    }
  };
  return (
    <div
      id="userRegisterPage"
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <LoginFormPage<API.UserAddRequest>
        form={form}
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        logo={
          <Image
            src="/assets/logo.png"
            alt="潘多拉图标"
            height={44}
            width={44}
          />
        }
        title="用户注册"
        subTitle="程序员面试刷题网站"
        containerStyle={{
          backgroundColor: "rgba(0, 0, 0,0.65)",
          backdropFilter: "blur(4px)",
        }}
        onFinish={doSubmit}
        submitter={{
          searchConfig: {
            submitText: "注册",
          },
        }}
      >
        <ProFormText
          name="userAccount"
          fieldProps={{
            size: "large",
            prefix: (
              <UserOutlined
                style={{
                  color: token.colorText,
                }}
                className={"prefixIcon"}
              />
            ),
          }}
          placeholder={"账号"}
          rules={[
            {
              required: true,
              message: "请输入账号!",
            },
          ]}
        />
        <ProFormText.Password
          name="userPassword"
          fieldProps={{
            size: "large",
            prefix: (
              <LockOutlined
                style={{
                  color: token.colorText,
                }}
                className={"prefixIcon"}
              />
            ),
          }}
          placeholder={"密码"}
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}
        />
        <ProFormText.Password
          name="checkPassword"
          fieldProps={{
            size: "large",
            prefix: <LockOutlined />,
          }}
          placeholder={"确认密码"}
          rules={[
            {
              required: true,
              message: "请再次输入密码！",
            },
          ]}
        />
        <div
          style={{
            marginBlockEnd: 24,
            textAlign: "end",
          }}
        >
          已有账号？
          <Link prefetch={false} href={"/user/login"}>
            去登录
          </Link>
        </div>
      </LoginFormPage>
    </div>
  );
};

export default () => {
  return (
    <ProConfigProvider dark>
      <UserRegisterPage />
    </ProConfigProvider>
  );
};
