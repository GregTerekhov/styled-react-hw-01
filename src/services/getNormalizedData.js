export const getNormalizedData = items =>
  items.reduce((result, current) => {
    const existingObj = result.find(obj => obj.label === current.label);

    if (existingObj) {
      existingObj.percentage += current.percentage;
    } else {
      result.push(current);
    }

    return result;
  }, []);
