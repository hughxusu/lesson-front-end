void main() {
  bool isMale = true;
  print(isMale);

  isMale = false;
  print(isMale);

  if (isMale) {
    print('是男性');
  } else {
    print('不是男性');
  }


  // dart中不会进行类型转换
  var a = 123;
  var b = '123';
  if (a == b) {
    print('a和b相等');
  } else {
    print('a和b不相等');
  }

  // isMale = 0;
  // print(isMale);
}