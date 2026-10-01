abstract class Note {
  user: string;
  bill: number;

  constructor(user: string, bill: number) {
    this.user = user;
    this.bill = bill;
  }

  abstract send(): void;

  info(): string {
    return `亲爱的用户${this.user}，您的账单为${this.bill}`;
  }
}

class EmailNote extends Note {
  email: string;

  constructor(user: string, bill: number, email: string) {
    super(user, bill);
    this.email = email;
  }

  send(): void {
    console.log(`调用【邮箱】api接口向 ${this.email}发送 📧`);
    console.log('-----------------');
    let msg = '用户，您好：\n';
    msg += this.info() + '\n';
    msg += '[中国联通]';
    console.log(msg);
    console.log('-----------------');
  }
}

class SmsNote extends Note {
  phone: string;

  constructor(user: string, bill: number, phone: string) {
    super(user, bill);
    this.phone = phone;
  }

  send(): void {
    console.log(`调用【短信】api接口向 ${this.phone}发送 📭`);
    console.log('-----------------');
    let msg = '[中国联通]' + this.info();
    msg += '';
    console.log(msg);
    console.log('-----------------');
  }
}

class NoteSender {
  notes: Note[] = [];

  addNote(note: Note): void {
    this.notes.push(note);
  }

  sendNotes(): void {
    this.notes.forEach((note) => {
      note.send();
    });
  }
}

let smsNote: SmsNote = new SmsNote('张三', 100, '13800000000');
let emailNote: EmailNote = new EmailNote('张三', 100, 'zhangsan@example.com');
let sender: NoteSender = new NoteSender();
sender.addNote(smsNote);
sender.addNote(emailNote);
sender.sendNotes();

console.log(smsNote instanceof Note);
console.log(emailNote instanceof Note);
