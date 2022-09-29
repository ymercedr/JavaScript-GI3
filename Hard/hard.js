function person() {
  const pii = {
    name: "Yareline",
    ssn: 739561073,
  };
  function getName() {
    return pii.name;
  }
  return getName();
}

console.log(person());
