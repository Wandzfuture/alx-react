import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const immutableMap = fromJS(object);
  const value = immutableMap.getIn(array);

  if (typeof value === 'string') {
    return value;
  } else if (Map.isMap(value)) {
    return value;
  } else {
    return undefined;
  }
}
