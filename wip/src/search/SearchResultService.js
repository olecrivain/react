function filterResultsByDepart(results, depart) {
  if (depart) {
    return results.filter(result => result.depart.indexOf(depart) >= 0);
  } else {
    return results;
  }
}

function filterResultsByVoyageType(results, voyageTypes) {
  let checkedVoyageTypes = voyageTypes
    .filter(voyageType => voyageType.checked)
    .map(voyageType => voyageType.type);

  if (checkedVoyageTypes.length > 0) {
    return results.filter(result => checkedVoyageTypes.includes(result.type));
  } else {
    return results;
  }
}

export {
  filterResultsByDepart,
  filterResultsByVoyageType
};
