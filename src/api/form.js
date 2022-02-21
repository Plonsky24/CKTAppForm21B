export default {
  submitForm (answers) {
    var url = "https://docs.google.com/forms/d/e/1FAIpQLSdimV_BMwHWE-cKeX2fb12D4B0zerxjprYBW_5jRUxd_YRWFQ/formResponse?"

    var names = ['entry.1971848531', 'entry.2095210633', 'entry.1023986858', 'entry.2106804884', 'entry.15147818', 'entry.1362062595', 'entry.581553320']

    for (let i = 0; i < answers.length-1; i++) {
      url += names[i];
      url += '=';

      var field = answers[i].a;
      var arr = field.split(' ');
      if (arr.length > 1) {
        for (var k = 0; k < arr.length; k++) {
          url+= arr[k];
          if (k != arr.length-1) { url += '+'; }
        }
      }
      else { url += field; }
      url += '&';
    }
    url += 'entry.2083507613=';
    url += answers[answers.length-1].a;

    fetch(url, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
    .catch((err)=> console.error(err));
    return true;
  },
  async validateForm (answers) {
    for (var k = 0; k < answers.length; k++) {
      if (!answers[k].validated){
        console.error("Form not Validated");
        return false;
      }
    }
    return this.submitForm(answers);
  }
}
