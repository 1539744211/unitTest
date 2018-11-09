module.exports = {
    'Search by baidu': function (client) {
        // 定义页面元素
        // 首页
        const add_contact = '.add_contact';
        const select_education = '.select_education';
        const all_eucations = '.all_eucations p[data-id=coworker]';
        const username = '#username';
        const mobile = '#mobile';
        const sure_btn = '.sure_btn';
        const changeAgreement = '.changeAgreement'; // 修改协议
        const changeAgreement_a = '.agreement .main_color'; // 进入协议页面
        const submit_p = '.submit p';

        // 协议页面
        agreement_page = '#agreement_page';

        // 支付页
        const payment_method_page = '.payment_method_page';
        const choose_wechat = '.choose[data-selected=wechat]';
        const choose_alipay = '.choose[data-selected=alipay]';
        const submit = '.payment_method_page .submit p';

        // 支付宝空壳页面
        const h5pay = '.J-h5pay';
        const am_section = '.am-section:nth-chlid(1) .button';

        // 密码输入页
        const spwd_unencrypt = '#spwd_unencrypt';

        // 启动浏览器并打开 http://192.168.100.47:8080/index.html
        client.url('http://192.168.100.47:8080/index.html').maximizeWindow()
            // 确保输入框可以使用.
            .click(submit_p)
            .pause(1500)
            .click(add_contact)
            .pause(1000)
            .click(select_education)
            .pause(1000)
            .click(all_eucations)
            .pause(1000)
            .setValue(username, "张源辉")
            .pause(1000)
            .setValue(mobile, "15707957821")
            .pause(1000)
            .click(sure_btn)
            .pause(1000)
            .click(changeAgreement_a)
            .pause(3000)
            .back()
            .pause(2000)
            .click(changeAgreement)
            .pause(1000)
            .click(submit_p)
            .pause(1500)
            .click(changeAgreement)
            .pause(1000)
            .click(submit_p)
            .waitForElementVisible(payment_method_page, 5000)
            .click(choose_wechat)
            .pause(1000)
            .click(choose_alipay)
            .pause(1000)
            .click(submit)
            .waitForElementVisible(h5pay, 5000)
            .click(h5pay)
            .pause(1000)
            .click(am_section)
            .waitForElementVisible(spwd_unencrypt, 5000)
            // 截屏 
            .saveScreenshot('reports/answers.png')
            .end()
    }
}