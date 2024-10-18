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
            <div>© {currentYear} 编程潘多拉</div>
            <div>
                <a href="https://www.yuque.com/icu0" target="_blank">
                    作者：Cool
                </a>
            </div>
        </div>
    );
}