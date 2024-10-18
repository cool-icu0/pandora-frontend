// @ts-ignore
/* eslint-disable */
import request from "@/libs/request";

/** addQuestionView POST /api/questionView/add */
export async function addQuestionViewUsingPost(
  body: API.QuestionViewAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/questionView/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteQuestionView POST /api/questionView/delete */
export async function deleteQuestionViewUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/questionView/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getQuestionViewVOById GET /api/questionView/get/vo */
export async function getQuestionViewVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionViewVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseQuestionViewVO_>("/api/questionView/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listQuestionViewByPage POST /api/questionView/list/page */
export async function listQuestionViewByPageUsingPost(
  body: API.QuestionViewQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageQuestionView_>(
    "/api/questionView/list/page",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** listQuestionViewVOByPage POST /api/questionView/list/page/vo */
export async function listQuestionViewVoByPageUsingPost(
  body: API.QuestionViewQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageQuestionViewVO_>(
    "/api/questionView/list/page/vo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** listMyQuestionViewVOByPage POST /api/questionView/my/list/page/vo */
export async function listMyQuestionViewVoByPageUsingPost(
  body: API.QuestionViewQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageQuestionViewVO_>(
    "/api/questionView/my/list/page/vo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** updateQuestionView POST /api/questionView/update */
export async function updateQuestionViewUsingPost(
  body: API.QuestionViewUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/questionView/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
