interface Note {
  user: string;
  bill: number;
  send(): string;
}

interface EmailNote extends Note {
  email: string;
}

let eNote: EmailNote = {
  user: '张三',
  bill: 100,
  email: 'zhangsan@example.com',
  send() {
    return `用户${this.user}您好，您的账单金额为${this.bill}元。目标邮件${this.email}`;
  },
};

console.log(eNote.send());
