function anagram(first, second) {
  var f = first.replace(/\s+/g, "");
  var s = second.replace(/\s+/g, "");

  if (f.length !== s.length) {
    return false;
  }

  var arr1 = f.split("").sort();
  var arr2 = s.split("").sort();

  var isAnagram = true;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isAnagram = false;
      break;
    }
  }

  return isAnagram;
}