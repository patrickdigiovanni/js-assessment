exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    total = 0;
    arr.forEach(e => {
      total += e;
    });
    return total;
  },

  remove: function(arr, item) {
    temp = [];
    arr.forEach(e => {
      if (e != item) {
        temp.push(e);
      }
    });
    return temp;
  },

  removeWithoutCopy: function(arr, item) {
    temp = arr;
    temp.forEach(e => {
      if (e != item) {
        temp.push(e);
      }
    });
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    total= 0;
    arr.forEach((e) => {
      if (e == item){
        total++
      }
    })
    return total;
  },

  duplicates: function(arr) {
    dupes = [];
    temp = [];
    arr.forEach((e) => {
      if(temp.indexOf(e) > -1 && dupes.indexOf(e) ==-1){
       dupes.push(e)
     }else{
       temp.push(e)
     }
    
    })
    return dupes;
  },

  square: function(arr) {
    temp=[]
    arr.forEach((e) => {
      temp.push(e*e)
    })
    return temp;
  },

  findAllOccurrences: function(arr, target) {
   temp = []
    arr.forEach((e, i) => {
      if(e == target){
        temp.push(i)
      }
    });
    return temp
  }
};
