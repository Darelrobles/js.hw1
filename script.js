function showResult() {
  const fullNameE1 = document.getElementById('fullName');
  const ageE1 = document.getElementById('age');
  const weightE1 = document.getElementById('weight');
  const heightE1 = document.getElementById('height');

  const fullName = fullNameE1.value;
  const age = ageE1.value;
  const weight = weightE1.value;
  const height = heightE1.value;

  if (age < 18 || age > 60) {
    alert('Sorry, your age is wrong');
  } else if (weight < 50 || weight > 120) {
    alert('Sorry, your weight is wrong');
  } else if (height < 120 || height > 200) {
    alert('Sorry, your height is wrong');
  } else {
    alert(fullName + ', congrats! You are in!');
    fullNameE1.value = '';
    ageE1.value = '';
    weightE1.value = '';
    heightE1.value = '';
  }
}