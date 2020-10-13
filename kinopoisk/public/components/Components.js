/* eslint no-param-reassign: ["error", { "props": false }] */

export function createA(href, text) {
  const a = document.createElement('a');
  a.href = href;
  a.textContent = text;
  return a;
}

export function createSpan(classname, text) {
  const span = document.createElement('span');
  span.className = classname;
  span.textContent = text;
  return span;
}

export function createInput(type, name, text) {
  const input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.placeholder = text;
  return input;
}

export function createInputSubmit(value, className) {
  const input = document.createElement('input');
  input.type = 'submit';
  input.className = className;
  input.value = value;
  return input;
}

export function createDiv(className, parent) {
  const div = document.createElement('div');
  div.className = className;
  parent.appendChild(div);
  return div;
}

export function createLi(className, child) {
  const li = document.createElement('li');
  li.className = className;
  li.appendChild(child);
  return li;
}

function valid(form, reg, input, text) {
  const diver = createDiv('error', form);
  input.onblur = function () {
    if (!reg.test(this.value)) {
      this.classList.add('invalid');
      diver.innerHTML = text;
    }
  };

  input.onfocus = function () {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      diver.innerHTML = '';
    }
  };
}

export function renderForm(headConf, configInput, sub) {
  const { head, textContent, style } = headConf;
  const form = document.createElement('form');
  const formr = [];
  formr.push(form);

  if (head) {
    const header = document.createElement('h2');
    header.textContent = textContent;
    header.style = style;
    form.appendChild(header);
  }

  configInput.forEach((menuKey) => {
    const { type, name, text, required } = menuKey;
    const input = createInput(type, name, text);
    input.required = required;
    form.appendChild(input);
    formr.push(input);
  });
  const { text, className} = sub
  const submitpass = createInputSubmit(text, className);
  form.appendChild(submitpass);

  let i = 1;
  configInput.forEach((menuKey) => {
    const { reg, errorVal } = menuKey;
    if (menuKey.valid) {
      valid(form, reg, formr[i], errorVal);
    }
    i += 1;
  });
  return formr;
}
