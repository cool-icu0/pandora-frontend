"use server";
import { Flex, Menu, message } from "antd";
import { getQuestionBankVoByIdUsingGet } from "@/api/questionBankController";
import Title from "antd/es/typography/Title";
import { getQuestionVoByIdUsingGet } from "@/api/questionController";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import QuestionCard from "@/components/QuestionCard";
import Link from "next/link";
import "./index.css";
/**
 * 题库题目详情页
 * @constructor
 */
export default async function BankQuestionPage({ params }) {
    const { questionBankId, questionId } = params;
    // 获取题库详情
    let bank = undefined;
    try {
        const res = await getQuestionBankVoByIdUsingGet({
            id: questionBankId,
            needQueryQuestionList: true,
            // 可以自行扩展为分页实现
            pageSize: 200,
        });
        bank = res.data;
    } catch (e) {
        message.error("获取题库列表失败，" + e.message);
    }
    // 错误处理
    if (!bank) {
        return <div>获取题库详情失败，请刷新重试</div>;
    }
    // 获取题目详情
    let question = undefined;
    try {
        const res = await getQuestionVoByIdUsingGet({
            id: questionId,
        });
        console.log("获取题目详情"+res)
        question = res.data;
    } catch (e) {
        message.error("获取题目详情失败，" + e.message);
    }
    // 错误处理
    if (!question) {
        return <div>获取题目详情失败，请刷新重试</div>;
    }
    // 题目菜单列表
    const questionMenuItemList = (bank.questionPage?.records || []).map((question) => {
        return {
            label: (
                <Link href={`/bank/${questionBankId}/question/${question.id}`}>{question.title}</Link>
            ),
            key: question.id,
        };
    });
    return (
        // todo 菜单需要折叠
        <div id="bankQuestionPage">
            <Flex gap={24}>
                <Sider theme="light" style={{ padding: "15px 0" }}>
                    <Title level={4} style={{ padding: "0 12px" }}>
                        {bank.title}
                    </Title>
                    <Menu items={questionMenuItemList} selectedKeys={[questionId]} />
                </Sider>
                <Content>
                    <QuestionCard question={question} />
                </Content>
            </Flex>
        </div>
    );
}