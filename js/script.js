// -----Range------

// let range = new Range();
// range.setStart(p, 0);
// range.setEnd(p, 3);
// console.log(range);
// document.getSelection().addRange(range);


// -----Range работа с инпутом и формой----
// btn.onclick = () => {
//     let range = new Range();

//     range.setStart(p, start.value);
//     range.setEnd(p, end.value);

//     // document.getSelection().removeAllRanges();
//     document.getSelection().addRange(range);
// }


//--------------------------------------------------
//захват дочерних элементов в определленых участках
// let range = new Range();

// range.setStart(p.querySelector('i').firstChild, 2);
// range.setEnd(p.querySelector('span').firstChild, 5);

// alert(range);  // всплывающее окно
// window.getSelection().addRange(range);  // выделенный текст

//-----methods range----
let range = new Range();

  let methods = {
    deleteContents() {
      range.deleteContents();
    },
    extractContents() {
      let content = range.extractContents();
      result.innerHTML = "";
      result.append("Извлечено: ", content);
    },
    cloneContents() {
      let content = range.cloneContents();
      result.innerHTML = "";
      result.append("Клонировано: ", content);
    },
    insertNode() {
      let newNode = document.createElement('u');
      newNode.innerHTML = "НОВЫЙ УЗЕЛ";
      range.insertNode(newNode);
    },
    surroundContents() {
      let newNode = document.createElement('u');
      try {
        range.surroundContents(newNode);
      } catch(e) { alert(e) }
    },
    resetExample() {
      p.innerHTML = `Example: <i>italic</i> and <b>bold</b> <span>Hello word</span>`;
      result.innerHTML = "";

      range.setStart(p.firstChild, 2);
      range.setEnd(p.querySelector('b').firstChild, 3);

      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  };

  for(let method in methods) {
    document.write(`<div><button onclick="methods.${method}()">${method}</button></div>`);
  }
  methods.resetExample();

// ----Selection---выделение текста---
document.onselectionchange = function () {
    let { anchorNode, anchorOffset, focusNode, focusOffset } = document.getSelection();

    from.value = `${anchorNode && anchorNode.data}: ${anchorOffset}`;
    to.value = `${focusNode && focusNode.data}: ${focusOffset}`;
}

// ------получение выдиления-----
document.onselectionchange = function () {
    let selection = document.getSelection();

    cloned.innerHTML = astext.innerHTML = "";

    //клонируем DOM элемент
    for (let i = 0; i < selection.rangeCount; i++) {
        cloned.append(selection.getRangeAt(i).cloneContents());
    }

    // получаем как текст
    astext.innerHTML += selection;
}

//отслеживание выделеного текста
area.onselect = function () {
    from1.value = area.selectionStart;
    to1.value = area.selectionEnd;
}