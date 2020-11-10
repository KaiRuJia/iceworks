/** protectPhone函数
 * 替换手机号字符串中间四位为****
 * protectPhone('18512341234') ---> '185****1234'; 
*/
export const protectPhone = (phoneNum: string): string => {
  let regExp = /(\d{3})\d{4}(\d{4})/;
  let result = phoneNum.replace(regExp, '$1****$2');
  return result;
}