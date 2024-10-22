import React from "react";
import './index.css';

/**
 * 全局底部栏组件
 * @constructor
 */
export default function GlobalFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="global-footer">
            <span>© {currentYear} 编程潘多拉</span>
            <br/>
            <span>
                <a href="https://www.yuque.com/icu0" target="_blank">
                    作者：Cool
                </a>
            </span>
        </div>
    );
}