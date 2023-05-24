// 封装校验
function validatePass(rule, value, callback){
    if (value === '') {
        callback(new Error('请输⼊密码'));
    } else {
        if (this.regForm.checkPass !== '') {
        this.$refs.regForm.validateField('checkPass');
        }
        callback();
    }
};

function validatePass2(rule, value, callback){
    if (value === '') {
        callback(new Error('请再次输⼊密码'));
    } else if (value !== this.regForm.password) {
        callback(new Error('两次输⼊密码不⼀致!'));
    } else {
        callback();
     }
};