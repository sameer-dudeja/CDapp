export const reducer = (state, action) => {
  if (action.type === 'CLASS COMPLETED') {
    return {
      ...state,
      isClassCompleted: true,
      isOther: false,
    }
  }
  if (action.type === 'CLASS INTERRUPTED') {
    return {
      ...state,
      isClassCompleted: false,
      isOther: false,
    }
  }
  if (action.type === 'OTHER') {
    return { ...state, isOther: true }
  }

  throw new Error('no matching action type')
}
