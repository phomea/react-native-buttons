const normal = {
  view: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'center',
    elevation: 3,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
};
const big = {
  view: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'center',
    elevation: 3,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
};
const rounded = {
  view: {
    borderRadius: 20,
  },
  text: {},
};
const white = {
  view: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
};
const black = {
  view: {
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
  },
};

const basicStyle = {
  view: {
    ...normal.view,
    ...black.view,
    ...rounded.view,
  },
  text: {
    ...normal.text,
    ...black.text,
    ...rounded.text,
  },
};
export default {
  white,
  rounded,
  normal,
  big,

  basicStyle,
};
