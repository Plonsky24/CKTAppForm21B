export default {
  async submitForm () {
    this.ready()
    var url = "https://docs.google.com/forms/d/e/1FAIpQLSdimV_BMwHWE-cKeX2fb12D4B0zerxjprYBW_5jRUxd_YRWFQ/formResponse?"

    var names = ['entry.1971848531', 'entry.2095210633', 'entry.1023986858', 'entry.2106804884', 'entry.15147818', 'entry.1362062595', 'entry.581553320']
    var i = 0;

    for (let key in this.dataFields) {
      url += names[i];
      url += '=';

      var field = this.dataFields[key].data;
      var arr = field.split(' ');
      if (arr.length > 1) {
        for (var k = 0; k < arr.length; k++) {
          url+= arr[k];
          if (k != arr.length-1) { url += '+'; }
        }
      }
      else { url += field; }
      url += '&';
      i++;
    }
    url += 'entry.2083507613=';
    url += this.CharData.label;

    fetch(url, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
    .catch((err)=> console.error(err))
  },
  async validateForm () {
    
  }
}
