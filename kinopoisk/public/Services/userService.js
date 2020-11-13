import { AjaxModule } from '../modules/ajax.js';

export default class UserService {
  static async fetchChangeLogin(login) {
    const res = await AjaxModule.ajaxPost({ url: '/chengelogin', body: { login } });
    return res.status;
  }

  static async fetchChangePassword(PasswordOld, Password) {
    const res = await AjaxModule.ajaxPost({ url: '/chengepass', body: { PasswordOld, Password } });
    // console.log(res);
    return res.status;
  }

  static async fetchChangeAvatar(avatar) {
    const res = await AjaxModule.ajaxPost({ url: '/changeAvatar', body: avatar });
    return res.status;
  }

  static async ChangeLogin(login) {
    const data = { ok: false, errmsg: undefined };
    if (login === '') {
      data.errmsg = 'Пустой логин';
    }
    const res = await this.fetchChangeLogin(login);
    if (res !== 200) {
      data.errmsg = 'Пользователь с таким логином уже сущетсвует';
    } else {
      data.ok = true;
    }
    return data;
  }

  static async ChangePassword(oldPass, newPass) {
    const data = { ok: false, errmsg: undefined };
    if (oldPass === '') {
      data.errmsg = 'Пустой старый пароль';
    }
    if (newPass === '') {
      data.errmsg = 'Пустой новый пароль';
    }
    const res = await this.fetchChangePassword(oldPass, newPass);
    if (res !== 200) {
      data.errmsg = 'Неправильный старый пароль';
    } else {
      data.ok = true;
    }
    return data;
  }

  static async ChangeAvatar(avatar) {
    const data = { ok: false, errmsg: undefined };
    const res = await this.fetchChangeAvatar(avatar);
    if (res !== 200) {
      data.errmsg = 'Ошибка';
    } else {
      data.ok = true;
    }
    return data;
  }
}
