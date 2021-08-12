/**
 * 动态规划获取最长回文子串
 *
 * */
const longestPalindrome = function(s: string): string {
    if (s == null) {
        return '';
    }
    const n = s.length;
    if (n === 1) {
        return s;
    }
    // 初始化一个二维数组容器
    // 记录dp[i][j]既str[i]到str[j]是否为回文
    const dp = new Array(n-1);
    for(let i = 0;i < dp.length; i++){
        dp[i] = new Array(n);
    }

    // 左边界
    let left = 0;
    // 右边界
    let right = 0;
    // 从后往前去取
    for (let i = n - 2; i >= 0; i--) {
        dp[i][i] = true;
        for (let j = i + 1; j < n; j++) {
            /**
             * 首尾两个字符相等
             * 1、当前字符长度为小于3等于的 如 'aa', 'aba' 一定是回文
             * 2、或str从i+1到j-1是回文
             * */
            dp[i][j] = s[i]== s[j] &&( j-i<3||dp[i+1][j-1]);//小于3是因为aba一定是回文
            if(dp[i][j]&&right-left<j-i){
                left=i;
                right=j;
            }
        }
    }
    return s.substring(left,right+1);
};
export default longestPalindrome;